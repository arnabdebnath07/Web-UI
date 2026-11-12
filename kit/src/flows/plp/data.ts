import { currency, formatPrice, getProduct, leafName, products as baseProducts, type Product } from '../../data';
import { phoneProducts, watchProducts } from '../../data';
import rosterDuo from '@assets/plp/roster/iphone-duo.webp';
import roster18 from '@assets/plp/roster/iphone-18.webp';
import roster18Pro from '@assets/plp/roster/iphone-18-pro.webp';
import garminForerunner from '@assets/plp/garmin/forerunner.webp';
import garminFenix from '@assets/plp/garmin/fenix.webp';
import garminVenu from '@assets/plp/garmin/venu.webp';
import garminVivoactive from '@assets/plp/garmin/vivoactive.webp';
import garminInstinct from '@assets/plp/garmin/instinct.webp';
import garminLily from '@assets/plp/garmin/lily.webp';
import garminEnduro from '@assets/plp/garmin/enduro.webp';
import garminApproach from '@assets/plp/garmin/approach.webp';
import garminTactix from '@assets/plp/garmin/tactix.webp';
import garminMarq from '@assets/plp/garmin/marq.webp';
import garminBounce from '@assets/plp/garmin/bounce.webp';

/** The PLP's catalogue: the shared demo products plus the brand widget's phones (src/mocks/phones.ts) and the Garmin lineup's watches. */
export const products: Product[] = [...baseProducts, ...phoneProducts, ...watchProducts];

export type SortId = 'recommended' | 'priceAsc' | 'priceDesc' | 'rating' | 'new' | 'discount';

export const sortOptions: { id: SortId; label: string }[] = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'priceAsc', label: 'Price: Low to High' },
  { id: 'priceDesc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Best Rated' },
  { id: 'new', label: 'New Arrivals' },
  { id: 'discount', label: 'Biggest Discount' },
];

export type FacetId = 'delivery' | 'arrives' | 'category' | 'brand' | 'price' | 'rating' | 'deals';

/** NoonFiltersV2 renderer per group (FilterPageRenderers / FilterGroupRenderers): fulfilment cards, pills, rating cards, range slider */
export type FacetKind = 'fulfillment' | 'pills' | 'cards' | 'range';

export interface FacetOption {
  id: string;
  label: string;
  test: (p: Product) => boolean;
  /** fulfilment card logo (FilterFulfillmentCard `image_url` + `background_color`) */
  logo?: 'supermall' | 'express' | 'global';
}

export interface Facet {
  id: FacetId;
  label: string;
  kind: FacetKind;
  options: FacetOption[];
}

/** leaf category name ("Smartphones"), the category the live filters list; falls back to the top category */
export const leafCategory = (p: Product) => leafName(p.categoryId) ?? p.category;

/** price facet value is one `"min-max"` string (FilterRangeSlider) */
export const priceRange = (v?: string) => {
  const [min, max] = (v ?? '').split('-').map(Number);
  return Number.isFinite(min) && Number.isFinite(max) ? { min, max } : null;
};
export const priceBounds = { min: Math.floor(Math.min(...products.map((p) => p.price))), max: Math.ceil(Math.max(...products.map((p) => p.price))) };

const uniq = <T,>(a: T[]) => [...new Set(a)];

