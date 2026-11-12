/**
 * noon UAE category taxonomy (subset), from the live PDP of iPhone 17 Pro 1TB Silver (N70211593V, Oct 2026):
 * JSON-LD BreadcrumbList = Home › Electronics & Mobiles › Mobiles & Accessories › Mobile Phones › Smartphones.
 * Accessory branches are inferred from cross-sell titles and rank badges on the same page
 * ("#34 in Cases & Covers", "#29 in Mobile Lens & Lens Protectors", "#1 in Wall Chargers"); their URLs are
 * best guesses and marked `inferred: true`.
 *
 * Kept separate from `categories` in products.ts (home / categories-flow tiles), which this does not replace.
 */
export interface Category {
  id: string;
  name: string;
  /** noon web path under /uae-en */
  url: string;
  parentId?: string;
  /** noon numeric category id where known (wishlist_data.cat_id) */
  noonId?: number;
  /** true when the node / url is inferred, not read from a breadcrumb */
  inferred?: boolean;
}

/** {name, url} step of a product's category path (root → leaf). */
export interface CategoryRef {
  id: string;
  name: string;
  url: string;
}

const base = '/uae-en';

export const taxonomy: Category[] = [
  { id: 'electronics-and-mobiles', name: 'Electronics & Mobiles', url: `${base}/electronics-and-mobiles/` },
  { id: 'mobiles-and-accessories', name: 'Mobiles & Accessories', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/`, parentId: 'electronics-and-mobiles' },
  { id: 'mobile-phones', name: 'Mobile Phones', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/`, parentId: 'mobiles-and-accessories', noonId: 20905 },
  { id: 'smartphones', name: 'Smartphones', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/`, parentId: 'mobile-phones', noonId: 20906 },
  // ── inferred: accessories the cross-sells / FBT items sit in ──
  { id: 'mobile-accessories', name: 'Mobile Accessories', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/accessories-16176/`, parentId: 'mobiles-and-accessories', inferred: true },
  { id: 'cases-and-covers', name: 'Cases & Covers', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/accessories-16176/cases-and-covers/`, parentId: 'mobile-accessories', inferred: true },
  { id: 'screen-protectors', name: 'Screen Protectors', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/accessories-16176/screen-protectors/`, parentId: 'mobile-accessories', inferred: true },
  { id: 'mobile-lens-protectors', name: 'Mobile Lens & Lens Protectors', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/accessories-16176/mobile-lens-and-lens-protectors/`, parentId: 'mobile-accessories', inferred: true },
  { id: 'wall-chargers', name: 'Wall Chargers', url: `${base}/electronics-and-mobiles/mobiles-and-accessories/accessories-16176/chargers-17544/wall-chargers/`, parentId: 'mobile-accessories', inferred: true },
  { id: 'headphones', name: 'Headphones', url: `${base}/electronics-and-mobiles/portable-audio-and-video/headphones-24056/`, parentId: 'electronics-and-mobiles', inferred: true },
  { id: 'over-ear-headphones', name: 'Over-Ear Headphones', url: `${base}/electronics-and-mobiles/portable-audio-and-video/headphones-24056/over-ear-headphones/`, parentId: 'headphones', inferred: true },
  // ── appended by flows/categories: noon app Categories tab top level (CMS /categories, category-nav-all-categories, Oct 2026).
  //    url = the main banner's "View all" linkUrl (query dropped). Mobiles & Accessories reuses mobiles-and-accessories above. ──
  { id: 'nav-electronics', name: 'Electronics', url: `${base}/electronics/` },
  { id: 'nav-gaming', name: 'Gaming', url: `${base}/gaminghub/` },
  { id: 'nav-beauty', name: 'Beauty', url: `${base}/beauty/` },
  { id: 'nav-grocery', name: 'Grocery', url: `${base}/noon-supermarket/` },
  { id: 'nav-laptops-accessories', name: 'Laptops & Accessories', url: `${base}/laptops/` },
  { id: 'nav-small-appliances', name: 'Small Appliances', url: `${base}/home-appliances/` },
  { id: 'nav-toys-games', name: 'Toys & Games', url: `${base}/toys/` },
  { id: 'nav-baby-care', name: 'Baby Care', url: `${base}/baby-consumables-grocery/` },
  { id: 'nav-baby-gear', name: 'Baby Gear', url: `${base}/baby/` },
  { id: 'nav-home-kitchen', name: 'Home & Kitchen', url: `${base}/home-kitchen/` },
  { id: 'nav-large-appliances', name: 'Large Appliances', url: `${base}/mda-clp/` },
  { id: 'nav-cameras', name: 'Cameras', url: `${base}/cameras/` },
  { id: 'nav-health-nutrition', name: 'Health & Nutrition', url: `${base}/health-personal-care/` },
  { id: 'nav-fragrance', name: 'Fragrance', url: `${base}/fragrance-store/` },
  { id: 'nav-personal-care', name: 'Personal Care', url: `${base}/personal-care-all/` },
  { id: 'nav-furniture', name: 'Furniture', url: `${base}/furniture/` },
  { id: 'nav-mens-fashion', name: "Men's Fashion", url: `${base}/fashion-men/` },
  { id: 'nav-womens-fashion', name: "Women's Fashion", url: `${base}/fashion-women/` },
  { id: 'nav-kids-fashion', name: "Kids' Fashion", url: `${base}/fashion/view-all-kids-clothing/` },
  { id: 'nav-watches', name: 'Watches', url: `${base}/mens-watches/` },
  { id: 'nav-eyewear', name: 'Eyewear', url: `${base}/eyewear-men/` },
  { id: 'nav-sports-fitness', name: 'Sports & Fitness', url: `${base}/sports-outdoors/` },
  { id: 'nav-automotive', name: 'Automotive', url: `${base}/automotive-store/` },
  { id: 'nav-stationery-office-supplies', name: 'Stationery & Office Supplies', url: `${base}/stationery/` },
  { id: 'nav-books', name: 'Books', url: `${base}/book-store/` },
  { id: 'nav-music', name: 'Music', url: `${base}/music-movies-and-tv-shows/` },
  { id: 'nav-mahali', name: 'Mahali', url: `${base}/mahali/` },
  { id: 'nav-gift-cards', name: 'Gift Cards', url: `${base}/gift-cards/` },
];

const byId = new Map(taxonomy.map((c) => [c.id, c]));

export const categoryById = (id: string) => byId.get(id);

/** Root → leaf path for a category id (empty when unknown). */
export function categoryPath(id?: string): CategoryRef[] {
  const out: CategoryRef[] = [];
  let c = id ? byId.get(id) : undefined;
  while (c) {
    out.unshift({ id: c.id, name: c.name, url: c.url });
    c = c.parentId ? byId.get(c.parentId) : undefined;
  }
  return out;
}

/** true when `id` is `ancestorId` or sits below it. */
export function isInCategory(id: string | undefined, ancestorId: string): boolean {
  return categoryPath(id).some((c) => c.id === ancestorId);
}

/** Leaf category name ("Smartphones"), used by rank badges ("#38 in Smartphones") and the best-seller CTA. */
export const leafName = (id?: string) => (id ? byId.get(id)?.name : undefined);

/** Category tiles (id, name, emoji) — kept for package users; the taxonomy is `taxonomy` in categories.ts. */
export const categories = [
  { id: 'electronics', name: 'Electronics', emoji: '🎧' },
  { id: 'mobiles', name: 'Mobiles', emoji: '📱' },
  { id: 'fashion', name: 'Fashion', emoji: '👗' },
  { id: 'beauty', name: 'Beauty', emoji: '💄' },
  { id: 'home', name: 'Home & Kitchen', emoji: '🛋️' },
  { id: 'grocery', name: 'Grocery', emoji: '🥑' },
  { id: 'gaming', name: 'Gaming', emoji: '🎮' },
  { id: 'toys', name: 'Toys', emoji: '🧸' },
  { id: 'sports', name: 'Sports', emoji: '⚽️' },
  { id: 'baby', name: 'Baby', emoji: '🍼' },
  { id: 'books', name: 'Books', emoji: '📚' },
  { id: 'auto', name: 'Automotive', emoji: '🚗' },
];
