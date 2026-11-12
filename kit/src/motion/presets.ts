import type { Transition } from 'motion/react';

type Bezier = [number, number, number, number];

/**
 * Central motion tokens. Every animation in the kit reads from here,
 * so tuning a curve or a spring changes the feel of all flows at once.
 * Values mirror what bappzaar uses with reanimated (withTiming / withSpring).
 */
export const easing = {
  /** Easing.out(Easing.cubic) — default for UI entering */
  out: [0.215, 0.61, 0.355, 1] as Bezier,
  /** Easing.inOut(Easing.cubic) */
  inOut: [0.645, 0.045, 0.355, 1] as Bezier,
  /** Easing.in(Easing.cubic) — elements leaving */
  in: [0.55, 0.055, 0.675, 0.19] as Bezier,
  /** Easing.bezier(0.25, 0.1, 0.25, 1) — RN default ease */
  standard: [0.25, 0.1, 0.25, 1] as Bezier,
  /** iOS-like navigation curve */
  ios: [0.32, 0.72, 0, 1] as Bezier,
  /** Easing.out(Easing.back(1.5)) — playful overshoot */
  backOut: [0.34, 1.56, 0.64, 1] as Bezier,
};

export const duration = {
  instant: 0.1,
  fast: 0.15,
  base: 0.25,
  medium: 0.3,
  slow: 0.45,
  slower: 0.6,
};

export const spring = {
  /** buttons / press feedback */
  press: { type: 'spring', stiffness: 500, damping: 30, mass: 0.6 },
  /** sheets, drawers — reanimated withSpring({ damping: 20, stiffness: 200 }) */
  sheet: { type: 'spring', stiffness: 260, damping: 30, mass: 1 },
  /** badges, counters, hearts */
  bouncy: { type: 'spring', stiffness: 400, damping: 14 },
  /** default layout animations */
  gentle: { type: 'spring', stiffness: 170, damping: 26 },
} satisfies Record<string, Transition>;

export const tween = (d: keyof typeof duration = 'base', e: keyof typeof easing = 'out'): Transition => ({
  duration: duration[d],
  ease: easing[e],
});

/**
 * Field Design System motion (@field-ds/tokens `motion`, the coded Origin DS). Use with the `field*` components and
 * variants: `fieldMotion.spring.springLight` for thumbs / knobs / sheets, `fieldMotion.ease.standard` for timing.
 * Durations are seconds (Field ms ÷ 1000).
 */
export const fieldMotion = {
  duration: { instant: 0.04, xs: 0.1, sm: 0.16, base: 0.2, recede: 0.18, emphasized: 0.22, lg: 0.26, xl: 0.32 },
  delay: { stagger: 0.025, beat: 0.12 },
  ease: {
    standard: [0.32, 0.72, 0, 1] as Bezier,
    loft: [0.22, 1, 0.36, 1] as Bezier,
    accelerate: [0.4, 0, 1, 1] as Bezier,
    decelerate: [0, 0, 0.2, 1] as Bezier,
    easeInOut: [0.6, 0, 0.4, 1] as Bezier,
  },
  spring: {
    interaction: { type: 'spring', stiffness: 220, damping: 18, mass: 1 },
    snappy: { type: 'spring', stiffness: 280, damping: 22, mass: 1 },
    springLight: { type: 'spring', stiffness: 300, damping: 28, mass: 1 },
    springHeavy: { type: 'spring', stiffness: 320, damping: 32, mass: 1 },
    springBouncy: { type: 'spring', stiffness: 280, damping: 18, mass: 1 },
  } satisfies Record<string, Transition>,
  /** BUTTON_PRESS_SCALE / SearchBar press */
  pressScale: 0.98,
  /** pressed opacity on rows, accordions, chips */
  pressOpacity: 0.85,
} as const;

/** Press scale used by AnimatedPressable in bappzaar (scale 0.96) */
export const pressScale = 0.96;

/**
 * Apple-style spring (SwiftUI `.spring(response:dampingFraction:)`) as a motion spring:
 * ω = 2π / response, stiffness = ω², damping = 2ζω, mass 1.
 */
