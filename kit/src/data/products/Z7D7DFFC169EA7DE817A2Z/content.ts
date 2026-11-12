import { defineContent } from '../../define';

/** iPhone 17 Pro silicone case 6.3 inch: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'A slim silicone case for the 6.3-inch iPhone 17 Pro. It adds grip and protects the back and edges from scratches and bumps without adding much bulk.',
  featureBullets: [
    'Made for iPhone 17 Pro (6.3-inch)',
    'Soft silicone for a comfortable grip',
    'Slim profile that keeps the phone pocketable',
    'Precise cut-outs for buttons, ports and cameras',
  ],
  highlights: ['iPhone 17 Pro', 'Silicone'],
  specs: [
    ['Brand', 'Generic'],
    ['Compatible Phone Model', 'iPhone 17 Pro'],
    ['Screen Size', '6.3 in'],
    ['Case Type', 'Back Cover'],
    ['Material', 'Silicone'],
  ],
  aiOverview: [
    { title: 'Slim and light', description: 'Adds protection without making the phone bulky.' },
    { title: 'Better grip', description: 'The silicone surface is easier to hold than bare glass and metal.' },
    { title: 'Keep in mind', description: 'Fits iPhone 17 Pro only, not the 17 Pro Max.' },
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 48210,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
  fbt: ['Z7D7DFFC169EA7DE817A2Z', 'ZF1A24406870D3964331CZ'],
});