/** Group order and copy follow the live search filters (bappzaar NoonFiltersScreenV2; "phone" search, 2026-10-14 reference). */
export const facets: Facet[] = [
  {
    id: 'delivery',
    label: 'Delivery',
    kind: 'fulfillment',
    options: [
      { id: 'supermall', label: 'Direct from brand', logo: 'supermall', test: (p) => !!p.supermall },
      { id: 'express', label: 'Fulfilled by noon', logo: 'express', test: (p) => !!p.express },
      { id: 'global', label: 'Sourced Globally', logo: 'global', test: (p) => !p.express && !p.supermall },
    ],
  },
  { id: 'arrives', label: 'Arrives by', kind: 'pills', options: [{ id: 'today', label: 'Today', test: (p) => /today|get in/i.test(p.delivery ?? '') }] },
  { id: 'category', label: 'Category', kind: 'pills', options: uniq(products.map(leafCategory)).map((c) => ({ id: c, label: c, test: (p) => leafCategory(p) === c })) },
  { id: 'brand', label: 'Brand', kind: 'pills', options: uniq(products.map((p) => p.brand)).map((b) => ({ id: b, label: b, test: (p) => p.brand === b })) },
  {
    id: 'price',
    label: 'Price',
    kind: 'range',
    options: [],
  },
  {
    id: 'rating',
    label: 'Product Rating',
    kind: 'cards',
    options: [
      { id: '4.5', label: '4.5 & above', test: (p) => p.rating >= 4.5 },
      { id: '4', label: '4 & above', test: (p) => p.rating >= 4 },
      { id: '3', label: '3 & above', test: (p) => p.rating >= 3 },
    ],
  },
  // deal_tag facet (the live "Deals" nav pill): products on a deal = with a was-price
  { id: 'deals', label: 'Deals', kind: 'pills', options: [{ id: 'sale', label: 'On sale', test: (p) => !!p.was && p.was > p.price }] },
];

export type Filters = Partial<Record<FacetId, string[]>>;

export function applyFilters(list: Product[], filters: Filters) {
  return list.filter((p) =>
    facets.every((f) => {
      const sel = filters[f.id];
      if (!sel?.length) return true;
      if (f.kind === 'range') {
        const r = priceRange(sel[0]);
        return !r || (p.price >= r.min && p.price <= r.max);
      }
      return f.options.filter((o) => sel.includes(o.id)).some((o) => o.test(p));
    }),
  );
}

export function applySort(list: Product[], sort: SortId) {
  const l = [...list];
  const off = (p: Product) => (p.was ? (p.was - p.price) / p.was : 0);
  switch (sort) {
    case 'priceAsc':
      return l.sort((a, b) => a.price - b.price);
    case 'priceDesc':
      return l.sort((a, b) => b.price - a.price);
    case 'rating':
      return l.sort((a, b) => b.rating - a.rating);
    case 'new':
      return l.reverse();
    case 'discount':
      return l.sort((a, b) => off(b) - off(a));
    default:
      return l;
  }
}

/** Generic phone searches ("phone", "mobiles", "smartphone"…) — they open the brand widget PLP. */
export const isPhoneQuery = (query?: string) => /^(mobile\s*)?(phone|phones|mobile|mobiles|smartphone|smartphones)$/.test(query?.trim().toLowerCase() ?? '');

/** One of each brand in turn (the Brand Widget PLP's "phone" mix), keeping each brand's own order. */
function byBrandInTurn(list: Product[]) {
  const groups = new Map<string, Product[]>();
  list.forEach((p) => groups.set(p.brand, [...(groups.get(p.brand) ?? []), p]));
  const out: Product[] = [];
  for (let k = 0; out.length < list.length; k++) groups.forEach((g) => g[k] && out.push(g[k]));
  return out;
}

/** Narrow the catalogue by query when it matches something, otherwise show everything (demo). */
export function searchProducts(query?: string) {
  const q = query?.trim().toLowerCase();
  if (!q) return products;
  if (isPhoneQuery(q)) return byBrandInTurn(products.filter((p) => p.category === 'Mobiles'));
  if (isGarminQuery(q)) return garminProducts;
  const series = garminSeriesOf(q);
  if (series) return seriesProducts(series);
  const hit = products.filter((p) => fold(`${p.brand} ${p.title} ${p.category}`).includes(fold(q)));
  return hit.length >= 2 ? hit : products;
}

export const countFilters = (f: Filters) => Object.values(f).reduce((n, v) => n + (v?.length ?? 0), 0);

