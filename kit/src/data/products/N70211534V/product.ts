import card from '@assets/products/iphone-17-pro/card-n70211534v.webp';
import { defineProduct } from '../../define';

export default defineProduct({
  id: 'N70211534V',
  brand: 'Apple',
  title: 'iPhone 17 Pro 256 GB (eSIM only) Deep Blue 5G With FaceTime - Middle East Version',
  price: 4099,
  was: 4699,
  rating: 4.5,
  ratingCount: 34297,
  emoji: '📱',
  tint: '#F2F3F7', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: true,
  delivery: 'Get it by <b>12 Oct</b>',
  category: 'Mobiles',
  seller: 'Amanah',
  sku: 'N70211534V',
  offerCode: 'e1d3efe3c565cc9b',
  categoryId: 'smartphones',
  nudges: [
    { text: 'Lowest price in a year', kind: 'lowestPrice' },
    { text: 'Free Delivery', kind: 'freeDelivery' },
  ],
  freeDelivery: true,
  attributes: {
    model: 'iPhone 17 Pro',
    storage: '256 GB',
    color: 'Deep Blue',
    version: 'Middle East Version (eSIM)',
  },
  variantFamily: 'iphone-17-pro',
  image: card,
  collection: 'live',
  order: 25,
});
