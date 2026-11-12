import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** motorola Edge 70 Pro 512GB Pantone Chicory Coffee: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The motorola Edge 70 Pro is a premium Edge phone with a Pantone-validated finish and 5.5G network support. This Middle East version in Pantone Chicory Coffee has 12GB of RAM and 512GB of storage with dual SIM, and comes bundled with 1 year of screen damage protection.',
  featureBullets: [
    'Includes 1 year of screen damage protection',
    'Pantone Chicory Coffee finish',
    '12GB RAM with 512GB internal storage',
    'Dual SIM with 5.5G network support',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['512GB', '12GB RAM', '5.5G'],
  specs: [
    ['Brand', 'motorola'],
    ['Model Name', 'Edge 70 Pro'],
    ['Colour Name', 'Pantone Chicory Coffee'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5.5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android'],
    ['In the Box Extras', '1 Year Screen Damage Protection'],
  ],
  aiOverview: [
    { title: 'Protected from day one', description: 'The bundled 1 year screen damage protection covers accidental screen breaks.' },
    { title: 'Premium Edge design', description: 'A Pantone Chicory Coffee finish gives it a warm, distinctive look.' },
    { title: 'Room and speed', description: '12GB RAM and 512GB of storage handle heavy use and big media libraries.' },
    { title: 'Keep in mind', description: 'Screen protection terms apply; keep your invoice and register the plan to claim.' },
  ],
  reviews: [
    {
      name: 'Hessa M.',
      rating: 5,
      ago: '1 week ago',
      title: 'Beautiful and fast',
      body: 'The Chicory Coffee colour is classy and the phone is very quick. Screen protection gives peace of mind.',
      verified: true,
      helpful: 4,
      variant: 'Pantone Chicory Coffee',
    },
    {
      name: 'Nikhil S.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Excellent',
      body: 'Great display and battery. Delivered next day with everything sealed.',
      verified: true,
      helpful: 2,
      variant: 'Pantone Chicory Coffee',
    },
    {
      name: 'Ben O.',
      rating: 4,
      ago: '1 month ago',
      title: 'Very good phone',
      body: 'Premium feel and smooth software. Took a moment to activate the protection plan.',
      verified: true,
      helpful: 1,
    },
  ],
  aiSummary: [
    'Reviewers like the Chicory Coffee finish and the premium feel',
    'The bundled screen protection is valued for peace of mind',
    'One buyer found activating the protection plan took some effort',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(625)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(833)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70396290V', 'p11'],
});
