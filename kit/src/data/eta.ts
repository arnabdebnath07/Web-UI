/**
 * Estimated-delivery (ETA) badge copy and use cases — Origin Design System `_ETA`
 * (Figma wFRKiKskxZ4vjIHbDVvngJ · 2673:2414). Render with `<EtaBadge {...etaUseCases.nextDay} />` or
 * `<EtaBadge {...etaFor(product)} />`; override `label` / `value` per screen for the customisable text.
 *
 * Type = delivery mode (Figma description):
 *   minutes          quick-commerce, "Get in 15 Mins"
 *   supermall        noon Minutes Supermall delivery, "Get in 42 Min"
 *   expressToday     same-day express (the "Today" word is part of the Origin artwork)
 *   expressTomorrow  next-day express (the "Tomorrow" bar is part of the Origin artwork)
 *   express          generic express with a date, "Get by 11 Sep"
 *   market           fresh / market category delivery, "Get by 11 Sep"
 *   global           international delivery window, "Get by 11-23 Sep"
 * Size: `large` on primary product cards, `small` in compact grids and chips (no label / value text, except the
 * fixed "minutes" / "supermall" words).
 */
import type { Product } from './types';

export type EtaType = 'minutes' | 'supermall' | 'expressToday' | 'expressTomorrow' | 'express' | 'market' | 'global';
export type EtaSize = 'large' | 'small';

export interface EtaSpec {
  type: EtaType;
  size?: EtaSize;
  /** lead text, e.g. "Get in" / "Get by" (large only) */
  label?: string;
  /** the time, date or date range, e.g. "15 Mins", "11 Sep", "11-23 Sep" (large only) */
  value?: string;
}

/** Fixed words of the badge. */
export const etaCopy = {
  getIn: 'Get in',
  getBy: 'Get by',
  minutesWord: 'minutes', // Minutes · Small
  supermallWord: 'supermall', // Supermall · Small
  global: 'Global', // Global pill
  mins: (n: number) => `${n} ${n === 1 ? 'Min' : 'Mins'}`, // "15 Mins"
  min: (n: number) => `${n} Min`, // supermall "42 Min"
  /** accessible names for the artwork-only parts */
  a11y: { express: 'express', today: 'express, today', tomorrow: 'express, tomorrow', market: 'market' },
} as const;

/** The Figma variants as named use cases, with the frame's sample text. */
export const etaUseCases = {
  quickCommerce: { type: 'minutes', size: 'large', label: etaCopy.getIn, value: etaCopy.mins(15) },
  quickCommerceCompact: { type: 'minutes', size: 'small' },
  supermall: { type: 'supermall', size: 'large', label: etaCopy.getIn, value: etaCopy.min(42) },
  supermallCompact: { type: 'supermall', size: 'small' },
  sameDay: { type: 'expressToday', size: 'large' },
  sameDayCompact: { type: 'expressToday', size: 'small' },
  nextDay: { type: 'expressTomorrow', size: 'large' },
  nextDayCompact: { type: 'expressTomorrow', size: 'small' },
  expressDated: { type: 'express', size: 'large', label: etaCopy.getBy, value: '11 Sep' },
  expressCompact: { type: 'express', size: 'small' },
  market: { type: 'market', size: 'large', label: etaCopy.getBy, value: '11 Sep' },
  marketCompact: { type: 'market', size: 'small' },
  global: { type: 'global', size: 'large', label: etaCopy.getBy, value: '11-23 Sep' },
  globalCompact: { type: 'global', size: 'small' },
} as const satisfies Record<string, EtaSpec>;
export type EtaUseCase = keyof typeof etaUseCases;

const bold = (html: string) => html.match(/<b>(.*?)<\/b>/i)?.[1]?.trim();

/**
 * The ETA badge for a product, from its `express` / `supermall` flags and `delivery` line
 * ('Get it <b>Tomorrow</b>', 'Get it by <b>12 Oct</b>', 'GET IN <b>1 HR 22 MINS</b>'). `null` when there is no delivery promise.
 */
export function etaFor(p: Pick<Product, 'express' | 'supermall' | 'delivery'>, size: EtaSize = 'large'): EtaSpec | null {
  const when = bold(p.delivery ?? '');
  if (!when && !p.express && !p.supermall) return null;
  const minutes = /^get in/i.test(p.delivery ?? '');
  const value = when?.replace(/\b(HRS?|MINS?)\b/g, (u) => u[0] + u.slice(1).toLowerCase());
  if (p.supermall) return { type: 'supermall', size, label: etaCopy.getIn, value: minutes ? value : undefined };
  if (minutes) return { type: 'minutes', size, label: etaCopy.getIn, value };
  if (p.express && /^today\b/i.test(when ?? '')) return { type: 'expressToday', size };
  if (p.express && /^tomorrow$/i.test(when ?? '')) return { type: 'expressTomorrow', size };
  if (p.express) return { type: 'express', size, label: etaCopy.getBy, value };
  return { type: 'market', size, label: etaCopy.getBy, value };
}
