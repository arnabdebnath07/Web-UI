import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Honor Magic7 Pro 512GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Honor Magic7 Pro is Honor\'s camera-focused flagship, powered by the Snapdragon 8 Elite chip and running MagicOS on Android. This Middle East version comes in Black with 12GB of RAM and 512GB of storage, dual SIM support and 5G connectivity. A periscope telephoto camera and a large curved display make it a strong pick for photography and media.',
  featureBullets: [
    'Snapdragon 8 Elite chip for flagship performance',
    '12GB RAM with 512GB internal storage',
    'Multi-camera system with a periscope telephoto lens',
    'Dual SIM with 5G connectivity',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['512GB', '12GB RAM', '5G'],
  specs: [
    ['Brand', 'Honor'],
    ['Model Name', 'Magic7 Pro'],
    ['Colour Name', 'Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Processor', 'Snapdragon 8 Elite'],
    ['Operating System', 'Android'],
    ['Memory Type', 'No Expandable Memory'],
  ],
  aiOverview: [
    { title: 'Flagship performance', description: 'The Snapdragon 8 Elite chip with 12GB RAM handles gaming, multitasking and on-device AI features with ease.' },
    { title: 'Built for photography', description: 'A periscope telephoto camera adds long-range zoom alongside the main and ultra-wide cameras.' },
    { title: 'Room for everything', description: '512GB of storage leaves plenty of space for 4K video, photos and apps.' },
    { title: 'Keep in mind', description: 'Storage is not expandable, so choose the capacity you need up front.' },
  ],
  reviews: [
    {
      name: 'Rashid A.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Zoom camera is excellent',
      body: 'The telephoto shots at long range are sharp and usable, even in the evening. Arrived the next day, sealed with the Middle East box.',
      verified: true,
      helpful: 21,
      variant: 'Black',
    },
    {
      name: 'Priya S.',
      rating: 4,
      ago: '1 month ago',
      title: 'Fast and smooth',
      body: 'Very quick for games and switching between apps. It is a heavy phone, so it took me a few days to get used to it.',
      verified: true,
      helpful: 12,
      variant: 'Black',
    },
    {
      name: 'Omar K.',
      rating: 5,
      ago: '2 months ago',
      title: 'Great value flagship',
      body: 'Battery easily lasts a full day of heavy use. Display is bright outdoors in the UAE sun.',
      verified: true,
      helpful: 9,
    },
    {
      name: 'Julia M.',
      rating: 4,
      ago: '2 months ago',
      title: 'Very good, some bloat',
      body: 'Camera and screen are top class. A few preinstalled apps I had to remove, otherwise very happy.',
      verified: false,
      helpful: 4,
    },
  ],
  aiSummary: [
    'Buyers praise the telephoto camera and its long-range zoom quality',
    'Performance is described as fast and smooth for gaming and multitasking',
    'Some mention the phone feels heavy and comes with preinstalled apps',
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
    { title: 'Extra 10% off', code: 'CODE: MAGIC10' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(710)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(947)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70137875V', 'p11', 'home-maynos-mount'],
});
