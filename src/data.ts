import { currency, type Product } from '@kit/data';
import { garminLineup, searchProducts, seriesFrom, seriesProducts, type GarminSeries } from '@kit/flows/plp/data';

/**
 * What the web Garmin lineup page shows (Figma XzSbnjrYFbhNg6Rc5lKmGJ · 1320:1652 "Garmin web · 10 · Brand query").
 * Series, photos, prices and products come from the kit's data layer (the same ones the mobile lineup in
 * `src/flows/plp` renders); this file only holds the web order and the page copy.
 */

export const query = 'garmin watch';

/** web lineup order (Figma 1320:1784): fēnix first, unlike the mobile rail which leads with Forerunner */
const webOrder = ['fenix', 'forerunner', 'venu', 'vivoactive', 'instinct', 'lily', 'enduro', 'approach', 'tactix', 'marq', 'bounce'];

export interface LineupSeries extends GarminSeries {
  /** lowest price in the series ("Starting ₫ 2849") */
  from: number;
  products: Product[];
}

export const lineup: LineupSeries[] = webOrder
  .map((id) => garminLineup.find((s) => s.id === id))
  .filter((s): s is GarminSeries => !!s)
  .map((s) => ({ ...s, from: seriesFrom(s), products: seriesProducts(s) }))
  .filter((s) => s.products.length > 0);

/** every Garmin watch, in the listing's order ("Showing all Garmin smartwatches") */
export const allProducts: Product[] = searchProducts(query);

export const copy = {
  lineupTitle: 'Meet the Garmin lineup',
  allResults: 'Showing all Garmin smartwatches',
  /** "5 results for Forerunner" (Figma 1332:903) */
  seriesResults: (n: number) => `${n} ${n === 1 ? 'result' : 'results'} for `,
  clear: 'Clear',
  starting: 'Starting',
  sortLabel: 'Sort By: ',
  sortValue: 'Recommended',
  location: 'Other · Dubai',
  language: 'العربية',
  next: 'Show more series',
  previous: 'Show previous series',
};

export const headerActions = [
  { id: 'language', label: copy.language, icon: 'language' },
  { id: 'login', label: 'Log in', icon: 'user-circle' },
  { id: 'orders', label: 'Orders', icon: 'order-box' },
  { id: 'wishlist', label: 'Wishlist', icon: 'heart' },
  { id: 'cart', label: 'Cart', icon: 'bottomnav-cart' },
] as const;

export const categories = [
  'Electronics',
  'Beauty & Fragrance',
  'Home & Kitchen',
  'Grocery',
  "Men's Fashion",
  "Women's Fashion",
  'Mom & Baby',
  'Toys',
  "Kids' Fashion",
  'Sports & Outdoors',
  'Health & Nutrition',
  'Stationery',
  'Books',
  'Automotive',
];

/** the filters sidebar (Figma 1320:1699): the first two open, the rest collapsed */
export const filterGroups = ['Brand', 'Price', 'Price drop', 'Product Rating', 'Item Condition', 'Band Size', 'Dial Shape', 'Colour', 'Gender', 'Display Type', 'Band Material', 'Material'];

export const filterChips = [
  { id: 'brand', label: 'Brand', icon: 'discount-tag', menu: true },
  { id: 'price', label: `Price (${currency})`, icon: 'noon-cash', menu: true },
  { id: 'colour', label: 'Colour', icon: 'water-drop', menu: true },
  { id: 'wearables', label: 'Wearables', icon: null, menu: false },
] as const;
