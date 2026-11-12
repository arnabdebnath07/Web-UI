import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OnePlus Nord CE5 256GB Marble Mist: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The OnePlus Nord CE5 is a mid-range phone built around long battery life and smooth OxygenOS performance. This international version in Marble Mist has 8GB of RAM, 256GB of storage, dual SIM and 5G. It is a dependable everyday phone with OnePlus\'s clean software.',
  featureBullets: [
    'Marble Mist finish',
    '8GB RAM with 256GB internal storage',
    'MediaTek Dimensity 8350 Apex processor',
    'Large battery for all-day use',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'OnePlus'],
    ['Model Name', 'Nord CE5'],
    ['Colour Name', 'Marble Mist'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Item Condition', 'New'],
    ['Processor', 'MediaTek Dimensity 8350 Apex'],
    ['Operating System', 'Android (OxygenOS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Battery first', description: 'A large battery comfortably covers a full day of streaming, navigation and messaging.' },
    { title: 'Smooth performance', description: 'The Dimensity 8350 Apex with 8GB RAM handles everyday apps and casual gaming well.' },
    { title: 'Plenty of space', description: '256GB of storage is enough for most photo and app libraries.' },
    { title: 'Keep in mind', description: 'This is the international version, so warranty is provided by the seller rather than the brand in the UAE.' },
  ],
  reviews: [
    {
      name: 'Nadia B.',
      rating: 5,
      ago: '1 week ago',
      title: 'Battery lasts forever',
      body: 'Easily two days with normal use. The Marble Mist colour looks elegant. Delivered the next morning.',
      verified: true,
      helpful: 25,
      variant: 'Marble Mist',
    },
    {
      name: 'Rohan D.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Smooth and reliable',
      body: 'OxygenOS is clean and quick. Camera is fine for social media, not the best at night.',
      verified: true,
      helpful: 13,
      variant: 'Marble Mist',
    },
    {
      name: 'Khalid S.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good mid-ranger',
      body: 'Works perfectly on UAE 5G. Charging is fast. Wish it came with a case.',
      verified: true,
      helpful: 7,
    },
  ],
  aiSummary: [
    'Battery life is the most praised feature, often lasting beyond a day',
    'OxygenOS is described as smooth and clean',
    'Night photos are considered average by some buyers',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(263)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(350)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
