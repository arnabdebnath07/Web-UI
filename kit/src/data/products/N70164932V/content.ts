import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** motorola Edge 60 Fusion 256GB Pantone Amazonite: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The motorola Edge 60 Fusion pairs a curved display and a Pantone-validated finish with dependable mid-range performance. This Middle East version in Pantone Amazonite (blue) has 12GB of RAM, 256GB of storage, dual SIM and 5G. It is a stylish everyday phone at a sensible price.',
  featureBullets: [
    'Pantone Amazonite (blue) finish',
    '12GB RAM with 256GB internal storage',
    'MediaTek Dimensity 7400 processor',
    'Dual SIM with 5G connectivity',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'motorola'],
    ['Model Name', 'Edge 60 Fusion'],
    ['Colour Name', 'Pantone Amazonite'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Processor', 'MediaTek Dimensity 7400'],
    ['Operating System', 'Android'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Design that stands out', description: 'A Pantone-validated Amazonite finish and a curved screen give it a premium look for the price.' },
    { title: 'Smooth everyday use', description: 'The Dimensity 7400 with 12GB RAM keeps social apps, streaming and light gaming fluid.' },
    { title: 'Plenty of space', description: '256GB of storage holds a large photo and video library.' },
    { title: 'Keep in mind', description: 'It is a mid-range phone, so demanding games run best at medium settings.' },
  ],
  reviews: [
    {
      name: 'Fatima H.',
      rating: 5,
      ago: '1 week ago',
      title: 'Beautiful colour',
      body: 'The Amazonite blue looks even better in person and the back feels soft. Delivered next day in Dubai.',
      verified: true,
      helpful: 34,
      variant: 'Pantone Amazonite',
    },
    {
      name: 'Arjun P.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Good phone for the money',
      body: 'Smooth for daily use and the battery gets me through the day. The curved edges cause the odd accidental touch.',
      verified: true,
      helpful: 18,
      variant: 'Pantone Amazonite',
    },
    {
      name: 'Lina R.',
      rating: 4,
      ago: '1 month ago',
      title: 'Clean software',
      body: 'Very little bloatware and the screen is bright. Camera is good in daylight, average at night.',
      verified: true,
      helpful: 11,
    },
  ],
  aiSummary: [
    'Customers love the Pantone Amazonite colour and the soft-touch back',
    'Daily performance and battery life are described as reliable',
    'Some note average low-light photos and occasional touches on the curved edges',
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
    { title: 'Extra 10% off', code: 'CODE: MOTO10' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(225)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(300)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70164932V', 'home-maynos-mount'],
});
