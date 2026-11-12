import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OPPO A6t 5G 6GB RAM 256GB Crystal Violet: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The OPPO A6t 5G offers 6GB of RAM, 256GB of storage and 5G connectivity in a stylish Crystal Violet finish. It is designed for everyday use with room for a large photo and app library. This Middle East Version supports dual SIM.',
  featureBullets: [
    '5G dual SIM connectivity',
    '6GB RAM for smooth everyday use',
    '256GB internal storage',
    'Crystal Violet finish',
    'Middle East Version',
  ],
  highlights: ['256GB', '6GB RAM', '5G'],
  specs: [
    ['Brand', 'OPPO'],
    ['Model Name', 'A6t 5G'],
    ['Colour', 'Crystal Violet'],
    ['RAM Size', '6 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Storage-first', description: '256GB gives lots of room for photos, videos and apps.' },
    { title: 'Smooth daily use', description: '6GB RAM handles social media, streaming and messaging.' },
    { title: 'Eye-catching colour', description: 'Crystal Violet stands out from the usual black and grey.' },
    { title: 'Keep in mind', description: 'A case is a good idea to keep the violet finish looking new.' },
  ],
  reviews: [
    {
      name: 'Mariam K.',
      rating: 5,
      ago: '1 week ago',
      title: 'Gorgeous colour',
      body: 'The violet shade is even nicer in person. Fast, light and the battery is great.',
      verified: true,
      helpful: 9,
      variant: 'Crystal Violet',
    },
    {
      name: 'Arjun N.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Very happy',
      body: 'Delivered the next day. Smooth for everything I use and lots of storage.',
      verified: true,
      helpful: 6,
      variant: 'Crystal Violet',
    },
    {
      name: 'Hiba S.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good phone',
      body: 'Works well for daily use and the 5G is fast. Camera is good in daylight.',
      verified: true,
      helpful: 3,
    },
  ],
  aiSummary: [
    'The Crystal Violet colour is widely praised.',
    'Buyers describe it as smooth with generous storage.',
    'Battery life and 5G speed get positive mentions.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(275)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(367)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
