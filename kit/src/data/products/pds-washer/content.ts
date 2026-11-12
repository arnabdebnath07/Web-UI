import { defineContent } from '../../define';

/** Samsung 8kg washer with 6kg dryer: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title' },
  description:
    'A Samsung washer dryer that washes up to 8kg and dries up to 6kg in one machine. Eco Bubble helps detergent work at lower temperatures, Air Wash refreshes clothes without water, and Hygiene Steam helps remove allergens. A Digital Inverter motor keeps it quiet and efficient.',
  featureBullets: [
    '8kg wash and 6kg dry capacity',
    'Eco Bubble technology',
    'Air Wash to refresh clothes without water',
    'Hygiene Steam cycle',
    'Digital Inverter motor',
  ],
  specs: [
    ['Brand', 'Samsung'],
    ['Product Type', 'Washer Dryer'],
    ['Washing Capacity', '8 kg'],
    ['Drying Capacity', '6 kg'],
    ['Motor', 'Digital Inverter'],
    ['Features', 'Eco Bubble, Air Wash, Hygiene Steam'],
  ],
  reviews: [
    {
      name: 'Aisha K.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Wash and dry in one',
      body: 'Saves so much space in our apartment. Quiet, and the steam cycle is great for kids clothes.',
      verified: true,
      helpful: 9,
    },
    {
      name: 'Rohan M.',
      rating: 4,
      ago: '2 months ago',
      title: 'Works well',
      body: 'Delivery and installation were smooth. The combined wash and dry cycle takes a while but clothes come out dry.',
      verified: true,
      helpful: 4,
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
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
});
