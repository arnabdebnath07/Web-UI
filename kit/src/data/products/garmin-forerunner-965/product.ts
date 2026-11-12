import { defineProduct } from '../../define';

/** Garmin lineup demo (PLP Figma XzSbnjrYFbhNg6Rc5lKmGJ · 1035:1256 product grid / 1175:162142 series prices). */
export default defineProduct({
  id: 'garmin-forerunner-965',
  brand: 'Garmin',
  title: 'Forerunner 965 - 47MM - Up To 31 Hours Battery Life in GPS Mode - 1.4 Inch AMOLED Display, Titanium Bezel Black',
  price: 2449,
  was: 2799,
  rating: 3.7,
  ratingCount: 503,
  emoji: '⌚',
  tint: '#F2F3F7', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: true,
  delivery: 'Get it <b>Tomorrow</b>',
  category: 'Wearables',
  collection: 'watches',
  order: 8,
});
