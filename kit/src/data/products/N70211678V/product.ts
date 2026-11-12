import { defineProduct } from '../../define';

export default defineProduct({
  id: 'N70211678V',
  brand: 'Apple',
  title: 'iPhone 17 Pro 512 GB (eSIM only) Deep Blue 5G With FaceTime - International Version',
  price: 5299,
  rating: 4.5,
  ratingCount: 34297,
  emoji: '📱',
  tint: '#F2F3F7', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: false,
  delivery: 'Get it by <b>12 Oct</b>',
  category: 'Mobiles',
  seller: 'Buy Me',
  sku: 'N70211678V',
  offerCode: 'ad888ab0e9903c0e',
  categoryId: 'smartphones',
  nudges: [
    { text: 'Lowest price in 30 days', kind: 'lowestPrice' },
    { text: 'Free Delivery', kind: 'freeDelivery' },
    { text: 'Only 1 left in stock', kind: 'lowStock' },
  ],
  stockLeft: 1,
  freeDelivery: true,
  attributes: {
    model: 'iPhone 17 Pro',
    storage: '512 GB',
    color: 'Deep Blue',
    version: 'International Version (eSIM)',
  },
  variantFamily: 'iphone-17-pro',
  collection: 'live',
  order: 26,
});