export const appleSpring = (response: number, dampingFraction: number) => {
  const w = (2 * Math.PI) / response;
  return { type: 'spring' as const, stiffness: +(w * w).toFixed(2), damping: +(2 * dampingFraction * w).toFixed(2), mass: 1 };
};

/** Easing from evenly spaced samples (what a CSS `linear(…)` list is), interpolated linearly. */
export const sampledEase = (samples: readonly number[]) => (t: number) => {
  if (t <= 0) return samples[0];
  if (t >= 1) return samples[samples.length - 1];
  const x = t * (samples.length - 1);
  const i = Math.floor(x);
  return samples[i] + (samples[i + 1] - samples[i]) * (x - i);
};

/**
 * The noon search → PLP handoff motion (ProtoPie Dev Handoff "noon X supermall", scenario Test01, read from
 * its recorded property tracks; ported via github.com/saswata2002/Brand-Widget-PLP). One spring moves
 * everything; fades use two recorded curves. Times in seconds.
 */
export const handoff = {
  /** every movement: stiffness 280.6, damping 27.14 (ω 16.75 rad/s, ζ 0.81, 1.3% overshoot, settled ≈0.5s) */
  spring: { type: 'spring', stiffness: 280.6, damping: 27.14, mass: 1 } as const,
  /** fades in (rows, trending, cards): fast-start ease-out */
  easeOut: sampledEase([0, 0.2363, 0.3453, 0.4424, 0.5291, 0.607, 0.6754, 0.7351, 0.7873, 0.8322, 0.8702, 0.9019, 0.9278, 0.9489, 0.9654, 0.9779, 0.9871, 0.9933, 0.9971, 0.9991, 1]),
  /** fades out, chips in, skeleton: S-curve */
  easeInOut: sampledEase([0, 0.009, 0.0207, 0.0384, 0.0644, 0.1004, 0.1507, 0.2205, 0.3141, 0.4332, 0.5641, 0.6834, 0.7786, 0.8477, 0.8976, 0.9344, 0.9605, 0.9789, 0.9908, 0.9976, 1]),
  /** the brand panel's reveal fade (recording 0e6f5901) */
  revealFade: sampledEase([0, 0.1202, 0.2309, 0.3305, 0.4218, 0.5033, 0.5773, 0.6428, 0.7018, 0.7532, 0.7988, 0.838, 0.8722, 0.9008, 0.9252, 0.945, 0.9612, 0.9737, 0.9834, 0.9902, 0.995, 0.9978, 0.9994, 0.9999, 1]),
  /** fade lengths: out = ease-out fade in, io = S-curve fade */
  fade: { out: 0.183, outLong: 0.276, io: 0.189, ioLong: 0.388, reveal: 0.3 },
  /** in top → bottom, out bottom → top */
  stagger: { in: 0.06, out: 0.04 },
  /** how far rows / blocks travel while fading */
  travel: 20,
  /** push parallax: the page underneath drifts 200 of 382 */
  parallax: 200 / 382,
  /** symmetric in-out used by the brand widget title crossfade */
  io: [0.45, 0, 0.55, 1] as Bezier,
  /** Apple springs used by the brand widget */
  springs: {
    /** rail paging settle (≈3% overshoot) */
    pager: appleSpring(0.34, 0.74),
    /** panel ⇄ selected bar morph, no visible bounce */
    morph: appleSpring(0.44, 0.94),
    /** selected-brand coin pop (≈15% overshoot) */
    pop: appleSpring(0.42, 0.52),
    /** cards rising into the panel */
    card: appleSpring(0.5, 0.92),
  },
};

/** Easing through keyed points `[progress, time 0–1]` (a CSS `linear(y x%, …)` list with uneven stops). */
export const keyedEase = (points: readonly (readonly [number, number])[]) => (t: number) => {
  if (t <= 0) return points[0][0];
  for (let i = 1; i < points.length; i++) {
    const [y1, x1] = points[i];
    if (t <= x1) {
      const [y0, x0] = points[i - 1];
      return y0 + ((y1 - y0) * (t - x0)) / (x1 - x0 || 1);
    }
  }
  return points[points.length - 1][0];
};

