import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Nothing Phone (4b) 128GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Nothing Phone (4b) brings Nothing\'s distinctive design and clean Nothing OS to a more affordable price point. This Middle East version in Black has 8GB of RAM, 128GB of storage, dual SIM and 5G.',
  featureBullets: [
    'Nothing\'s distinctive design in Black',
    '8GB RAM with 128GB internal storage',
    'Clean Nothing OS on Android',
    'Dual SIM with 5G connectivity',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['128GB', '8GB RAM'],
  specs: [
    ['Brand', 'Nothing'],
    ['Model Name', 'Phone (4b)'],
    ['Colour Name', 'Black'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android (Nothing OS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Design for less', description: 'Nothing\'s recognisable look at a more accessible price.' },
    { title: 'Clean software', description: 'Nothing OS keeps things simple with few extra apps.' },
    { title: 'Keep in mind', description: '128GB fills up quickly if you shoot a lot of video; consider cloud backup.' },
  ],
  reviews: [
    {
      name: 'Layla D.',
      rating: 5,
      ago: '1 week ago',
      title: 'Stylish and smooth',
      body: 'Looks premium and the software is really clean. Arrived next day in perfect condition.',
      verified: true,
      helpful: 12,
      variant: 'Black',
    },
    {
      name: 'Rahul M.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Great value',
      body: 'Fast enough for everything I do and the battery lasts all day.',
      verified: true,
      helpful: 8,
      variant: 'Black',
    },
    {
      name: 'George B.',
      rating: 4,
      ago: '1 month ago',
      title: 'Nice phone',
      body: 'Very good overall, though 128GB is a bit tight for my photos.',
      verified: true,
      helpful: 4,
    },
  ],
  aiSummary: [
    'Customers praise the premium look and clean software',
    'Battery life and everyday speed are described as good',
    'Some find 128GB of storage limiting',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(375)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(500)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
