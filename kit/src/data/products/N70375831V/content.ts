import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OnePlus Nord CE6 256GB Pitch Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The OnePlus Nord CE6 is the latest in OnePlus\'s \'Core Edition\' Nord line, offering OxygenOS and dependable everyday performance at a mid-range price. This international version in Pitch Black has 8GB of RAM, 256GB of storage, dual SIM and 5G.',
  featureBullets: [
    'Pitch Black finish',
    '8GB RAM with 256GB internal storage',
    'OxygenOS on Android',
    'Dual SIM with 5G connectivity',
    'International version',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'OnePlus'],
    ['Model Name', 'Nord CE6'],
    ['Colour Name', 'Pitch Black'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android (OxygenOS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Everyday reliability', description: '8GB RAM keeps social, streaming and messaging apps responsive.' },
    { title: 'Room to grow', description: '256GB of storage is plenty for most users.' },
    { title: 'Keep in mind', description: 'This is the international version, so warranty is provided by the seller rather than the brand in the UAE.' },
  ],
  reviews: [
    {
      name: 'Imran Q.',
      rating: 4,
      ago: '1 week ago',
      title: 'Good daily phone',
      body: 'Smooth for everyday apps and the battery lasts a full day. Delivery was next day.',
      verified: true,
      helpful: 9,
      variant: 'Pitch Black',
    },
    {
      name: 'Elena P.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Clean and fast',
      body: 'OxygenOS is clean. Pitch Black looks sleek. Works on UAE 5G without issues.',
      verified: true,
      helpful: 6,
      variant: 'Pitch Black',
    },
    {
      name: 'Tariq Z.',
      rating: 4,
      ago: '1 month ago',
      title: 'Decent value',
      body: 'Good screen and speakers. Camera is fine in daylight but noisy at night.',
      verified: true,
      helpful: 3,
    },
  ],
  aiSummary: [
    'Buyers describe it as a smooth, dependable everyday phone',
    'OxygenOS and the Pitch Black design are well liked',
    'Low-light camera performance is called average',
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
    { icon: 'warranty', text: '1 Year Seller Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(325)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(433)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