const xmpDropPoints = [[0, 0], [0.117, 0.0312], [0.2199, 0.0607], [0.3392, 0.0919], [0.4571, 0.1232], [0.5666, 0.1544], [0.6586, 0.1838], [0.7423, 0.2151], [0.8118, 0.2463], [0.865, 0.2757], [0.9095, 0.307], [0.9434, 0.3382], [0.9673, 0.3676], [0.9854, 0.3989], [0.9978, 0.4301], [1.0055, 0.4596], [1.0103, 0.4908], [1.0126, 0.5221], [1.0133, 0.5515], [1.0129, 0.5827], [1.0119, 0.6121], [1.0105, 0.6434], [1.0089, 0.6746], [1.0074, 0.704], [1.0059, 0.7353], [1.0046, 0.7665], [1.0035, 0.796], [1.0026, 0.8272], [1.0018, 0.8585], [1.0012, 0.8897], [1.0008, 0.9191], [1.0005, 0.9504], [1.0002, 0.9816], [1, 1]] as const;
const xmpRoundPoints = [[0, 0], [0.0063, 0.085], [0.0267, 0.165], [0.0708, 0.25], [0.1511, 0.335], [0.2927, 0.42], [0.5, 0.5], [0.7179, 0.585], [0.855, 0.67], [0.9292, 0.75], [0.9733, 0.835], [0.9944, 0.92], [1, 1]] as const;
const boltPoints = [[0, 0], [0.021, 0.049], [0.106, 0.1], [0.213, 0.15], [0.34, 0.199], [0.468, 0.25], [0.617, 0.3], [0.809, 0.349], [0.936, 0.4], [1.021, 0.45], [1.064, 0.499], [1.085, 0.55], [1.085, 0.6], [1.064, 0.7], [1.043, 0.85], [1, 1]] as const;
const cssLinear = (points: readonly (readonly [number, number])[]) => `linear(${points.map(([y, x]) => `${y} ${+(x * 100).toFixed(2)}%`).join(', ')})`;

/**
 * noon X Supermall motion spec (noon-x-supermall.vercel.app/spec, Figma 90:45995 "Sas-Motion"; every number read
 * from the prototype's code and frame-checked 2026-10-08). Extends `handoff` (same ProtoPie spring and fades).
 * Times in seconds. Where to use what: .claude/skills/noon-ui/references/motion.md → "noon X Supermall spec".
 */
