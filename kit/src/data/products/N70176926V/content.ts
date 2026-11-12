import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OnePlus 13s 512GB Black Velvet: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The OnePlus 13s is a compact flagship powered by the Snapdragon 8 Elite chip, with OnePlus AI features built in. This Indian version in Black Velvet has 16GB of RAM, 512GB of storage, dual SIM and 5G. A customisable Plus Key replaces the classic alert slider.',
  featureBullets: [
    'Snapdragon 8 Elite chip in a compact body',
    '16GB RAM with 512GB internal storage',
    'Customisable Plus Key for quick actions',
    'OnePlus AI features built in',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['512GB', '16GB RAM', 'Compact'],
  specs: [
    ['Brand', 'OnePlus'],
    ['Model Name', '13s'],
    ['Colour Name', 'Black Velvet'],
    ['RAM Size', '16 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Indian Version'],
    ['Item Condition', 'New'],
    ['Processor', 'Snapdragon 8 Elite'],
    ['Operating System', 'Android (OxygenOS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Flagship power, smaller size', description: 'The Snapdragon 8 Elite with 16GB RAM delivers top-tier speed in a phone that is easy to use one-handed.' },
    { title: 'Plus Key', description: 'A programmable button launches AI tools, the camera or a sound profile with one press.' },
    { title: 'Generous storage', description: '512GB means you rarely need to clear space.' },
    { title: 'Keep in mind', description: 'This is the Indian version: check that it supports the bands you need, and warranty is provided by the seller.' },
  ],
  reviews: [
    {
      name: 'Vikram N.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Perfect compact flagship',
      body: 'Finally a fast phone that fits in my pocket. The Black Velvet finish does not show fingerprints.',
      verified: true,
      helpful: 19,
      variant: 'Black Velvet',
    },
    {
      name: 'Sara T.',
      rating: 4,
      ago: '1 month ago',
      title: 'Fast, works fine on UAE networks',
      body: 'Works with my SIM and 5G with no issues. Some apps were Indian-region but easy to remove.',
      verified: true,
      helpful: 14,
      variant: 'Black Velvet',
    },
    {
      name: 'Ahmed F.',
      rating: 4,
      ago: '2 months ago',
      title: 'Plus Key is handy',
      body: 'I set the Plus Key to silent mode and the camera. Battery is better than I expected for the size.',
      verified: true,
      helpful: 6,
    },
  ],
  aiSummary: [
    'Buyers like the flagship speed in a compact, pocketable body',
    'The Black Velvet finish and the Plus Key get positive mentions',
    'Some note regional apps from the Indian version that need removing',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(538)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(717)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70176926V', 'p11'],
});
