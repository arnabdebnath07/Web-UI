import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OPPO A2 5G 12GB RAM 256GB Violet Purple: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The OPPO A2 5G offers 12GB of RAM, with up to 4GB of extended RAM, and 256GB of storage for smooth multitasking and plenty of space. 5G connectivity keeps downloads and streaming fast. This Global Version comes in Violet Purple.',
  featureBullets: [
    '12GB RAM plus up to 4GB extended RAM',
    '256GB internal storage',
    '5G connectivity',
    'Violet Purple finish',
    'Global Version',
  ],
  highlights: ['256GB', '12GB RAM', '5G'],
  specs: [
    ['Brand', 'OPPO'],
    ['Model Name', 'A2 5G'],
    ['Colour', 'Violet Purple'],
    ['RAM Size', '12 GB'],
    ['Extended RAM', 'Up to 4 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Lots of memory', description: '12GB RAM plus extended RAM at a budget price.' },
    { title: 'Big storage', description: '256GB holds plenty of apps, photos and videos.' },
    { title: '5G speeds', description: 'Fast mobile data for streaming and downloads.' },
    {
      title: 'Keep in mind',
      description: 'This is the Global Version; extended RAM uses part of the internal storage.',
    },
  ],
  reviews: [
    {
      name: 'Zainab M.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Great value',
      body: 'Lots of RAM and storage for the price, and the purple looks lovely. Arrived next day.',
      verified: true,
      helpful: 2,
      variant: 'Violet Purple',
    },
  ],
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(197)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(263)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
