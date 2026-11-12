import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** realme 16 Pro 5G 12GB RAM 256GB Pebble Grey: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The realme 16 Pro 5G brings 12GB of RAM, 256GB of storage and 5G connectivity to the realme number series, aimed at people who want strong cameras and a premium design without flagship pricing. This International Version comes in Pebble Grey with dual SIM support.',
  featureBullets: [
    'Pro model of the realme 16 series',
    '12GB RAM for smooth multitasking',
    '256GB internal storage',
    '5G dual SIM connectivity',
    'Pebble Grey finish, International Version',
  ],
  highlights: ['256GB', '12GB RAM', '5G'],
  specs: [
    ['Brand', 'realme'],
    ['Model Name', '16 Pro 5G'],
    ['Colour', 'Pebble Grey'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Upper mid-range',
      description: 'Pro-tier features in the realme number series at a mid-range price.',
    },
    {
      title: 'Lots of memory',
      description: '12GB RAM and 256GB storage keep apps and media running smoothly.',
    },
    { title: 'Understated style', description: 'Pebble Grey is a subtle, versatile colour.' },
    {
      title: 'Keep in mind',
      description: 'This is the International Version; features and preinstalled apps can differ from the Middle East Version.',
    },
  ],
  reviews: [
    {
      name: 'Faisal R.',
      rating: 5,
      ago: '1 week ago',
      title: 'Premium feel',
      body: 'Feels much more expensive than it is. Photos come out sharp and colourful. Arrived next day.',
      verified: true,
      helpful: 24,
      variant: 'Pebble Grey',
    },
    {
      name: 'Anna P.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Great camera phone',
      body: 'Portrait shots are lovely. Battery lasts a full day of heavy use.',
      verified: true,
      helpful: 15,
      variant: 'Pebble Grey',
    },
    {
      name: 'Bilal Z.',
      rating: 4,
      ago: '1 month ago',
      title: 'Smooth and fast',
      body: 'Very smooth with lots of apps open. A couple of preinstalled apps I removed.',
      verified: true,
      helpful: 9,
    },
  ],
  aiSummary: [
    'Buyers say it looks and feels premium for the price.',
    'Camera quality, especially portraits, is a highlight.',
    'Some mention removing preinstalled apps.',
  ],
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: REALME16' }],
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(325)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(433)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70307986V', 'p11'],
});