/** No results with filters on (Visual Library no-match pattern, Figma 4L1MFeexnspo7AmmOx4prT · 353:148295). */
const marketplaceNames: Record<string, string> = { supermall: 'Supermall', express: 'express', global: 'Global' };
export function emptyResultsCopy(query: string, filters: Filters) {
  const only = filters.delivery?.length === 1 && countFilters(filters) === 1 ? marketplaceNames[filters.delivery[0]] : undefined;
  const q = query.trim() ? `“${query.trim()}”` : 'anything';
  return only
    ? { title: `We couldn't find ${q} in ${only}`, body: 'Try another store or clear the filter', action: 'Clear filter' }
    : { title: `We couldn't find ${q} with these filters`, body: 'Remove a filter or try a different word', action: 'Clear filters' };
}

/** "iPhone", "iPhones", "Apple iPhone" — the searches that open with the iPhone roster above the grid. */
export const isIphoneQuery = (query?: string) => /^(apple\s+)?iphones?$/.test(query?.trim().toLowerCase() ?? '');

export interface RosterModel {
  id: string;
  name: string;
  image: string;
  /** "Starting …" price; omitted for a model that isn't on sale yet */
  from?: number;
  /** not launched: "Notify me" instead of the price, a pink tick on the meter */
  upcoming?: boolean;
  /** the PDP a tap opens (a product in src/data); without one the model isn't in this demo */
  productId?: string;
}

const lowest = (prefix: string) =>
  Math.min(...products.filter((p) => p.brand === 'Apple' && p.title.startsWith(prefix) && !p.title.startsWith(`${prefix} Max`)).map((p) => p.price));

/** The iPhone roster (Figma JpLINoW8RMtYB6CLRkw2vm · 923:20421): the new model first, then the line-up newest → oldest.
 *  iPhone Duo / 18 / 18 Pro photos come from the Figma frame; the iPhone 17 models use the live catalogue. */
export const iphoneRoster: RosterModel[] = [
  { id: 'duo', name: 'iPhone Duo', image: rosterDuo, upcoming: true },
  { id: '18', name: 'iPhone 18', image: roster18, from: 5299 },
  { id: '18pro', name: 'iPhone 18 Pro', image: roster18Pro, from: 5396 },
  { id: '17pro', name: 'iPhone 17 Pro', image: getProduct('N70211592V')?.image ?? '', from: lowest('iPhone 17 Pro'), productId: 'N70211592V' },
  { id: '17promax', name: 'iPhone 17 Pro Max', image: getProduct('N70211464V')?.image ?? '', from: lowest('iPhone 17 Pro Max'), productId: 'N70211464V' },
];

// ---------------------------------------------------------------------------------------------------------------
// Garmin lineup (PLP Figma XzSbnjrYFbhNg6Rc5lKmGJ · 1035:1256 "01 · Brand query"; series from 1175:162142 web grid)

/** lower case without accents, so "fenix" finds "fēnix" and "vivoactive" finds "vívoactive" */
const fold = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/** "garmin", "garmin watch", "garmin smartwatches" — the brand searches that open with the lineup above the grid. */
export const isGarminQuery = (query?: string) => /^garmin(\s+(smart\s*)?watch(es)?)?$/.test(query?.trim().toLowerCase() ?? '');

export interface GarminSeries {
  id: string;
  /** Garmin's own casing: fēnix, vívoactive, tactix */
  name: string;
  image: string;
  /** the two "pointers" on the series banner (Figma 1220:168164) */
  pointers: [string, string];
}

const garminProducts = watchProducts.filter((p) => p.brand === 'Garmin');
/** a series' watches: their titles start with the series name (Fenix 8, Venu Sq 2, MARQ Athlete …) */
export const seriesProducts = (s: GarminSeries) => garminProducts.filter((p) => fold(p.title).startsWith(fold(s.name)));
/** lowest price in the series — the lineup's "From …" */
export const seriesFrom = (s: GarminSeries) => Math.min(...seriesProducts(s).map((p) => p.price));

/** Mobile lineup order (Forerunner, fēnix, Venu as in 01.1), then the rest of the web grid's series.
 *  Forerunner's pointers are the Figma copy; the other series' are written for the demo (assumption). */
