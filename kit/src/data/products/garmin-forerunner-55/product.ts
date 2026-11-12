import { defineProduct } from '../../define';

/** Garmin lineup demo (PLP Figma XzSbnjrYFbhNg6Rc5lKmGJ · 1035:1256 product grid / 1175:162142 series prices). */
export default defineProduct({
  id: 'garmin-forerunner-55',
  brand: 'Garmin',
  title: 'Forerunner 55 - 42MM - Up To 2 Weeks Battery Life - GPS Running Watch, PacePro, Heart Rate Monitor Whitestone',
  price: 819,
  was: 999,
  rating: 4.5,
  ratingCount: 3120,
  emoji: '⌚',
  tint: '#F2F3F7', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: true,
  delivery: 'Get it <b>Tomorrow</b>',
  category: 'Wearables',
  collection: 'watches',
  order: 9,
});
