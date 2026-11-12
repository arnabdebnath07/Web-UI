// Photo missing from the capture: this variant still shows N70211534V's card (same model, other colour). Drop a
// card.webp in this folder and delete the two image lines below to fix it.
import card from '@assets/products/iphone-17-pro/card-n70211534v.webp';
import { defineProduct } from '../../define';

export default defineProduct({
  id: 'N70211564V',
  brand: 'Apple',
  title: 'iPhone 17 Pro 512GB (Nano SIM + eSIM) Deep Blue 5G With FaceTime - International Version',
  price: 5849,
  rating: 4.5,
  ratingCount: 34297,
  emoji: '📱',
  tint: '#F2F3F7', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: true,
  delivery: 'Get it by <b>12 Oct</b>',
  category: 'Mobiles',
  seller: 'KKGSM',
  sku: 'N70211564V',
  offerCode: 'dea80d9ad811d60a',
  categoryId: 'smartphones',
  nudges: [
    { text: 'Free Delivery', kind: 'freeDelivery' },
    { text: 'Only 1 left in stock', kind: 'lowStock' },
  ],
  stockLeft: 1,
  freeDelivery: true,
  attributes: {
    model: 'iPhone 17 Pro',
    storage: '512 GB',
    color: 'Deep Blue',
    version: 'International Version',
  },
  variantFamily: 'iphone-17-pro',
  image: card,
  collection: 'live',
  order: 22,
});
