import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** vivo Y21 AI 5G 4GB RAM 128GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The vivo Y21 AI 5G is an affordable 5G smartphone with AI features, 4GB of RAM and 128GB of storage. It suits everyday calls, chats, social media and streaming. This Middle East Version comes in Black with dual SIM support.',
  featureBullets: [
    'AI features for everyday tasks',
    '5G dual SIM connectivity',
    '4GB RAM for everyday apps',
    '128GB internal storage',
    'Black finish, Middle East Version',
  ],
  highlights: ['128GB', '4GB RAM', '5G'],
  specs: [
    ['Brand', 'vivo'],
    ['Model Name', 'Y21 AI 5G'],
    ['Colour', 'Black'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Affordable 5G', description: '5G connectivity at a budget-friendly price.' },
    { title: 'AI helpers', description: 'Built-in AI tools for photos and everyday tasks.' },
    { title: 'Everyday storage', description: '128GB covers photos, chats and apps.' },
    {
      title: 'Keep in mind',
      description: 'With 4GB RAM it is best for everyday use rather than heavy gaming.',
    },
  ],
  reviews: [
    {
      name: 'Amna Y.',
      rating: 5,
      ago: '1 week ago',
      title: 'Good 5G phone for the price',
      body: 'Smooth for daily use and 5G is fast. Delivered the next day.',
      verified: true,
      helpful: 16,
      variant: 'Black',
    },
    {
      name: 'George K.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Reliable',
      body: 'Battery lasts all day and calls are clear. Camera is fine for social media.',
      verified: true,
      helpful: 10,
      variant: 'Black',
    },
    {
      name: 'Salman D.',
      rating: 4,
      ago: '1 month ago',
      title: 'Happy with it',
      body: 'Bought for my wife, she finds it simple to use. Good storage for photos.',
      verified: true,
      helpful: 6,
    },
  ],
  aiSummary: [
    'Buyers call it good value for a 5G phone.',
    'Battery life and call quality are praised.',
    'The camera is seen as fine for everyday photos.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(163)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(217)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
