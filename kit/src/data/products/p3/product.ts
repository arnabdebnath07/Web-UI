import { defineProduct } from '../../define';

export default defineProduct({
  id: 'p3',
  brand: 'Nike',
  title: 'Air Max 270 Men\'s Running Shoes Black/White',
  price: 389,
  was: 599,
  rating: 4.4,
  ratingCount: 912,
  emoji: '👟',
  tint: '#F4F1EC', // token-lint-ignore: mock catalog data (product tint / swatch)
  express: true,
  delivery: 'Get it <b>Mon, Oct 13</b>',
  category: 'Fashion',
  sizes: ['40', '41', '42', '43', '44', '45'],
  colors: ['#111111', '#F2F2F2', '#B23A3A'], // token-lint-ignore: mock catalog data (product tint / swatch)
  seller: 'Sports Corner',
  collection: 'demo',
  order: 2,
});
