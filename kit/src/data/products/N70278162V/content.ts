import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OPPO A6x 5G 4GB RAM 128GB Ice Blue: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The OPPO A6x 5G is an affordable 5G smartphone with 4GB of RAM and 128GB of storage for calls, messaging, social media and streaming. Its durable everyday design suits busy routines. This Middle East Version comes in Ice Blue with dual SIM support.',
  featureBullets: [
    '5G dual SIM connectivity at an entry-level price',
    '4GB RAM for everyday apps',
    '128GB internal storage for photos and videos',
    'Large display for videos and browsing',
    'Ice Blue finish, Middle East Version',
  ],
  highlights: ['128GB', '4GB RAM', '5G'],
  specs: [
    ['Brand', 'OPPO'],
    ['Model Name', 'A6x 5G'],
    ['Colour', 'Ice Blue'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Entry-level 5G', description: 'One of the more affordable ways to get 5G on a new phone.' },
    {
      title: 'Everyday essentials',
      description: '4GB RAM and 128GB storage cover messaging, social and streaming.',
    },
    { title: 'Fresh look', description: 'The Ice Blue finish gives a light, clean style.' },
    {
      title: 'Keep in mind',
      description: 'With 4GB RAM it suits everyday use rather than heavy gaming or many apps open at once.',
    },
  ],
  reviews: [
    {
      name: 'Noura A.',
      rating: 5,
      ago: '1 week ago',
      title: 'Lovely colour, works well',
      body: 'The Ice Blue looks very nice. 5G is fast at home and the battery lasts the whole day.',
      verified: true,
      helpful: 18,
      variant: 'Ice Blue',
    },
    {
      name: 'Sunil K.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Good basic 5G phone',
      body: 'Bought it for my son. Smooth for YouTube and school apps, games are okay on low settings.',
      verified: true,
      helpful: 11,
      variant: 'Ice Blue',
    },
    {
      name: 'Rania D.',
      rating: 4,
      ago: '1 month ago',
      title: 'Value for money',
      body: 'Packaged well and arrived the next day. Camera is fine for everyday photos.',
      verified: true,
      helpful: 7,
    },
  ],
  aiSummary: [
    'Buyers like the Ice Blue colour and all-day battery.',
    'It is seen as good value for a 5G phone.',
    'Performance suits everyday apps; heavy games run on lower settings.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(200)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(267)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
