import type { Product } from './types';

/** UAE dirham sign: private-use U+E001, drawn by the Noontree font (bappzaar src/constants/CurrencyUnicodes.ts). SAR is U+E000. */
export const currency = '';

export const discountPct = (p: Product) => (p.was ? Math.round(((p.was - p.price) / p.was) * 100) : 0);

export const formatPrice = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 2 });
