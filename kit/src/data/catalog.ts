import { categoryPath } from './categories';
import type { Product, ProductCollection, ProductInput } from './types';

/**
 * The product catalogue: every folder in src/data/products/<id>/ is one product. `product.ts` declares it with
 * `defineProduct`; photos next to it are attached by name — `card.*` → `image`, `card` + `gallery-N.*` → `images`.
 * Nothing to register: add a folder and the product shows up in its collection (README.md).
 */
const modules = import.meta.glob<ProductInput>('./products/*/product.ts', { eager: true, import: 'default' });
const photos = import.meta.glob<string>('./products/*/*.{webp,png,jpg,jpeg,avif}', { eager: true, import: 'default' });

const folderOf = (path: string) => path.split('/')[2];
const photosOf = new Map<string, { card?: string; gallery: [number, string][] }>();
for (const [path, url] of Object.entries(photos)) {
  const id = folderOf(path);
  const name = path.split('/').pop()!.replace(/\.\w+$/, '');
  const entry = photosOf.get(id) ?? { gallery: [] };
  if (name === 'card') entry.card = url;
  else if (/^gallery-\d+$/.test(name)) entry.gallery.push([Number(name.slice(8)), url]);
  photosOf.set(id, entry);
}

const toProduct = (input: ProductInput, folder: string): Product => {
  const { collection: _collection, order: _order, ...p } = input;
  const own = photosOf.get(folder);
  const image = p.image ?? own?.card;
  const gallery = (own?.gallery ?? []).sort((a, b) => a[0] - b[0]).map(([, url]) => url);
  const images = p.images ?? (image ? [image, ...gallery] : undefined);
  return { ...p, image, images, categoryPath: p.categoryPath ?? (p.categoryId ? categoryPath(p.categoryId) : undefined) };
};

const entries = Object.entries(modules).map(([path, input]) => {
  if (import.meta.env?.DEV && input.id !== folderOf(path)) console.warn(`src/data/products/${folderOf(path)}: id "${input.id}" should match its folder name`);
  return { input, product: toProduct(input, folderOf(path)) };
});
const byRank = (a: (typeof entries)[number], b: (typeof entries)[number]) => (a.input.order ?? Infinity) - (b.input.order ?? Infinity) || a.input.id.localeCompare(b.input.id);
const collection = (...names: ProductCollection[]) => entries.filter((e) => names.includes(e.input.collection)).sort(byRank).map((e) => e.product);

/** every product, any collection */
export const allProducts: Product[] = entries.sort(byRank).map((e) => e.product);
const index = new Map(allProducts.flatMap((p) => (p.sku && p.sku !== p.id ? [[p.id, p], [p.sku, p]] : [[p.id, p]])));

/** The shared catalogue (demo + live + home), in `order` — the list flows iterate. Index positions are stable. */
export const products: Product[] = collection('demo', 'live', 'home');
/** The live noon products: iPhone 17 Pro, its carousels and FBT items. */
export const liveProducts: Product[] = collection('live');
/** Homepage Revamp 2025 rail products (Figma iRE9RwO94eMAyW3j3XKNXW · 1337:5233 / 1337:5572 / 1337:6349). */
export const homeFeedProducts: Product[] = collection('home');
/** The PLP phone listing (12 brands × 4); kept out of `products` so other lists don't fill with phones. */
export const phoneProducts: Product[] = collection('phones');
/** The PLP Garmin lineup (17 watches across 11 series); kept out of `products` like the phones. */
export const watchProducts: Product[] = collection('watches');
/** Order-history items (src/flows/orders). */
export const orderProducts: Product[] = collection('orders');

/** Product by id or sku, from any collection; `undefined` when unknown. */
export const getProduct = (id: string | undefined | null): Product | undefined => (id ? index.get(id) : undefined);

/** Like getProduct, but always returns a product (falls back to the first one) — for demo screens opened with a bad
 *  id. Warns in dev so a typo doesn't silently show the wrong product. */
export const productById = (id: string): Product => {
  const p = getProduct(id);
  if (!p && import.meta.env?.DEV) console.warn(`productById: no product "${id}" in src/data/products — showing ${products[0].id}`);
  return p ?? products[0];
};

/** Filter the whole catalogue. */
export const listProducts = (q: { collection?: ProductCollection | ProductCollection[]; categoryId?: string; brand?: string; tag?: Product['tag'] } = {}) => {
  const cols = q.collection ? [q.collection].flat() : undefined;
  return entries
    .filter((e) => !cols || cols.includes(e.input.collection))
    .map((e) => e.product)
    .filter((p) => (!q.categoryId || p.categoryId === q.categoryId || p.categoryPath?.some((c) => c.id === q.categoryId)) && (!q.brand || p.brand === q.brand) && (!q.tag || p.tag === q.tag));
};

/** The live default PDP product. */
export const IPHONE_17_PRO_ID = 'N70211593V';

