import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Infinix Note 60 5G 256GB Rose Gold: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Infinix Note 60 5G is a big-screen Android phone in Rose Gold with 8GB of RAM and 256GB of storage. 5G support means quicker downloads and smoother streaming, and dual SIM lets you keep two numbers on one device. A practical choice for media, browsing and everyday multitasking.',
  featureBullets: [
    '5G connectivity',
    '8GB RAM for smooth everyday multitasking',
    '256GB storage for apps, photos and videos',
    'Dual SIM support',
    'Rose Gold finish',
  ],
  highlights: ['256GB', '8GB RAM', '5G'],
  specs: [
    ['Brand', 'Infinix'],
    ['Model Name', 'Note 60 5G'],
    ['Colour Name', 'Rose Gold'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Made for media', description: 'A large display suited to videos, browsing and reading.' },
    { title: 'Fast connection', description: '5G support for quicker downloads where your network offers it.' },
    { title: 'Ample storage', description: '256GB holds a big library of apps, photos and offline videos.' },
    { title: 'Keep in mind', description: 'Check that your SIM plan includes 5G to get the faster speeds.' },
  ],
  reviews: [
    {
      name: 'Layla M.',
      rating: 5,
      ago: '4 days ago',
      title: 'Beautiful colour',
      body: 'The rose gold is elegant and the screen is big and bright. Arrived the next day in Sharjah.',
      verified: true,
      helpful: 6,
      variant: 'Rose Gold',
    },
    {
      name: 'Sanjay V.',
      rating: 4,
      ago: '2 weeks ago',
      title: 'Smooth and roomy',
      body: 'Apps open quickly and 256GB is more than I need. Battery easily lasts a day.',
      verified: true,
      helpful: 4,
    },
    {
      name: 'Hassan T.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good 5G phone',
      body: 'Speeds on 5G are great. Camera is decent in daylight. Packaging was sealed and neat.',
      verified: true,
      helpful: 2,
    },
  ],
  aiSummary: [
    'Buyers like the Rose Gold finish and the large, bright screen.',
    'Everyday performance and storage are rated as good value.',
    '5G speeds are praised; the camera is described as solid in daylight.',
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(288)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(383)}</b>. No late fees. <a>Learn more</a>` },
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
    { icon: 'verified', text: 'TDRA approved' },
  ],
  fbt: ['N70345592V', 'p11', 'home-maynos-mount'],
});