export const garminLineup: GarminSeries[] = [
  { id: 'forerunner', name: 'Forerunner', image: garminForerunner, pointers: ['Ultra-Lightweight Design', 'Multi-Band GNSS with SatIQ Technology'] },
  { id: 'fenix', name: 'fēnix', image: garminFenix, pointers: ['Built-In LED Flashlight', 'Up To 29 Days Smartwatch Battery'] },
  { id: 'venu', name: 'Venu', image: garminVenu, pointers: ['Always-On AMOLED Display', 'Sleep Coach and Nap Detection'] },
  { id: 'vivoactive', name: 'vívoactive', image: garminVivoactive, pointers: ['30+ Built-In Sports Apps', 'Up To 11 Days Battery Life'] },
  { id: 'instinct', name: 'Instinct', image: garminInstinct, pointers: ['Rugged, Military-Grade Build', 'Solar Charging on the Go'] },
  { id: 'lily', name: 'Lily', image: garminLily, pointers: ['Small, Fashion-First Design', 'Hidden Display Under a Patterned Lens'] },
  { id: 'enduro', name: 'Enduro', image: garminEnduro, pointers: ['Up To 320 Hours GPS with Solar', 'Ultralight Titanium Bezel'] },
  { id: 'approach', name: 'Approach', image: garminApproach, pointers: ['43,000+ Preloaded Golf Courses', 'Virtual Caddie Club Suggestions'] },
  { id: 'tactix', name: 'tactix', image: garminTactix, pointers: ['Stealth Mode, Night Vision Ready', 'Built-In LED Flashlight'] },
  { id: 'marq', name: 'MARQ', image: garminMarq, pointers: ['Titanium Case, Sapphire Crystal', 'Hand-Finished Luxury Design'] },
  { id: 'bounce', name: 'Bounce', image: garminBounce, pointers: ['Kids’ LTE Smartwatch with Messaging', 'Real-Time Location Sharing'] },
];

/** a highlights-card line: an optional accent lead ("Best value: ") then the copy */
export interface GarminPointer {
  lead?: string;
  /** primary-colour semibold run after the lead ("Forerunner 970 & 570") */
  strong?: string;
  text: string;
}

/** the model's name without its variant ("Forerunner 965 - 47MM - …" → "Forerunner 965") */
export const garminModelName = (p: Product) => p.title.split(' - ')[0];

// acronyms keep their caps when a title spec is put in sentence case
const KEEP_CAPS = /^(GPS|AMOLED|LCD|LED|LTE|MM|UI)$/i;
const sentence = (t: string) =>
  t
    .split(' ')
    .map((w, i) => (KEEP_CAPS.test(w) ? w.toUpperCase() : i === 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()))
    .join(' ');

/** Model summary (Figma 1242:170809) — two lines from the catalogue, written for the demo (assumption):
 *  1. "Best value: ₫610 less than the 965" against the next pricier model in the series; the series' top model gets
 *     "Flagship: the most advanced Forerunner"; a series of one gets its second spec instead;
 *  2. its headline spec — the title's battery segment (else the first spec after the size), in sentence case. */
export function garminModelPointers(series: GarminSeries, p: Product): GarminPointer[] {
  const specs = p.title.split(' - ').slice(1).filter((x) => !/^\d+(\.\d+)?\s*mm$/i.test(x.trim()));
  const battery = specs.find((x) => /battery|hours|days/i.test(x)) ?? specs[0] ?? '';
  const other = (specs.find((x) => x !== battery) ?? '').split(',')[0];
  const models = seriesProducts(series);
  const next = models.filter((m) => m.price > p.price).sort((a, b) => a.price - b.price)[0];
  let first: GarminPointer;
  if (next) {
    const nextName = garminModelName(next);
    const rest = nextName.slice(series.name.length).trim();
    const short = fold(nextName).startsWith(fold(series.name)) && /^\d/.test(rest) ? rest : nextName;
    first = { lead: 'Best value: ', text: `${currency}${formatPrice(Math.round(next.price - p.price))} less than the ${short}` };
  } else if (models.length > 1) first = { lead: 'Flagship: ', text: `the most advanced ${series.name}` };
  else first = { text: sentence(other.trim()) };
  return [first, { text: sentence(battery.trim()) }].filter((x) => x.text);
}

