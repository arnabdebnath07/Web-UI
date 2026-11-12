import { useReducedMotionConfig } from 'motion/react';

/**
 * Reduced motion, the kit's one switch.
 *
 * `<NoonPrototype reducedMotion="user" | "always" | "never">` (default `'user'`) sets motion/react's
 * `<MotionConfig reducedMotion>` and marks the prototype root with `data-nk-motion="reduce"` while motion is reduced,
 * so motion/react, CSS (`global.css`), `<Lottie>`, `<Spinner>`, `<Skeleton>` and the flows all follow the same answer.
 *
 * Use this hook (not motion's `useReducedMotion`, which reads only the OS setting and ignores the prop) wherever
 * motion/react can't reduce for you: imperative `animate()` on motion values, rAF loops, `setInterval` autoplay,
 * looping non-transform animations (opacity / background-position / filter) and media autoplay.
 * Outside `<NoonPrototype>` (no MotionConfig) it returns `false`, like motion/react itself.
 */
export function useReduceMotion(): boolean {
  return !!useReducedMotionConfig();
}

/** The attribute `<NoonPrototype>` puts on its root while motion is reduced; global.css keys off it. */
export const REDUCED_MOTION_ATTR = 'data-nk-motion';
