import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** realme GT6 12GB RAM 256GB Fluid Silver: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The realme GT6 is a performance-focused 5G smartphone powered by the Snapdragon 8s Gen 3 chipset, with 12GB of RAM plus up to 12GB of dynamic virtual RAM and 256GB of storage. A 5500 mAh battery with 120W SUPERVOOC fast charging keeps up with heavy gaming and streaming. This Middle East Version comes in Fluid Silver with dual SIM support.',
  featureBullets: [
    'Snapdragon 8s Gen 3 chipset for flagship-level speed and gaming',
    '12GB RAM with up to 12GB extra dynamic RAM for smooth multitasking',
    '256GB internal storage for apps, photos and 4K video',
    '5500 mAh battery with 120W SUPERVOOC fast charging',
    '5G dual SIM connectivity, Middle East Version',
  ],
  highlights: ['256GB', '12GB RAM', '120W charging'],
  specs: [
    ['Brand', 'realme'],
    ['Model Name', 'GT6'],
    ['Colour', 'Fluid Silver'],
    ['RAM Size', '12 GB'],
    ['Extended RAM', 'Up to 12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Processor', 'Snapdragon 8s Gen 3'],
    ['Battery Size', '5500 mAh'],
    ['Fast Charging', 'Yes, 120W SUPERVOOC'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    {
      title: 'Flagship performance',
      description: 'The Snapdragon 8s Gen 3 and 12GB RAM handle demanding games and heavy multitasking with ease.',
    },
    {
      title: 'All-day battery, fast top-ups',
      description: 'A 5500 mAh battery with 120W SUPERVOOC charging means short charging breaks.',
    },
    {
      title: 'Plenty of storage',
      description: '256GB holds a large library of apps, photos and videos without a memory card.',
    },
    {
      title: 'Keep in mind',
      description: 'The 12+12GB figure is 12GB physical RAM plus virtual RAM taken from storage, not 24GB of physical memory.',
    },
  ],
  reviews: [
    {
      name: 'Omar K.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Fast in every game I tried',
      body: 'Runs heavy games at high settings without getting too warm. Charging from low to full takes well under an hour. Delivered next day in a sealed box.',
      verified: true,
      helpful: 41,
      variant: 'Fluid Silver',
    },
    {
      name: 'Priya S.',
      rating: 5,
      ago: '1 month ago',
      title: 'Great value flagship',
      body: 'Smooth screen, quick camera and the battery easily lasts my whole day. The silver finish looks premium in person.',
      verified: true,
      helpful: 27,
      variant: 'Fluid Silver',
    },
    {
      name: 'Hassan A.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Excellent, minor software niggles',
      body: 'Performance and charging are excellent. A few preinstalled apps I had to remove, otherwise very happy.',
      verified: true,
      helpful: 15,
      variant: 'Fluid Silver',
    },
    {
      name: 'Daniel M.',
      rating: 4,
      ago: '2 months ago',
      title: 'Strong battery life',
      body: 'Gets me through a full workday with heavy use. Camera is good in daylight, a little softer at night.',
      verified: true,
      helpful: 9,
    },
  ],
  aiSummary: [
    'Buyers praise the fast performance in games and everyday use.',
    'Battery life and the very quick charging are frequently highlighted.',
    'A few mention preinstalled apps and average night photos.',
  ],
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: GT6TEN' }],
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(438)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(584)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70085256V', 'p11', 'home-maynos-mount'],
});
