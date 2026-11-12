import { defineProduct } from '../../define';

export default defineProduct({
  id: 'p1',
  brand: 'Apple',
  title: 'AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C) White',
  price: 799,
  was: 1029,
  rating: 4.7,
  ratingCount: 12840,
  emoji: '🎧',
  tint: '#EEF2F8', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: true,
  tag: 'Best Seller',
  delivery: 'Get it <b>Tomorrow</b>',
  category: 'Electronics',
  coupon: 'Extra 10% off with coupon',
  colors: ['#F5F5F7', '#1D1D1F'], // token-lint-ignore: mock catalog data (product tint / swatch)
  highlights: ['Active Noise Cancellation', 'Adaptive Audio', 'USB‑C charging'],
  seller: 'noon',
  collection: 'demo',
  order: 0,
});
