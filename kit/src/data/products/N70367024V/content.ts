import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** vivo X300 FE 5G 12GB RAM 256GB Black with lens kit and vivo TWS Air: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The vivo X300 FE 5G brings camera-focused X series photography to a more accessible model, with 12GB of RAM and 256GB of storage. This bundle includes an exclusive lens kit and vivo TWS Air earbuds, plus 24 months warranty and 1 year screen replacement. This Middle East Version comes in Black with dual SIM support.',
  featureBullets: [
    'vivo X series, built around photography',
    'Bundle includes an exclusive lens kit and vivo TWS Air earbuds',
    '24 months warranty plus 1 year screen replacement',
    '12GB RAM and 256GB internal storage',
    '5G dual SIM connectivity, Middle East Version',
  ],
  highlights: ['256GB', '12GB RAM', '24 months warranty'],
  specs: [
    ['Brand', 'vivo'],
    ['Model Name', 'X300 FE'],
    ['Colour', 'Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['In the Box', 'vivo X300 FE, exclusive lens kit, vivo TWS Air'],
    ['Warranty', '24 months warranty + 1 year screen replacement'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Camera-first',
      description: 'The X series is vivo\'s photography line, and the included lens kit extends it further.',
    },
    { title: 'Complete bundle', description: 'vivo TWS Air earbuds come in the box for music and calls.' },
    { title: 'Extra peace of mind', description: '24 months warranty plus 1 year screen replacement.' },
    {
      title: 'Keep in mind',
      description: 'Keep the invoice to claim the screen replacement; check the terms for what it covers.',
    },
  ],
  reviews: [
    {
      name: 'Hamad J.',
      rating: 5,
      ago: '1 week ago',
      title: 'Amazing camera bundle',
      body: 'Photos are stunning and the lens kit is fun to use. The earbuds are a great bonus.',
      verified: true,
      helpful: 28,
      variant: 'Black',
    },
    {
      name: 'Chloe T.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Worth it for the warranty',
      body: 'The 24 months warranty and screen cover sold me. Phone is fast and the camera is excellent.',
      verified: true,
      helpful: 19,
      variant: 'Black',
    },
    {
      name: 'Ravi S.',
      rating: 4,
      ago: '1 month ago',
      title: 'Excellent phone',
      body: 'Delivered next day, everything in one box. Camera is superb; the lens kit takes some practice.',
      verified: true,
      helpful: 11,
    },
  ],
  aiSummary: [
    'Camera quality is the most praised feature.',
    'Buyers value the lens kit, earbuds and extended warranty.',
    'Some find the lens kit takes practice to use well.',
  ],
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: VIVOX300' }],
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
    { icon: 'warranty', title: '24 months warranty' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '24 Months Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(785)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1047)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
