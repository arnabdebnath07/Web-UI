import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Infinix Note 60 Pro 5G 256GB Solar Orange: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Infinix Note 60 Pro steps up the Note line with 5G, 8GB of RAM and 256GB of storage in a bold Solar Orange finish. It is built for people who stream, browse and multitask all day on a large screen. Dual SIM support and the Middle East version make it ready for use in the UAE.',
  featureBullets: [
    '5G connectivity',
    '8GB RAM for smooth multitasking',
    '256GB internal storage',
    'Dual SIM support',
    'Solar Orange finish',
    'Middle East version',
  ],
  highlights: ['256GB', '8GB RAM', '5G'],
  specs: [
    ['Brand', 'Infinix'],
    ['Model Name', 'Note 60 Pro'],
    ['Colour Name', 'Solar Orange'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Pro step-up', description: 'The Pro model of the Note 60 line, with 5G and a premium-feeling build.' },
    { title: 'Big-screen multitasking', description: '8GB of RAM keeps streaming, chat and browsing open together.' },
    { title: 'Bold colour', description: 'Solar Orange gives the phone a distinctive, bright look.' },
    { title: 'Keep in mind', description: 'Middle East version: check the box contents and use a compatible fast charger.' },
  ],
  reviews: [
    {
      name: 'Yousef A.',
      rating: 5,
      ago: '6 days ago',
      title: 'Looks amazing in orange',
      body: 'Everyone asks about the colour. Fast on 5G and arrived the next day, well packed.',
      verified: true,
      helpful: 11,
      variant: 'Solar Orange',
    },
    {
      name: 'Rhea C.',
      rating: 4,
      ago: '2 weeks ago',
      title: 'Smooth and good battery',
      body: 'Daily use is smooth and the battery lasts into the next morning with light use.',
      verified: true,
      helpful: 6,
    },
    {
      name: 'Tariq N.',
      rating: 4,
      ago: '1 month ago',
      title: 'Nice upgrade',
      body: 'Upgraded from an older Note. Screen is excellent for videos; camera is good but not flagship level.',
      verified: true,
      helpful: 4,
    },
    {
      name: 'Samira K.',
      rating: 4,
      ago: '2 months ago',
      title: 'Good value Pro phone',
      body: 'Plenty of storage and fast enough for everything I do. Wish it came in more colours.',
      verified: false,
      helpful: 1,
    },
  ],
  aiSummary: [
    'The Solar Orange design draws a lot of positive comments.',
    'Buyers report smooth daily performance and solid battery life.',
    'The screen is praised for video; the camera is good rather than flagship level.',
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
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: NOTE10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(350)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(467)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'offer', title: 'Lowest price in 7 days' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  fbt: ['N70370255V', 'p11', 'home-maynos-mount'],
});
