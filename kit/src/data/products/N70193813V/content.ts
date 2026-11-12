import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Nothing Phone 3 256GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Nothing Phone (3) is Nothing\'s flagship, introducing the Glyph Matrix, a small dot-matrix display on the back for notifications, glyph toys and a quick selfie preview. It runs on the Snapdragon 8s Gen 4 chip. This Middle East version in Black has 12GB of RAM, 256GB of storage, dual SIM and 5G.',
  featureBullets: [
    'Glyph Matrix rear display for notifications and widgets',
    'Snapdragon 8s Gen 4 processor',
    '12GB RAM with 256GB internal storage',
    'Clean Nothing OS on Android',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Nothing'],
    ['Model Name', 'Phone (3)'],
    ['Colour Name', 'Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Processor', 'Snapdragon 8s Gen 4'],
    ['Operating System', 'Android (Nothing OS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Glyph Matrix', description: 'A dot-matrix display on the back shows notifications, the time and small glyph toys without waking the screen.' },
    { title: 'Flagship-class speed', description: 'The Snapdragon 8s Gen 4 with 12GB RAM handles gaming and multitasking smoothly.' },
    { title: 'Distinct design', description: 'Nothing\'s industrial, transparent look in Black stands apart from typical flagships.' },
    { title: 'Keep in mind', description: 'A charger may not be included in the box; check the contents and use a fast USB-C charger you already own.' },
  ],
  reviews: [
    {
      name: 'Yousef M.',
      rating: 5,
      ago: '1 week ago',
      title: 'Unique and fast',
      body: 'The Glyph Matrix is genuinely useful for checking the time and battery face down. Very fast phone.',
      verified: true,
      helpful: 6,
      variant: 'Black',
    },
    {
      name: 'Hannah C.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Love the design',
      body: 'Nothing else looks like it. Software is clean and updates arrive quickly. Next-day delivery to Abu Dhabi.',
      verified: true,
      helpful: 4,
      variant: 'Black',
    },
    {
      name: 'Faisal R.',
      rating: 4,
      ago: '1 month ago',
      title: 'Great phone',
      body: 'Performance and screen are excellent. Camera is good but processing is a little slow sometimes.',
      verified: true,
      helpful: 2,
    },
  ],
  aiSummary: [
    'Buyers find the Glyph Matrix both fun and practical',
    'Design and clean software are frequently praised',
    'One reviewer mentions slightly slow camera processing',
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 3120,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 6 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  offerBadges: [
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  discountTags: [
    { title: 'Extra 10% off', code: 'CODE: GLYPH10' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(525)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(700)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70193813V', 'p11'],
});
