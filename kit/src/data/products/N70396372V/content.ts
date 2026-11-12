import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** TECNO POVA 8 5G 256GB Graphite Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The TECNO POVA 8 5G continues the performance-focused POVA line with 8GB of RAM, 256GB of storage and 5G connectivity. The Graphite Black finish keeps it understated, and dual SIM support lets you carry two numbers. This is the global version.',
  featureBullets: [
    '5G connectivity',
    '8GB RAM for gaming and multitasking',
    '256GB internal storage',
    'Dual SIM support',
    'Graphite Black finish',
    'Global version',
  ],
  highlights: ['256GB', '8GB RAM', '5G'],
  specs: [
    ['Brand', 'TECNO'],
    ['Model Name', 'POVA 8 5G'],
    ['Colour Name', 'Graphite Black'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Performance line', description: 'POVA phones are tuned for gaming and long sessions on a budget.' },
    { title: 'Ready for 5G', description: 'Faster downloads and smoother online play on 5G networks.' },
    { title: 'Room for games', description: '256GB of storage keeps several large games installed at once.' },
    { title: 'Keep in mind', description: 'This is the global version; the plug and box contents may differ from the Middle East version.' },
  ],
  reviews: [
    {
      name: 'Adil R.',
      rating: 5,
      ago: '3 days ago',
      title: 'Excellent for gaming',
      body: 'Games run smoothly and it stays responsive. Delivered the next morning in a sealed box.',
      verified: true,
      helpful: 2,
      variant: 'Graphite Black',
    },
    {
      name: 'Chris W.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Great phone, great price',
      body: 'Fast, plenty of storage and the black finish looks sharp. 5G works perfectly on my plan.',
      verified: true,
      helpful: 1,
    },
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(350)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(467)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  fbt: ['N70396372V', 'p11'],
});
