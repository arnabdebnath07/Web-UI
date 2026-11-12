import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** TECNO POVA Slim 5G 256GB Cool Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The TECNO POVA Slim 5G puts 5G speeds into a thin, light body finished in Cool Black. With 8GB of RAM and 256GB of storage it handles social apps, streaming and casual gaming, and dual SIM support lets you run two numbers on one phone. This is the Middle East version.',
  featureBullets: [
    '5G connectivity for faster downloads and streaming',
    'Slim, lightweight design in Cool Black',
    '8GB RAM for smooth multitasking',
    '256GB internal storage',
    'Dual SIM support',
    'Middle East version',
  ],
  highlights: ['256GB', '8GB RAM', '5G'],
  specs: [
    ['Brand', 'TECNO'],
    ['Model Name', 'POVA Slim 5G'],
    ['Colour Name', 'Cool Black'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Built to be thin', description: 'A slim profile that is easy to hold one-handed and slips into any pocket.' },
    { title: '5G ready', description: 'Connects to 5G networks for quicker downloads and smoother streaming.' },
    { title: 'Plenty of space', description: '256GB of storage with 8GB of RAM for everyday multitasking.' },
    { title: 'Keep in mind', description: 'A thin body means a slimmer battery than chunkier phones; heavy users may want a power bank.' },
  ],
  reviews: [
    {
      name: 'Omar H.',
      rating: 5,
      ago: '5 days ago',
      title: 'So thin, still feels solid',
      body: 'Could not believe how slim it is. 5G works well on my line in Abu Dhabi and delivery came the next morning.',
      verified: true,
      helpful: 41,
      variant: 'Cool Black',
    },
    {
      name: 'Priya N.',
      rating: 4,
      ago: '2 weeks ago',
      title: 'Good phone for the price',
      body: 'Smooth for Instagram, YouTube and calls. Battery gets me to the evening with normal use.',
      verified: true,
      helpful: 22,
    },
    {
      name: 'Ahmed F.',
      rating: 4,
      ago: '1 month ago',
      title: 'Nice design, decent camera',
      body: 'Photos in daylight are sharp. Low light is average, but for this price I am happy.',
      verified: true,
      helpful: 13,
    },
    {
      name: 'Joseph M.',
      rating: 4,
      ago: '2 months ago',
      title: 'Light and fast',
      body: 'Switched from an older phone and the difference is big. Box was sealed and well packed.',
      verified: true,
      helpful: 7,
    },
  ],
  aiSummary: [
    'Reviewers are impressed by how slim and light the phone is.',
    '5G and everyday performance are described as smooth and reliable.',
    'Daylight photos are good; low-light shots are average for the price.',
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
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: SLIM10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(238)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(317)}</b>. No late fees. <a>Learn more</a>` },
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
    { icon: 'verified', text: 'TDRA approved' },
  ],
  fbt: ['N70219733V', 'p11', 'home-maynos-mount'],
});
