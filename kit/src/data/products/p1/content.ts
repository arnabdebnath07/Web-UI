import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** AirPods Pro (2nd generation) with MagSafe Charging Case (USB-C): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'AirPods Pro (2nd generation) pair Active Noise Cancellation with Adaptive Audio, which blends noise cancellation and Transparency mode to suit your surroundings. The MagSafe Charging Case charges over USB-C, with a MagSafe charger or on a Qi-certified pad. Silicone ear tips in several sizes help you get a comfortable, secure fit.',
  featureBullets: [
    'Active Noise Cancellation and Transparency mode',
    'Adaptive Audio adjusts noise control to your environment',
    'Personalised Spatial Audio with dynamic head tracking',
    'MagSafe Charging Case with USB-C charging',
    'Touch control for playback and volume',
    'Sweat and water resistant earbuds and case',
  ],
  highlights: ['Active Noise Cancellation', 'USB-C case'],
  specs: [
    ['Brand', 'Apple'],
    ['Model Name', 'AirPods Pro (2nd generation)'],
    ['Colour', 'White'],
    ['Form Factor', 'In-Ear'],
    ['Connectivity', 'Wireless'],
    ['Noise Cancellation', 'Active Noise Cancellation'],
    ['Charging Case', 'MagSafe Charging Case (USB-C)'],
    ['Charging Type', 'Type-C'],
    ['Wireless Charging', 'Yes'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Noise control', description: 'Active Noise Cancellation, Transparency and Adaptive Audio cover commutes, offices and flights.' },
    { title: 'Seamless with Apple devices', description: 'Quick pairing and automatic switching across an iPhone, iPad and Mac signed in to the same Apple Account.' },
    { title: 'Flexible charging', description: 'The case charges over USB-C, with MagSafe or on a Qi-certified wireless pad.' },
    { title: 'Keep in mind', description: 'A USB-C cable is in the box but no power adapter, and many features need a recent iPhone.' },
  ],
  reviews: [
    {
      name: 'Faisal K.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Noise cancellation is excellent',
      body: 'I use them on the metro every day and the noise cancellation makes a real difference. Delivered the next morning, sealed box, and they paired with my iPhone instantly.',
      verified: true,
      helpful: 142,
    },
    {
      name: 'Priya S.',
      rating: 5,
      ago: '1 month ago',
      title: 'Great upgrade with USB-C',
      body: 'Finally the same cable as my phone and laptop. Adaptive Audio works well when I walk between the office and the street.',
      verified: true,
      helpful: 87,
    },
    {
      name: 'Omar H.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Very good, fit took some time',
      body: 'Sound and battery are very good. I had to switch to the smaller ear tips to get a good seal, after that they are comfortable for hours.',
      verified: true,
      helpful: 39,
    },
  ],
  aiSummary: [
    'Buyers praise the strong noise cancellation, especially for commuting and travel.',
    'Many like the USB-C case and the quick pairing with their iPhone.',
    'A few needed to try different ear tip sizes before the fit felt right.',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 48210,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  officialStore: true,
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: AUDIO10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(200)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(267)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  fbt: ['p1', 'p11'],
});
