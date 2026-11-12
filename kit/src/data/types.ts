import type { CategoryRef } from './categories';

/**
 * Data-layer types. A product is one folder in src/data/products/<id>/ (product.ts + its photos); see README.md.
 * `Product` is the shape every flow and component reads (unchanged from the old src/mocks/products.ts).
 */
export interface Product {
  id: string;
  brand: string;
  title: string;
  price: number;
  was?: number;
  rating: number;
  ratingCount: number;
  emoji: string;
  /** placeholder background tint behind the emoji */
  tint: string;
  image?: string;
  express?: boolean;
  /** sold through supermall (bappzaar cart group serviceMode 'rocket') — lands in the cart's supermall group */
  supermall?: boolean;
  tag?: 'Best Seller' | 'Top Rated' | 'New' | 'Selling out fast';
  delivery: string;
  category: string;
  coupon?: string;
  colors?: string[];
  sizes?: string[];
  highlights?: string[];
  seller?: string;
  /* ── Live-data fields (optional; used by the PDP for real noon products, see src/flows/pdp/MAPPING.md) ── */
  /** noon sku_config, e.g. N70211593V */
  sku?: string;
  /** selected offer code (?o=…) */
  offerCode?: string;
  /** gallery images (real photos); `image` stays the first / card image */
  images?: string[];
  /** leaf category id in src/mocks/categories.ts */
  categoryId?: string;
  /** root → leaf breadcrumb (categoryPath(categoryId)) */
  categoryPath?: CategoryRef[];
  /** best_seller_rank in the leaf category → "#38 in Smartphones" */
  rank?: number;
  /** SD nudges (product box ticker / PDP nudge tag) */
  nudges?: ProductNudge[];
  /** low_stock_nudge_value → "Only 1 left in stock" */
  stockLeft?: number;
  freeDelivery?: boolean;
  /** model / colour / storage / version attributes (variant matrix keys) */
  attributes?: ProductAttributes;
  /** id of the variant matrix this product belongs to (variantFamilies) */
  variantFamily?: string;
  sellerRating?: { value: number; count: number };
  /** @deprecated page content lives in `src/data/products/<id>/content.ts` (ProductContent.description) */
  description?: string;
  /** @deprecated use ProductContent.featureBullets */
  featureBullets?: string[];
  /** @deprecated use ProductContent.specs */
  specs?: [string, string][];
}

export interface ProductNudge {
  text: string;
  kind: 'rank' | 'lowestPrice' | 'freeDelivery' | 'lowStock' | 'sellingFast' | 'soldRecently' | 'info';
}

export interface ProductAttributes {
  model?: string;
  color?: string;
  storage?: string;
  version?: string;
}

/** A product family's variant matrix (noon `groups`): one row per dimension, options in the live page order. */
export interface VariantFamily {
  id: string;
  dimensions: { key: keyof ProductAttributes; name: string; options: string[]; versionGuide?: boolean }[];
}

/** Which list a product belongs to: `products` (demo + live + home, the shared catalogue), `phoneProducts` (PLP phone
 *  listing), `watchProducts` (PLP Garmin lineup), `orders` (order-history items). Every product is findable by id through getProduct / productById. */
export type ProductCollection = 'demo' | 'live' | 'home' | 'phones' | 'watches' | 'orders';

/** What a product.ts file declares. Photos in the product's folder fill `image` (card.*) and `images`
 *  (card + gallery-N.*) automatically; set them here only for photos that live elsewhere. `categoryPath` is derived
 *  from `categoryId` unless given. */
export type ProductInput = Omit<Product, 'image' | 'images' | 'categoryPath'> &
  Partial<Pick<Product, 'image' | 'images' | 'categoryPath'>> & {
    collection: ProductCollection;
    /** sort key inside its collection (lists keep this order); new products without one go last */
    order?: number;
  };

/* ── Product page content ─────────────────────────────────────────────────────────────────────────────────────────── */

/** One customer review (mp-trust-api product-reviews). */
export interface ProductReview {
  name: string;
  rating: number;
  /** relative date as the page prints it ("2 weeks ago") */
  ago: string;
  title: string;
  body: string;
  verified: boolean;
  helpful: number;
  /** the variant the reviewer bought (one chip) */
  variant?: string;
  /** productGroupVariant chips (colour, storage, model …) */
  variants?: string[];
  images?: string[];
}

