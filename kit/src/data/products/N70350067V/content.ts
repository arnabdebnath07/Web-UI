import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Honor 600 Pro 512GB Orange: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Honor 600 Pro is the Pro model of Honor\'s number series, aimed at people who want flagship-style cameras and design without paying for the Magic line. This Middle East version in Orange has 12GB of RAM, 512GB of storage, dual SIM and 5G.',
  featureBullets: [
    'Bold Orange finish',
    '12GB RAM with 512GB internal storage',
    'Camera-focused Pro model of the Honor number series',
    'Dual SIM with 5G connectivity',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['512GB', '12GB RAM'],
  specs: [
    ['Brand', 'Honor'],
    ['Model Name', '600 Pro'],
    ['Colour Name', 'Orange'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android (MagicOS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Stand-out colour', description: 'The Orange finish makes it easy to spot and adds personality.' },
    { title: 'Plenty of room', description: '512GB of storage with 12GB RAM covers years of photos, videos and apps.' },
    { title: 'Local version', description: 'The Middle East version comes with brand warranty and Arabic support out of the box.' },
    { title: 'Keep in mind', description: 'Storage is not expandable, so the 512GB you buy is what you get.' },
  ],
  reviews: [
    {
      name: 'Aisha N.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Gorgeous orange',
      body: 'The colour is stunning and the portrait photos are really good. Delivered next day.',
      verified: true,
      helpful: 42,
      variant: 'Orange',
    },
    {
      name: 'Sanjay K.',
      rating: 4,
      ago: '1 month ago',
      title: 'Solid phone',
      body: 'Fast, good battery and lots of storage. A few preinstalled apps to clean up.',
      verified: true,
      helpful: 23,
      variant: 'Orange',
    },
    {
      name: 'Noura F.',
      rating: 5,
      ago: '1 month ago',
      title: 'Great camera',
      body: 'Photos of my kids come out sharp and natural. Screen is bright and smooth.',
      verified: true,
      helpful: 15,
    },
    {
      name: 'Peter L.',
      rating: 4,
      ago: '2 months ago',
      title: 'Good value',
      body: 'Premium feel for the price. Charging is quick. Comes in a well protected box.',
      verified: false,
      helpful: 6,
    },
  ],
  aiSummary: [
    'Customers love the Orange colour and the portrait photos',
    'Performance, battery and storage are described as strong',
    'A few mention preinstalled apps they removed',
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
    { title: 'Extra 10% off', code: 'CODE: HONOR10' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(662)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(882)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70350067V', 'home-maynos-mount'],
});
