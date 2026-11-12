import { currency, formatPrice } from './money';

/** Number formatting the screens share (bappzaar helpers). Pure functions of data; no copy, no layout. */

/** noonAbbreviateNumber: 3240 → 3.2K */
export const abbreviate = (n: number) => (n >= 1000 ? `${(Math.round(n / 100) / 10).toString()}K` : `${n}`);
/** getNoonScoreRating */
export const score = (n: number) => (Math.round(n * 10) / 10).toFixed(1);
/** PriceDiscountUtil.getDiscountPercent (floored) + shouldShowDiscount (≥ 4%) */
export const discountPercent = (price: number, sale?: number) => (sale !== undefined ? Math.floor(((price - sale) / price) * 100) : 0);
export const showDiscount = (price: number, sale?: number) => discountPercent(price, sale) >= 4;
/** Price isCompact: integers lose their decimals */
export const money = (n: number) => `${currency} ${formatPrice(n)}`;
