import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Xiaomi Redmi Note 15 4G 8GB RAM 256GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The Xiaomi Redmi Note 15 4G offers 8GB of RAM and 256GB of storage for a smooth everyday experience at an accessible price. It suits calls, messaging, social media and streaming over 4G networks. This Global Version comes in Black with dual SIM support.',
  featureBullets: [
    '8GB RAM for smooth everyday use',
    '256GB internal storage for apps, photos and videos',
    '4G LTE dual SIM connectivity',
    'Large display for videos and browsing',
    'Classic Black finish, Global Version',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'Xiaomi'],
    ['Model Name', 'Redmi Note 15'],
    ['Colour', 'Black'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '4G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Everyday performer',
      description: '8GB RAM keeps social, streaming and messaging apps running smoothly.',
    },
    { title: 'Big storage', description: '256GB is generous for the price.' },
    { title: 'Simple and reliable', description: 'A clean black design that suits any user.' },
    {
      title: 'Keep in mind',
      description: 'This model is 4G only; choose the 5G Redmi Note 15 models if you want 5G.',
    },
  ],
  reviews: [
    {
      name: 'Ahmed F.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Great for the money',
      body: 'Smooth, big storage and the battery lasts all day. Delivered next day.',
      verified: true,
      helpful: 29,
      variant: 'Black',
    },
    {
      name: 'Joy C.',
      rating: 4,
      ago: '1 month ago',
      title: 'Does the job well',
      body: 'Bought as a work phone. Calls are clear and WhatsApp runs without lag.',
      verified: true,
      helpful: 16,
      variant: 'Black',
    },
    {
      name: 'Khalid M.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good, no 5G though',
      body: 'Very good phone overall, I just wish it had 5G. Camera fine for daily photos.',
      verified: true,
      helpful: 10,
    },
  ],
  aiSummary: [
    'Buyers call it great value with generous storage.',
    'Battery life and smooth daily use are praised.',
    'Some note the lack of 5G.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(200)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(267)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
