import { animate, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { OriginIcon } from '@kit/components/Icon/OriginIcon';
import { currency } from '@kit/data';
import { easing, spring } from '@kit/motion/presets';
import { useReduceMotion } from '@kit/motion/reducedMotion';
import { copy, type LineupSeries } from '../data';
import styles from './GarminLineup.module.css';

/** Series tile (Figma 1163:29134): 148 wide, 8 apart; the ruler has a major tick under every tile and 19 minor ticks between */
const TILE = 148;
const GAP = 8;
const STEP = TILE + GAP;
const TICKS_PER_STEP = 20;
const TICK_STEP = STEP / TICKS_PER_STEP;
/** x of tile i's centre in the track (its major tick sits 1px left of it, the needle 2px) */
const centre = (i: number) => TILE / 2 + i * STEP;
/** the ruler sits 14 under the 190 tiles */
const RULER_TOP = 190 + 14;
/** room after the last series, so at the end it doesn't sit on the right edge (asked) */
const END_PAD = 32;

/**
 * The mobile rail's feel (src/flows/plp/components/GarminLineup · Rail), on the motion values the mobile uses:
 * · one position (which series is under the needle) drives the row, the needle, the tower and the tiles; a drag or a
 *   trackpad swipe of one step (156px) moves it one series, a fling carries on, and it springs to rest on a series;
 * · the needle travels with the row — under the first series at the start, under the last at the end — and hides
 *   while the row moves, back on settle;
 * · while the row moves the ticks beside the needle rise on a bell and take its pink (the tower), its height
 *   following the rail's speed, smoothed every frame;
 * · the needle's line stretches and its dot lifts with speed; each series passing under it pops the dot;
 */
const WAVE = { amp: 0.43, sigma: 17.5, tint: 0.9, speed: 380, smooth: 0.15, rise: 0.16, fall: 0.07 };
const NEEDLE = { stretch: 0.0005, maxStretch: 0.3, lift: 0.004, maxLift: 3, pop: 1.7, popS: 0.28, settleMs: 90, idleScale: 0.72 };
const REST_MS = 120;
const REST_SCALE = 96 / 112;
/** the scrub position's spring: quick enough to stay under the finger, soft enough to glide a wheel's notches */
const SCRUB_SPRING = { stiffness: 260, damping: 34, mass: 0.9, restDelta: 0.0005 };
/** a fling carries on this many ms of its release speed before it rests */
const FLING_MS = 220;

/**
 * "Meet the Garmin lineup" (Figma 1320:1779). Scrolling the row moves the needle along the price ruler; clicking a series
 * picks it (Figma 1332:903, asked: only its 112px photo — no halo, no bold), glides it under the needle and narrows the results.
 * Clicking it again, or Clear in the results bar, shows every series. Two or fewer series: no ruler (1329:1344).
 */
export function GarminLineup({ series, picked, onPick }: { series: LineupSeries[]; picked: string | null; onPick: (id: string | null) => void }) {
  const reduce = useReduceMotion();
  const viewport = useRef<HTMLDivElement>(null);
  const count = series.length;
  const ruled = count > 2;
  const N = Math.max(1, count - 1);
  const ticks = Math.max(0, count - 1) * TICKS_PER_STEP + 1;
  const pickedIndex = series.findIndex((s) => s.id === picked);
  const clampF = (f: number) => Math.min(N, Math.max(0, f));

  // ── one position drives everything: f = which series the needle is over (fractional). Input moves `target`
  // (a drag or swipe of one STEP is one series); `f` springs after it, so a notched mouse wheel glides too.
  // The row's travel maps onto f evenly (row x = −f / N · max), so the needle starts under the first series, ends under
  // the last, and the row only moves as far as it overflows.
  const target = useMotionValue(Math.max(0, pickedIndex));
  const f = useSpring(target, reduce ? { stiffness: 5000, damping: 200 } : SCRUB_SPRING);
  const [maxS, setMaxS] = useState(0);
  const rowX = useTransform(f, (v) => -(v / N) * maxS);
  const needleX = useTransform(f, (v) => v * STEP - (v / N) * maxS);
  const [edges, setEdgesState] = useState({ start: true, end: true });
  // only re-render when an end is reached or left (this runs every frame the row moves)
  const setEdges = (e: { start: boolean; end: boolean }) => setEdgesState((o) => (o.start === e.start && o.end === e.end ? o : e));

  /** the tower only rises once the row has been used (not on the first layout or a deep link's glide) */
  const touched = useRef(false);
  const touch = () => {
    touched.current = true;
  };

  // ── needle: speed springs its stretch and lift; it hides while the row moves
  const speed = useMotionValue(0);
  const v = useSpring(speed, spring.gentle);
  const stretch = useTransform(v, (x) => 1 + Math.min(NEEDLE.maxStretch, Math.abs(x) * NEEDLE.stretch));
  const lift = useTransform(v, (x) => -Math.min(NEEDLE.maxLift, Math.abs(x) * NEEDLE.lift));
  const pop = useMotionValue(1);
  const [moving, setMoving] = useState(false);
  const movingRef = useRef(false);
  const [rowBusy] = useState(makeRowBusy);
  const setMove = (m: boolean) => {
    rowBusy.set(m);
    if (movingRef.current === m) return;
    movingRef.current = m;
    setMoving(m);
  };
  const settle = useRef<ReturnType<typeof setTimeout>>(undefined);
  /** the series the row last came to rest on */
  const [restAt, setRestAt] = useState(Math.max(0, pickedIndex));
  const pickedRef = useRef(pickedIndex);
  pickedRef.current = pickedIndex;
  const index = useRef<number | null>(null);

  // ── the tower: ticks beside the needle rise on a bell and take its pink while the row moves
  const tickEls = useRef<(HTMLSpanElement | null)[]>([]);
  const wave = useRef({ E: 0, raf: 0, left: 0, prev: 0, v: 0, t: 0, kicked: 0, lit: new Set<number>() });
  const paintWave = () => {
    const w = wave.current;
    const reach = WAVE.sigma * 3;
    const lo = Math.max(0, Math.floor((w.left - reach) / TICK_STEP));
    const hi = Math.ceil((w.left + reach) / TICK_STEP);
    const now = new Set<number>();
    if (w.E > 0.01) {
      for (let t = lo; t <= hi; t++) {
        const el = tickEls.current[t];
        if (!el) continue;
        const d = t * TICK_STEP - w.left;
        const b = Math.exp(-(d * d) / (2 * WAVE.sigma * WAVE.sigma));
        if (b < 0.01) continue;
        el.style.scale = `1 ${(1 + WAVE.amp * w.E * b).toFixed(3)}`;
        el.style.setProperty('--tint', b > 0.05 ? (WAVE.tint * w.E * b).toFixed(2) : '0');
        now.add(t);
      }
    }
    w.lit.forEach((t) => {
      if (now.has(t)) return;
      const el = tickEls.current[t];
      if (el) {
        el.style.scale = '';
        el.style.removeProperty('--tint');
      }
    });
    w.lit = now;
  };
  // per frame: the speed since the last frame, averaged, sets the target height; the height eases toward it
  const waveFrame = (ts: number) => {
    const w = wave.current;
    const dt = Math.min(50, Math.max(4, ts - w.t));
    w.t = ts;
    const k = (r: number) => 1 - Math.pow(1 - r, dt / 16.67);
    const inst = (Math.abs(w.left - w.prev) / dt) * 1000;
    w.prev = w.left;
    w.v += (inst - w.v) * k(WAVE.smooth);
    const goal = Math.min(1, w.v / WAVE.speed);
    w.E += (goal - w.E) * k(goal > w.E ? WAVE.rise : WAVE.fall);
    if (w.E < 0.004 && w.v < 2 && performance.now() - w.kicked > 120) {
      w.E = 0;
      w.v = 0;
      paintWave();
      w.raf = 0;
      return;
    }
    paintWave();
    w.raf = requestAnimationFrame(waveFrame);
  };
  const kickWave = (left: number) => {
    const w = wave.current;
    if (!w.raf) {
      w.prev = left;
      w.t = performance.now();
      w.raf = requestAnimationFrame(waveFrame);
    }
    w.left = left;
    w.kicked = performance.now();
  };
  useEffect(() => () => cancelAnimationFrame(wave.current.raf), []);

  // the needle replaces the grey tick under it at rest (one line there, not two a pixel apart)
  const under = useRef(-1);
  const hideUnder = (at: number | null) => {
    const t = at === null ? -1 : Math.round((at * STEP) / TICK_STEP);
    if (t === under.current) return;
    const prev = tickEls.current[under.current];
    if (prev) prev.style.opacity = '';
    const el = tickEls.current[t];
    if (el) el.style.opacity = '0';
    under.current = t;
  };

  // every frame f moves: the tower, the needle's stretch, the dot's pop as a series passes, the arrows, and settling
  useEffect(() => {
    let last = { v: f.get(), t: performance.now() };
    const off = f.on('change', (value) => {
      const now = performance.now();
      const dt = now - last.t;
      if (dt > 0 && dt < 100) speed.set(((value - last.v) / dt) * 1000 * STEP);
      last = { v: value, t: now };
      // by where the row is heading, so an arrow starts leaving as the glide to that end begins, not when it lands
      const to = target.get();
      setEdges({ start: to <= 0.01 || maxS <= 1, end: to >= N - 0.01 || maxS <= 1 });
      if (!ruled) return;
      setMove(true);
      hideUnder(null);
      if (!reduce && touched.current) kickWave(value * STEP);
      const i = Math.max(0, Math.min(count - 1, Math.round(value)));
      if (index.current !== null && i !== index.current && !reduce) animate(pop, [1, NEEDLE.pop, 1], { duration: NEEDLE.popS, ease: easing.ios });
      index.current = i;
      clearTimeout(settle.current);
      settle.current = setTimeout(() => {
        speed.set(0);
        const g = f.get();
        if (Math.abs(g - Math.round(g)) * STEP < 3) {
          setMove(false);
          setRestAt(Math.round(g));
          hideUnder(Math.round(g) === pickedRef.current ? Math.round(g) : null);
        }
      }, NEEDLE.settleMs);
    });
    return off;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [f, maxS, N, ruled, count, reduce]);

  /** the row comes to rest on the nearest series (a fling carries on a little first) */
  const rest = useRef<ReturnType<typeof setTimeout>>(undefined);
  const snapSoon = (ms = REST_MS) => {
    clearTimeout(rest.current);
    rest.current = setTimeout(() => target.set(clampF(Math.round(target.get()))), ms);
  };
  const glideTo = (i: number) => {
    clearTimeout(rest.current);
    target.set(clampF(i));
  };

  // a pick (click, deep link) glides its series under the needle
  useEffect(() => {
    // the grey tick under the needle comes back unless the needle stands on the picked series
    if (ruled && !movingRef.current) hideUnder(pickedIndex >= 0 && Math.round(f.get()) === pickedIndex ? pickedIndex : null);
    if (pickedIndex < 0) return;
    touch();
    glideTo(pickedIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickedIndex]);

  // how far the row overflows (its travel), and where the needle stands, on layout and resize
  useLayoutEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const measure = () => {
      const track = el.firstElementChild as HTMLElement | null;
      const m = Math.max(0, (track?.offsetWidth ?? 0) - el.clientWidth);
      setMaxS(m);
      setEdges({ start: f.get() <= 0.01 || m <= 1, end: f.get() >= N - 0.01 || m <= 1 });
      if (ruled && !movingRef.current) hideUnder(Math.round(f.get()) === pickedRef.current ? Math.round(f.get()) : null);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, ruled]);

  // trackpad swipes and shift + wheel scrub the row; a plain vertical wheel still scrolls the page
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      e.preventDefault();
      touch();
      const px = e.deltaMode === 1 ? dx * 16 : dx;
      target.set(clampF(target.get() + px / STEP));
      snapSoon();
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [N]);

  // drag (mouse, pen or touch): one STEP of drag is one series; on release a fling carries on, then it rests on one
  const drag = useRef<{ x: number; f0: number; moved: boolean; samples: { x: number; t: number }[] } | null>(null);
  const dragged = useRef(false);
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    touch();
    clearTimeout(rest.current);
    drag.current = { x: e.clientX, f0: target.get(), moved: false, samples: [{ x: e.clientX, t: performance.now() }] };
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) < 4) return;
    if (!d.moved) {
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.dataset.dragging = '';
    }
    d.samples.push({ x: e.clientX, t: performance.now() });
    if (d.samples.length > 5) d.samples.shift();
    // past the ends it gives, like a rubber band
    const raw = d.f0 - dx / STEP;
    const over = raw < 0 ? raw : raw > N ? raw - N : 0;
    target.set(clampF(raw) + over * 0.3);
  };
  const onPointerEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;
    delete e.currentTarget.dataset.dragging;
    const a = d.samples[0];
    const b = d.samples[d.samples.length - 1];
    const vx = b.t > a.t ? (b.x - a.x) / (b.t - a.t) : 0; // px / ms
    target.set(clampF(Math.round(target.get() - (vx * FLING_MS) / STEP)));
    dragged.current = true;
    setTimeout(() => (dragged.current = false), 0);
  };

  /** a page of series: as many as fit, less one */
  const page = (dir: 1 | -1) => {
    const el = viewport.current;
    if (!el) return;
    touch();
    const visible = Math.max(1, Math.floor(el.clientWidth / STEP) - 1);
    glideTo(Math.round(target.get()) + dir * visible);
  };

  // ← / → move between series, Home / End jump to the ends; the focused series glides under the needle
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tiles = [...(viewport.current?.querySelectorAll<HTMLButtonElement>('[data-tile]') ?? [])];
    const at = tiles.indexOf(document.activeElement as HTMLButtonElement);
    if (at < 0) return;
    const to = e.key === 'ArrowRight' ? at + 1 : e.key === 'ArrowLeft' ? at - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tiles.length - 1 : null;
    if (to === null) return;
    e.preventDefault();
    touch();
    const next = Math.max(0, Math.min(tiles.length - 1, to));
    tiles[next]?.focus({ preventScroll: true });
    glideTo(next);
  };

  return (
    <section className={styles.lineup} aria-labelledby="garmin-lineup-title">
      <h2 id="garmin-lineup-title" className={styles.title}>
        {copy.lineupTitle}
      </h2>

      <div className={styles.carousel}>
        <div
          ref={viewport}
          className={styles.viewport}
          onKeyDown={onKeyDown}
          // a tab into an off-screen tile must not scroll the clipped row: the row moves by f only
          onScroll={(e) => (e.currentTarget.scrollLeft = 0)}
          onFocus={(e) => {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(i) && (e.target as HTMLElement).matches(':focus-visible')) {
              touch();
              glideTo(i);
            }
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onClickCapture={(e: ReactMouseEvent) => dragged.current && e.stopPropagation()}
        >
          <motion.div className={styles.track} style={{ width: count * STEP - GAP + END_PAD, x: rowX }}>
            <RowBusy.Provider value={rowBusy}>
              <div className={styles.tiles} role="group" aria-label="Garmin series">
                {series.map((s, i) => (
                  <Tile key={s.id} s={s} i={i} selected={s.id === picked} onPick={onPick} />
                ))}
              </div>
            </RowBusy.Provider>

            {ruled && (
              <div className={styles.ruler} aria-hidden>
                {Array.from({ length: ticks }, (_, t) => (
                  <span
                    key={t}
                    ref={(el) => {
                      tickEls.current[t] = el;
                    }}
                    className={t % TICKS_PER_STEP === 0 ? styles.tickMajor : styles.tick}
                    style={{ left: centre(0) - 1 + t * TICK_STEP }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* the needle starts over the first series and travels with the row, onto the last at the end */}
        {ruled && (
          <motion.span className={styles.indicator} style={{ top: RULER_TOP, left: centre(0) - 2, x: needleX }} aria-hidden>
            <motion.span
              className={styles.needle}
              initial={false}
              // only the clicked series gets the needle (asked): a scroll that comes to rest elsewhere leaves the plain
              // grey ruler, and with nothing picked there's no needle at all (mobile's default state)
              animate={!moving && pickedIndex >= 0 && restAt === pickedIndex ? { scale: 1, opacity: 1 } : { scale: NEEDLE.idleScale, opacity: 0 }}
              transition={{ scale: reduce ? { duration: 0 } : spring.gentle, opacity: { duration: 0.18, ease: easing.ios } }}
            >
              <motion.span className={styles.dot} style={{ y: lift, scale: pop }} />
              <motion.span className={styles.line} style={{ scaleY: stretch }} />
            </motion.span>
          </motion.span>
        )}

        {/* always mounted: at an end they fade and shrink away instead of popping (asked) */}
        <span className={`${styles.fade} ${styles.fadeStart}`} data-hidden={edges.start || undefined} aria-hidden />
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowStart}`}
          data-hidden={edges.start || undefined}
          tabIndex={edges.start ? -1 : undefined}
          aria-hidden={edges.start || undefined}
          onClick={() => page(-1)}
          aria-label={copy.previous}
        >
          <OriginIcon name="chevron-left" size={16} />
        </button>
        <span className={`${styles.fade} ${styles.fadeEnd}`} data-hidden={edges.end || undefined} aria-hidden />
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowEnd}`}
          data-hidden={edges.end || undefined}
          tabIndex={edges.end ? -1 : undefined}
          aria-hidden={edges.end || undefined}
          onClick={() => page(1)}
          aria-label={copy.next}
        >
          <OriginIcon name="chevron-right" size={16} />
        </button>
      </div>
    </section>
  );
}

/** true while the row moves (scroll, swipe, drag, glide); `subscribe` hears when it starts */
function makeRowBusy() {
  const subs = new Set<() => void>();
  return {
    current: false,
    set(v: boolean) {
      if (v && !this.current) subs.forEach((f) => f());
      this.current = v;
    },
    subscribe(f: () => void) {
      subs.add(f);
      return () => void subs.delete(f);
    },
  };
}
const RowBusy = createContext(makeRowBusy());

/**
 * A series tile. Memoised: it re-renders only when it's picked or un-picked, never as the row scrolls. Picked or hovered:
 * the photo grows 96 → 112 off its bottom edge (and a picked name is semibold). Scrolling never selects (asked).
 */
const Tile = memo(function Tile({ s, i, selected, onPick }: { s: LineupSeries; i: number; selected: boolean; onPick: (id: string | null) => void }) {
  const reduce = useReduceMotion();
  const own = useMotionValue(selected ? 1 : 0);
  useEffect(() => void animate(own, selected ? 1 : 0, { duration: reduce ? 0 : 0.3, ease: easing.inOut }), [selected, reduce, own]);
  // hover grows the photo like the selected state (asked: no grey tile)
  const hover = useMotionValue(0);
  const hovering = useRef(false);
  const rowBusy = useContext(RowBusy);
  // the row started moving: let go of any hover at once
  useEffect(
    () =>
      rowBusy.subscribe(() => {
        if (!hovering.current) return;
        hovering.current = false;
        animate(hover, 0, ease);
      }),
    [rowBusy],
  ); // eslint-disable-line react-hooks/exhaustive-deps
  const ease = { duration: reduce ? 0 : 0.25, ease: easing.inOut };
  // only a click selects (asked): scrolling moves the needle but never grows the tile under it
  const c = useTransform([own, hover], ([o, h]: number[]) => Math.max(o, h));
  const scale = useTransform(c, (x) => REST_SCALE + (1 - REST_SCALE) * x);
  return (
    <button
      type="button"
      data-tile
      data-index={i}
      className={styles.tile}
      data-selected={selected || undefined}
      aria-pressed={selected}
      aria-label={`${s.name}, starting ${Math.round(s.from)}`}
      onClick={() => onPick(selected ? null : s.id)}
      // hover only from the mouse really moving over a resting row: a tile sliding under a still pointer (scroll, swipe,
      // drag) never grows, so scrolling never looks like selecting (asked)
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || rowBusy.current || (e.movementX === 0 && e.movementY === 0)) return;
        if (hover.get() !== 1 && !hovering.current) {
          hovering.current = true;
          animate(hover, 1, ease);
        }
      }}
      onPointerLeave={() => {
        hovering.current = false;
        animate(hover, 0, ease);
      }}
    >
      <motion.span className={styles.photo} style={{ scale }}>
        <img src={s.image} alt="" draggable={false} />
      </motion.span>
      <span className={styles.name}>{s.name}</span>
      <span className={styles.price}>
        {copy.starting} {currency} {Math.round(s.from)}
      </span>
    </button>
  );
});
