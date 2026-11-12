import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** realme C100i 4G 4GB RAM 128GB Dawn Purple: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The realme C100i 4G is an affordable everyday smartphone with 4GB of RAM and 128GB of storage for calls, messaging, social media and videos. It is part of realme\'s value-focused C series. This Middle East Version comes in Dawn Purple with dual SIM support.',
  featureBullets: [
    'realme C series, value-focused',
    '4GB RAM for everyday apps',
    '128GB internal storage',
    '4G dual SIM connectivity',
    'Dawn Purple finish, Middle East Version',
  ],
  highlights: ['128GB', '4GB RAM'],
  specs: [
    ['Brand', 'realme'],
    ['Model Name', 'C100i'],
    ['Colour', 'Dawn Purple'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '4G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Value pick', description: 'A low price for 128GB storage and a fresh design.' },
    { title: 'Everyday ready', description: 'Handles calls, chats, social media and video.' },
    { title: 'Fun colour', description: 'Dawn Purple stands out from typical budget phones.' },
    {
      title: 'Keep in mind',
      description: 'This model is 4G only and best for everyday use rather than heavy gaming.',
    },
  ],
  reviews: [
    {
      name: 'Jasmine L.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Love the purple',
      body: 'Pretty colour and works smoothly for my daily apps. Arrived the next day.',
      verified: true,
      helpful: 22,
      variant: 'Dawn Purple',
    },
    {
      name: 'Rashid K.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good budget phone',
      body: 'Plenty of storage for the price and the battery lasts all day.',
      verified: true,
      helpful: 14,
      variant: 'Dawn Purple',
    },
    {
      name: 'Elena M.',
      rating: 4,
      ago: '1 month ago',
      title: 'Does what I need',
      body: 'Fine for WhatsApp, Instagram and calls. Camera is average indoors.',
      verified: true,
      helpful: 9,
    },
    {
      name: 'Usman G.',
      rating: 3,
      ago: '2 months ago',
      title: 'Okay for basics',
      body: 'Good value, but games lag a bit. For everyday use it is fine.',
      verified: true,
      helpful: 4,
    },
  ],
  aiSummary: [
    'Buyers like the Dawn Purple colour and storage for the price.',
    'Battery life is good for everyday use.',
    'Games and indoor photos are seen as average.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(133)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(177)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
