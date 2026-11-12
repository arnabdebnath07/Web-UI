import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Infinix Hot 60 Pro+ 256GB Misty Violet: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Infinix Hot 60 Pro+ pairs 8GB of RAM, extendable with 8GB of virtual memory, with 256GB of storage for apps, photos and games. Its slim Misty Violet body is easy to carry all day, and dual SIM support keeps a work and a personal number on one phone. This is the Middle East version, set up for use in the UAE.',
  featureBullets: [
    '8GB RAM plus 8GB virtual RAM for smooth multitasking',
    '256GB internal storage for apps, photos and videos',
    'Dual SIM for a personal and a work number',
    'Slim, lightweight design in Misty Violet',
    '4G network support',
    'Middle East version',
  ],
  highlights: ['256GB', '8+8GB RAM'],
  specs: [
    ['Brand', 'Infinix'],
    ['Model Name', 'Hot 60 Pro+'],
    ['Colour Name', 'Misty Violet'],
    ['RAM Size', '8 GB'],
    ['Extended RAM', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '4G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Room for everything', description: '256GB of storage holds a large photo library and plenty of apps without a memory card.' },
    { title: 'Smooth everyday use', description: '8GB of RAM, plus 8GB of virtual memory, keeps several apps open at once.' },
    { title: 'Slim and light', description: 'A thin Misty Violet body that sits comfortably in the hand and pocket.' },
    { title: 'Keep in mind', description: 'This is a 4G phone: it does not connect to 5G networks. The 8+8GB figure includes virtual RAM.' },
  ],
  reviews: [
    {
      name: 'Rashid A.',
      rating: 5,
      ago: '1 week ago',
      title: 'Very thin and looks premium',
      body: 'The violet colour looks even better in person. Delivered the next day in Dubai, well packed and sealed.',
      verified: true,
      helpful: 18,
      variant: 'Misty Violet',
    },
    {
      name: 'Maria S.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Great value for the storage',
      body: '256GB is plenty for my photos and WhatsApp media. Battery lasts me a full day of normal use.',
      verified: true,
      helpful: 9,
    },
    {
      name: 'Imran K.',
      rating: 4,
      ago: '1 month ago',
      title: 'Smooth for daily apps',
      body: 'Social media and banking apps run smoothly. Heavy games are fine on medium settings.',
      verified: true,
      helpful: 6,
    },
  ],
  aiSummary: [
    'Buyers like the slim design and the Misty Violet finish.',
    'The 256GB storage is called out as good value for the price.',
    'Performance is smooth for everyday apps; heavy gaming works best on medium settings.',
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
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: PHONE10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(220)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(294)}</b>. No late fees. <a>Learn more</a>` },
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
  fbt: ['N70204598V', 'home-maynos-mount'],
});
