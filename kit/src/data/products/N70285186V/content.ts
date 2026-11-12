import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Honor Magic8 Pro 512GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Honor Magic8 Pro is Honor\'s latest Pro flagship in the Magic series, focused on cameras, display and AI features in MagicOS. This international version in Black has 12GB of RAM, 512GB of storage, dual SIM and 5G connectivity.',
  featureBullets: [
    'Honor\'s Magic series Pro flagship',
    '12GB RAM with 512GB internal storage',
    'Advanced multi-camera system',
    'AI features in MagicOS',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['512GB', '12GB RAM', '5G'],
  specs: [
    ['Brand', 'Honor'],
    ['Model Name', 'Magic8 Pro'],
    ['Colour Name', 'Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android (MagicOS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Flagship experience', description: 'A top-of-the-line Honor phone built for photography, display quality and speed.' },
    { title: 'Lots of storage', description: '512GB with 12GB RAM handles large photo libraries and heavy multitasking.' },
    { title: 'Keep in mind', description: 'This is the international version, so warranty is provided by the seller rather than the brand in the UAE.' },
  ],
  reviews: [
    {
      name: 'Ali H.',
      rating: 5,
      ago: '1 week ago',
      title: 'Excellent flagship',
      body: 'Camera and screen are superb and it feels very premium. Delivered next day, sealed box.',
      verified: true,
      helpful: 3,
      variant: 'Black',
    },
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(825)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1100)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70285186V', 'p11'],
});