/** the empty band under each watch in its photo, shadow included (fraction of the photo's height, measured from the
 *  files: the last row with any ink), so the rails can stand every watch's base on its slot's bottom edge and scale
 *  off it. Re-measure when a photo changes. */
export const garminPhotoBase: Record<string, number> = {
  'approach': 0.093,
  'bounce': 0.127,
  'enduro': 0.081,
  'fenix': 0.049,
  'forerunner': 0.049,
  'instinct': 0.083,
  'lily': 0.074,
  'marq': 0.091,
  'tactix': 0.088,
  'venu': 0.049,
  'vivoactive': 0.083,
  'garmin-approach-s70': 0.2,
  'garmin-bounce-2': 0.226,
  'garmin-enduro-3': 0.191,
  'garmin-fenix-8': 0.131,
  'garmin-fenix-e': 0.193,
  'garmin-forerunner-165': 0.127,
  'garmin-forerunner-265': 0.127,
  'garmin-forerunner-55': 0.202,
  'garmin-forerunner-965': 0.125,
  'garmin-instinct-2-solar': 0.136,
  'garmin-instinct-e': 0.193,
  'garmin-lily-2': 0.128,
  'garmin-marq-athlete': 0.2,
  'garmin-tactix-8': 0.199,
  'garmin-venu-3': 0.13,
  'garmin-venu-sq-2': 0.2,
  'garmin-vivoactive-5': 0.128,
};

/** the newest watch(es) of each series (Garmin's 2023–24 launches; Figma 1242:171323 "Tag · Latest"): their price line
 *  alternates "Latest" and "From …" on the series rail. Picked for the demo from release order (assumption). */
export const garminLatest = new Set(['garmin-forerunner-165', 'garmin-forerunner-265', 'garmin-fenix-8', 'garmin-fenix-e', 'garmin-venu-3', 'garmin-vivoactive-5', 'garmin-instinct-e', 'garmin-lily-2', 'garmin-enduro-3', 'garmin-approach-s70', 'garmin-tactix-8', 'garmin-marq-athlete', 'garmin-bounce-2']);

/** the launch year of each series' newest watch(es) in `garminLatest` (Garmin release dates; assumption for the demo) */
export const garminLatestYear: Record<string, number> = {
  forerunner: 2024, fenix: 2024, venu: 2023, vivoactive: 2023, instinct: 2024, lily: 2024,
  enduro: 2024, approach: 2023, tactix: 2024, marq: 2024, bounce: 2025,
};

/** Card · Highlights for a picked series, no model yet (Figma 1242:171937):
 *  1. "Latest: Forerunner 265 & 165 (2024)" — the series' newest watches, pricier first, the rest shortened to what
 *     follows the series name; 2. the series' first highlight. */
export function garminSeriesPointers(series: GarminSeries): GarminPointer[] {
  const latest = seriesProducts(series)
    .filter((p) => garminLatest.has(p.id))
    .sort((a, b) => b.price - a.price)
    .map(garminModelName);
  if (!latest.length) return series.pointers.map((text) => ({ text }));
  const short = latest.map((n, i) => {
    const rest = n.slice(series.name.length).trim();
    return i > 0 && fold(n).startsWith(fold(series.name)) && rest ? rest : n;
  });
  const year = garminLatestYear[series.id];
  return [
    { lead: 'Latest: ', strong: short.join(' & '), text: year ? ` (${year})` : '' },
    { text: series.pointers[0] },
  ];
}

/** "garmin forerunner", "garmin fenix" … — the listing the banner's "N models" opens. */
export function garminSeriesOf(query?: string) {
  const q = fold(query?.trim() ?? '');
  return garminLineup.find((s) => q === `garmin ${fold(s.name)}`);
}
