import { defineContent } from '../../define';

/** iPhone 17 Pro liquid silicone case: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'A liquid silicone case made for the 6.3-inch iPhone 17 Pro. The silky soft-touch finish is easy to grip, and the full-body design with a soft lining helps protect against scratches and everyday drops.',
  featureBullets: [
    'Made for iPhone 17 Pro (6.3-inch)',
    'Liquid silicone with a silky soft-touch finish',
    'Full-body protection with raised edges',
    'Anti-scratch inner lining',
    'Shockproof design for everyday drops',
  ],
  highlights: ['iPhone 17 Pro', 'Liquid silicone'],
  specs: [
    ['Brand', 'Generic'],
    ['Compatible Phone Model', 'iPhone 17 Pro'],
    ['Screen Size', '6.3 in'],
    ['Case Type', 'Back Cover'],
    ['Material', 'Liquid Silicone'],
    ['Features', 'Shockproof, Anti-Scratch'],
  ],
  aiOverview: [
    { title: 'Soft grip', description: 'The silicone finish feels smooth and is less slippery than a bare phone.' },
    { title: 'Everyday protection', description: 'Covers the back and edges to guard against scratches and small drops.' },
    { title: 'Keep in mind', description: 'Fits iPhone 17 Pro only, not the 17 Pro Max; silicone can collect lint in pockets.' },
  ],
  reviews: [
    {
      name: 'Yousef A.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Perfect fit for 17 Pro',
      body: 'Fits snugly, buttons are easy to press and the camera cut-out lines up well. Arrived the next day.',
      verified: true,
      helpful: 12,
    },
    {
      name: 'Maria L.',
      rating: 4,
      ago: '1 month ago',
      title: 'Nice feel for the price',
      body: 'Soft and grippy, feels much more expensive than it is. It picks up a bit of dust from my bag.',
      verified: true,
      helpful: 8,
    },
    {
      name: 'Imran S.',
      rating: 3,
      ago: '1 month ago',
      title: 'Okay, colour slightly different',
      body: 'Good fit and protection, but the colour was a little darker than the photo.',
      verified: true,
      helpful: 4,
    },
  ],
  aiSummary: [
    'Buyers say the case fits the iPhone 17 Pro precisely with easy-to-press buttons.',
    'The soft silicone feel is praised as premium for the price.',
    'Some mention dust collecting on the surface and a slight colour difference.',
  ],
  seller: {
    name: 'GTaj LLC',
    rating: 4.3,
    ratingCount: 386,
    positive: 88,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 93, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 3 },
    ],
  },
  offerBadges: [
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
  fbt: ['Z4E7C13D1C7101937B8CEZ', 'ZF1A24406870D3964331CZ'],
});
