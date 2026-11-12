import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** motorola Edge 70 Max 256GB Pantone Dark Shadow: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The motorola Edge 70 Max is a large-screen Edge phone with a Pantone-validated finish. This Middle East version in Pantone Dark Shadow has 8GB of RAM, 256GB of storage, dual SIM and 5G, made for streaming, browsing and gaming on a big display.',
  featureBullets: [
    'Pantone Dark Shadow finish',
    'Large display for media and gaming',
    '8GB RAM with 256GB internal storage',
    'Dual SIM with 5G connectivity',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'motorola'],
    ['Model Name', 'Edge 70 Max'],
    ['Colour Name', 'Pantone Dark Shadow'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Big screen', description: 'A large display makes video, reading and games more immersive.' },
    { title: 'Understated look', description: 'The Pantone Dark Shadow finish is subtle and elegant.' },
    { title: 'Keep in mind', description: 'A larger phone is harder to use one-handed; try a grip or stand if that matters to you.' },
  ],
  reviews: [
    {
      name: 'Zainab H.',
      rating: 5,
      ago: '1 week ago',
      title: 'Love the big screen',
      body: 'Perfect for watching series on the go. Dark Shadow colour looks very elegant.',
      verified: true,
      helpful: 3,
      variant: 'Pantone Dark Shadow',
    },
    {
      name: 'Chris D.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Great media phone',
      body: 'Big, bright display and good speakers. A bit large for one-handed use.',
      verified: true,
      helpful: 2,
      variant: 'Pantone Dark Shadow',
    },
    {
      name: 'Waleed J.',
      rating: 5,
      ago: '1 month ago',
      title: 'Smooth and stylish',
      body: 'Fast delivery and works great on 5G in Sharjah.',
      verified: true,
      helpful: 1,
    },
  ],
  aiSummary: [
    'Buyers enjoy the large display for video and gaming',
    'The Dark Shadow finish is described as elegant',
    'Some find it too big for comfortable one-handed use',
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
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(500)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(667)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70397162V', 'home-maynos-mount'],
});