/** One seller metric chip: tenure, a percentage score or a badge. `tone` says what it means; the screen picks the colour. */
export interface SellerMetric {
  kind: 'years' | 'percent' | 'badge';
  title: string;
  value?: number;
  tone?: 'positive';
}

export interface SellerInfo {
  name: string;
  rating: number;
  /** partner_ratings_sellerlab.num_of_rating */
  ratingCount?: number;
  /** % positive ratings */
  positive: number;
  metrics: SellerMetric[];
  /** line under the name; official stores default to "Official {brand} partner on noon" */
  subtitle?: string;
  /** "{n} offers from other sellers from {price}"; without it the buying options are counted */
  offerCount?: number;
  offerFrom?: number;
}

/** One payment offer row: a logo (a card image is `cover`-fitted) and its HTML. */
export interface PaymentOffer {
  logo: string;
  html: string;
  cover?: boolean;
}

/** A free gift with the product (NoonFreebieItemType). */
export interface ProductFreebie {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  /** PLP query "View eligible products" opens */
  eligibleQuery?: string;
}

/** A faster delivery lane under the estimate: "Get it {day}" (+ note) and its surcharge, or another offer at its own price. */
export interface DeliveryLane {
  day: string;
  note?: string;
  price: number;
  /** another SKU / offer for this lane → nav.replace */
  productId?: string;
  /** the lane is another offer at its full price, not a "+" delivery fee */
  offer?: boolean;
}

/**
 * Everything the product page says about one product beyond its card: written in
 * `src/data/products/<id>/content.ts` with `defineContent`, merged over its variant family's shared content
 * (`src/data/families/<family>.ts`). Every field is optional: a section with no data is not shown.
 * HTML strings use the server tags the PDP renders (`<b>`, `<a>`, `<highlight>`).
 */
export interface ProductContent {
  /** where this content comes from: captured from noon.com (with the date), or written for the prototype */
  source: { kind: 'captured' | 'written'; note?: string };
  description?: string;
  /** feature_bullets */
  featureBullets?: string[];
  /** key highlights (bullets under the title) */
  highlights?: string[];
  /** specifications (name, value) */
  specs?: [string, string][];
  /** product overview "Summarised by AI" (mp-catalog ai_overview) */
  aiOverview?: { title: string; description: string }[];
  /** review summary bullets (mp-trust-api ai-summary) */
  aiSummary?: string[];
  reviews?: ProductReview[];
  /** written reviews count when it differs from ratingCount */
  commentCount?: number;
  seller?: SellerInfo;
  /** official brand store tick */
  officialStore?: boolean;
  /** deal tag over the price ("Limited Time Deal") */
  dealTag?: string;
  /** coupon rows (SD discount_tags): title + code */
  discountTags?: { title: string; code?: string }[];
  /** best price with a coupon (SD best_price.tag_v2) */
  bestPrice?: { price: number; html: string };
  /** payment offers card: title + rows (logo + HTML) */
  payments?: { title: string; items: PaymentOffer[] };
  /** trust badges under the price */
  offerBadges?: { icon: 'returnable' | 'warranty' | 'verified' | 'tick' | 'offer'; title: string }[];
  /** additional information rows (warranty, returns, approvals) */
  additional?: { icon: 'warranty' | 'returnable' | 'verified'; text: string }[];
  /** delivery estimate HTML when the offer has its own ("Get it by <b>12 Oct</b>") */
  delivery?: string;
  /** minutes left to order for that estimate */
  orderWithinMin?: number;
  /** other offers of this product with faster delivery (buying_options) */
  buyingOptions?: { code: 'rocket' | 'express'; html: string; price: number; was?: number; productId?: string }[];
  /** faster delivery lanes picked at checkout */
  fasterLanes?: DeliveryLane[];
  freebies?: ProductFreebie[];
  /** frequently bought together: product ids, this product first */
  fbt?: string[];
  /** A+ brand creatives */
  aplusImages?: string[];
  /** was price comes from a source → info icon */
  wasPriceSource?: boolean;
}

/**
 * Content a variant family shares (noon content is per product group): description, highlights, AI overview, reviews
 * and their summary, colour swatches. A member's own content.ts adds what differs (specs, offers) and wins per field.
 */
export interface FamilyContent extends Omit<ProductContent, 'source'> {
  id: string;
  /** colour option → swatch image */
  swatches?: Record<string, string>;
}
