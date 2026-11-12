import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Xiaomi Redmi Note 15 Pro 5G 8GB RAM 256GB Glacier Blue: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The Xiaomi Redmi Note 15 Pro 5G is the step-up model in the Redmi Note 15 series, with 8GB of RAM, 256GB of storage and 5G connectivity. It is built for people who want a capable camera, a large display and long battery life at a mid-range price. This Global Version comes in Glacier Blue with dual SIM support.',
  featureBullets: [
    'Pro model of the Redmi Note 15 series',
    '5G dual SIM connectivity',
    '8GB RAM and 256GB internal storage',
    'Large display for streaming and gaming',
    'Glacier Blue finish, Global Version',
  ],
  highlights: ['256GB', '8GB RAM', '5G'],
  specs: [
    ['Brand', 'Xiaomi'],
    ['Model Name', 'Redmi Note 15 Pro'],
    ['Colour', 'Glacier Blue'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Mid-range sweet spot',
      description: 'Pro-level features of the Redmi Note line at an approachable price.',
    },
    { title: 'Ready for 5G', description: 'Fast mobile data with dual SIM flexibility.' },
    { title: 'Ample storage', description: '256GB holds plenty of photos, videos and apps.' },
    {
      title: 'Keep in mind',
      description: 'This is the Global Version; a case is recommended to protect the Glacier Blue back.',
    },
  ],
  reviews: [
    {
      name: 'Abdullah S.',
      rating: 5,
      ago: '1 week ago',
      title: 'Best Redmi Note yet',
      body: 'Screen is excellent and the camera takes sharp photos outdoors. Battery easily lasts more than a day.',
      verified: true,
      helpful: 34,
      variant: 'Glacier Blue',
    },
    {
      name: 'Maria G.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Beautiful colour',
      body: 'Glacier Blue looks great. Fast, smooth and arrived the next morning.',
      verified: true,
      helpful: 19,
      variant: 'Glacier Blue',
    },
    {
      name: 'Imran Q.',
      rating: 4,
      ago: '1 month ago',
      title: 'Very good value',
      body: 'Does everything I need. Night photos could be better but overall very happy.',
      verified: true,
      helpful: 11,
    },
  ],
  aiSummary: [
    'Buyers praise the display and battery life.',
    'Daylight photos are described as sharp; night shots are average.',
    'The Glacier Blue colour gets frequent compliments.',
  ],
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: NOTE15' }],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 18420,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(265)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(353)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70270098V', 'p11'],
});
