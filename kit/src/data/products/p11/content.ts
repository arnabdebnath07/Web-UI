import { defineContent } from '../../define';

/** Anker PowerLine III USB-C to USB-C cable 100W 1.8m: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'A USB-C to USB-C cable from Anker’s PowerLine III range, rated for up to 100W. The 1.8m length reaches a bedside or sofa comfortably, and it charges phones, tablets and USB-C laptops from a compatible charger.',
  featureBullets: [
    'Up to 100W power delivery with a compatible charger',
    'USB-C on both ends for phones, tablets and laptops',
    '1.8m length for desks, bedsides and cars',
    'Durable build designed for daily bending',
    'Black finish',
  ],
  highlights: ['100W', '1.8m'],
  specs: [
    ['Brand', 'Anker'],
    ['Model Name', 'PowerLine III USB-C to USB-C'],
    ['Connector Type', 'USB-C to USB-C'],
    ['Maximum Power', '100 W'],
    ['Cable Length', '1.8 m'],
    ['Colour', 'Black'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Fast charging', description: 'Carries up to 100W, enough for most USB-C laptops as well as phones.' },
    { title: 'Handy length', description: 'At 1.8m it reaches further than the short cables that come in most boxes.' },
    { title: 'Keep in mind', description: 'Charging speed depends on the charger and device; a 100W charger is not included.' },
  ],
  reviews: [
    { name: 'Hamza R.', rating: 5, ago: '5 days ago', title: 'Charges my laptop fine', body: 'Using it with a 100W charger for my laptop and it charges at full speed. Feels well made.', verified: true, helpful: 18 },
    { name: 'Neha S.', rating: 5, ago: '2 weeks ago', title: 'Good length', body: 'Reaches from the wall to my bed easily. Came in simple Anker packaging.', verified: true, helpful: 7 },
    { name: 'Ahmed T.', rating: 4, ago: '1 month ago', title: 'Solid, slightly stiff', body: 'Charges my phone fast. The cable is a bit stiff out of the box but loosens up.', verified: true, helpful: 4 },
  ],
  aiSummary: [
    'Buyers confirm full-speed laptop charging with a 100W charger',
    'The 1.8m length is a common highlight',
    'A few find the cable stiff at first',
  ],
  seller: {
    name: 'Global Gadgets',
    rating: 4.5,
    ratingCount: 3260,
    positive: 91,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 96, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 5 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  dealTag: 'Limited Time Deal',
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
});
