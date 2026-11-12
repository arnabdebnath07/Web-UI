import { defineContent } from '../../define';

/** Protective case for AirPods Pro 3, black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title' },
  description:
    'A shockproof protective case designed for the AirPods Pro 3 charging case, finished in black. It guards against drops, scratches and everyday knocks, and the included carabiner clips it to a bag, belt loop or keys.',
  featureBullets: [
    'Designed for AirPods Pro 3',
    'Shockproof protection against drops and bumps',
    'Carabiner included for clipping to bags and keys',
    'Black finish',
  ],
  specs: [
    ['Compatible Model', 'AirPods Pro 3'],
    ['Colour Name', 'Black'],
    ['Protection', 'Shockproof'],
    ['Included Accessories', 'Carabiner'],
    ['Item Condition', 'New'],
  ],
  reviews: [
    {
      name: 'Karim E.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Fits perfectly',
      body: 'Snug fit on my AirPods Pro 3 case and the carabiner feels sturdy on my backpack.',
      verified: true,
      helpful: 4,
    },
    {
      name: 'Lina G.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good protection',
      body: 'Survived a couple of drops already. A little bulkier than I expected, but that is the point.',
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
