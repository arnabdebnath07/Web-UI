import { defineContent } from '../../define';

/** Household clothes and quilt storage bag: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title' },
  description:
    'A household storage bag for clothes, quilts and bedding. Use it to clear wardrobe space, store out-of-season items under the bed or pack belongings when moving home.',
  featureBullets: [
    'Holds clothes, quilts and bedding',
    'Frees up wardrobe and bedroom space',
    'Handy when moving home',
    'Folds flat when not in use',
  ],
  specs: [
    ['Brand', 'Generic'],
    ['Product Type', 'Storage Bag'],
    ['Use', 'Clothes, Quilts, Bedding'],
    ['Room', 'Bedroom'],
    ['Item Condition', 'New'],
  ],
  reviews: [
    {
      name: 'Fatima Z.',
      rating: 4,
      ago: '2 weeks ago',
      title: 'Fits a double duvet',
      body: 'Packed two quilts in one bag and it slides under the bed. Good for the price.',
      verified: true,
      helpful: 3,
    },
    {
      name: 'Paul N.',
      rating: 4,
      ago: '1 month ago',
      title: 'Useful for moving',
      body: 'Used several for our move to Dubai Marina. They held our quilts and winter clothes without tearing.',
      verified: true,
      helpful: 2,
    },
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
