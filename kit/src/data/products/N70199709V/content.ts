import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Xiaomi Redmi 15 5G 8GB RAM 256GB Ripple Green: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The Xiaomi Redmi 15 5G pairs 5G connectivity with 8GB of RAM and 256GB of storage for everyday apps, streaming and photos. It has a large display and a high-capacity battery built for long days away from the charger. This Global Version comes in Ripple Green with dual SIM support.',
  featureBullets: [
    '5G connectivity for fast downloads and streaming',
    '8GB RAM for smooth everyday multitasking',
    '256GB internal storage for apps, photos and videos',
    'Large display for videos, browsing and games',
    'High-capacity battery for long days of use',
    'Dual SIM, Global Version in Ripple Green',
  ],
  highlights: ['256GB', '8GB RAM', '5G'],
  specs: [
    ['Brand', 'Xiaomi'],
    ['Model Name', 'Redmi 15 5G'],
    ['Colour', 'Ripple Green'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Affordable 5G', description: '5G speeds and 8GB RAM at an entry-level price.' },
    {
      title: 'Room to spare',
      description: '256GB of storage leaves space for a large photo and app library.',
    },
    {
      title: 'Built for long days',
      description: 'A big battery and large screen suit streaming and social media.',
    },
    {
      title: 'Keep in mind',
      description: 'This is the Global Version; check that the charger in the box suits your needs before ordering.',
    },
  ],
  reviews: [
    {
      name: 'Aisha R.',
      rating: 5,
      ago: '1 week ago',
      title: 'Battery lasts ages',
      body: 'I charge it every second day with normal use. The green colour is lovely and the screen is big and bright.',
      verified: true,
      helpful: 63,
      variant: 'Ripple Green',
    },
    {
      name: 'Mohammed T.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Good phone for the price',
      body: 'Fast enough for WhatsApp, YouTube and banking apps. 5G works well in Dubai. Camera is decent in good light.',
      verified: true,
      helpful: 38,
      variant: 'Ripple Green',
    },
    {
      name: 'Ken L.',
      rating: 4,
      ago: '1 month ago',
      title: 'Solid daily driver',
      body: 'Arrived the next day, well packed. Plenty of storage. Gaming is fine on medium settings.',
      verified: true,
      helpful: 21,
    },
    {
      name: 'Fatima H.',
      rating: 4,
      ago: '2 months ago',
      title: 'Happy with it',
      body: 'Bought it for my mother, she finds it easy to use and the screen size is perfect for her.',
      verified: true,
      helpful: 12,
    },
  ],
  aiSummary: [
    'Battery life is the most praised feature.',
    'Buyers find it good value for 5G and 256GB storage.',
    'The camera is described as decent in daylight, average in low light.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(238)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(317)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70199709V', 'home-maynos-mount'],
});