export const supermall = {
  /** cubic-béziers for motion/react `ease` (CSS: `cubic-bezier(...)`) */
  ease: {
    /** soft ease-out — content reveals, banners, layout glides (FLIP), selection fills, status bar */
    soft: [0.22, 1, 0.36, 1] as Bezier,
    /** standard (Material) — exits that land (corners flattening), looping marquees, press release */
    standard: [0.4, 0, 0.2, 1] as Bezier,
    /** tab underline: slight overshoot */
    tab: [0.3, 1.25, 0.5, 1] as Bezier,
    /** text fading up inside a growing pill (FANudge) */
    textIn: [0.333, 0, 0.833, 1] as Bezier,
    /** iOS sheet — ticker steps (= easing.ios) */
    sheet: easing.ios,
  },
  /** recorded curves for motion/react `ease` (functions) */
  sampled: {
    /** XMP drop: whole-card drop with ≈1.3% overshoot (top sheet tease) */
    xmpDrop: keyedEase(xmpDropPoints),
    /** XMP corner rounding: symmetric S-curve */
    xmpRound: keyedEase(xmpRoundPoints),
    /** bolt arrival: slow start, 8.5% overshoot (icons / labels making room) */
    bolt: keyedEase(boltPoints),
  },
  /** the same curves as CSS `linear()` strings, for CSS / WAAPI animations */
  css: { xmpDrop: cssLinear(xmpDropPoints), xmpRound: cssLinear(xmpRoundPoints), bolt: cssLinear(boltPoints) },
  springs: {
    /** every movement (push, rows, cards, chips, nav): = handoff.spring (ω 16.75, ζ 0.81) */
    move: handoff.spring,
    /** return from a held offset: critically damped ω 15.5 (no overshoot, no crawl), ≈0.54s */
    return: { type: 'spring', stiffness: 240.25, damping: 31, mass: 1 } as const,
  },
  /** move-spring settle time for a travel of d px (PP sampled length): 12px .52s · 16px .54 · 20px .56 · 94px .67 */
  settle: (d: number) => Math.max(0.2, Math.log(Math.max(Math.abs(d), 0.02) / 0.02) / (0.81 * 16.75) + 0.05),
  push: {
    /** push page in from the right; the page under drifts `handoff.parallax` of the width */
    duration: 0.54,
    /** edge-swipe back zone */
    edge: 24,
  },
  /** page content arriving after a push (search landing): parts top → bottom */
  reveal: { delay: 0.4, y: 12, move: 0.48, fade: 0.26, stagger: 0.03, skeletonLag: 0.16, skeletonFade: 0.2 },
  /** list rows (suggestions): fall in from above, leave upward */
  rows: { y: 20, delay: 0.11, fadeIn: 0.183, stagger: 0.06, swapStagger: 0.028, exitY: 12, exitMove: 0.15, exitFade: 0.13, exitStagger: 0.025, backspaceStagger: 0.04 },
  /** content replaced by the next page: drops 20px and fades (`handoff.easeInOut`) */
  dismiss: { y: 20, fade: 0.189 },
  /** a results page (PLP) over the search page */
  page: { gap: 0.01, fade: 0.3, barLift: 5, shimmerLag: 0.12, navRise: 94, navLag: 0.224, chipsLag: 0.48, cardsLag: 0.68 },
  /** product cards: rise 16px in grid order; each skeleton fades 353ms after its card */
  cards: { y: 16, fadeIn: 0.183, stagger: 0.06, skeletonLag: 0.353, skeletonFade: 0.189 },
  /** skeleton shimmer: one 195px band leaning 17°, x −200 → 640, linear, every 1.867s */
  shimmer: { band: 195, angle: 17, from: -200, to: 640, duration: 1.867 },
  /** inline banner opening a space in a grid (FLIP): space opens, banner settles from −8px / 96% */
  banner: { lag: 0.04, open: 0.56, fade: 0.3, close: 0.52, out: 0.22, y: -8, scale: 0.96 },
  /** re-skinning a list (filter select): out → re-layout once → FLIP skeletons → cards back */
  swap: { out: 0.18, flip: 0.42, reveal: 0.82, fill: 0.26 },
  /** chip / pill press: dip to 96% at 30% (back-out), release on `ease.standard`, 340ms */
  press: { scale: [1, 0.96, 1], times: [0, 0.3, 1], duration: 0.34 },
  /** the whole page dropping to reveal a top sheet, then returning on `springs.return` */
  topSheet: { drop: 181, duration: 0.544, cornerRadius: 20, cornersIn: 0.2, returnAfter: 200 / 60, back: 0.54, cornersOutLag: 0.11, cornersOut: 0.28, statusBar: 0.3 },
  /** icon arriving into a label (header bolt): label moves first, icon scales 0 → 1 100ms later, `sampled.bolt` */
  bolt: { after: 0.233, duration: 0.667, iconLag: 0.1, shift: 23.5 },
  /** pill grown from a dot (FANudge): text fades in at 700ms (`ease.textIn`), settles at 1.45s, then a nudge */
  nudge: { textAt: 0.7, text: 0.2, settle: 1.45, x: [0, -1.5, 1.3, -0.8, 0.4, 0], times: [0, 0.14, 0.34, 0.54, 0.74, 1], duration: 0.56 },
  /** auto-rotating stacks: a ticker steps every 2.4s (0.5s, `ease.sheet`); marquee subtitles loop 7.2s, 140ms apart */
  ticker: { every: 2.4, step: 0.5, rowHeight: 34, marquee: 7.2, marqueeStagger: 0.14 },
} as const;
