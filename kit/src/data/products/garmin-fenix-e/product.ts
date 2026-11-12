import { defineProduct } from '../../define';

/** Garmin lineup demo (PLP Figma XzSbnjrYFbhNg6Rc5lKmGJ · 1035:1256 product grid / 1175:162142 series prices). */
export default defineProduct({
  id: 'garmin-fenix-e',
  brand: 'Garmin',
  title: 'Fenix E - 47MM - Up To 16 Days Battery Life - 1.3 Inch AMOLED Display, Stainless Steel Bezel, Multi-Sport GPS Slate Grey',
  price: 2915,
  was: 3299,
  rating: 4.6,
  ratingCount: 96,
  emoji: '⌚',
  tint: '#F2F3F7', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: false,
  delivery: 'Get it by <b>12 Oct</b>',
  category: 'Wearables',
  collection: 'watches',
  order: 10,
});
