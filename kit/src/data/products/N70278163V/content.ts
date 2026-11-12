import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OPPO A6 5G 8GB RAM 256GB Sapphire Blue with OPPO wired earphones: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The OPPO A6 5G combines 5G connectivity with 8GB of RAM and 256GB of storage for smooth everyday use and plenty of room for photos and apps. This bundle includes OPPO wired earphones. This Middle East Version comes in Sapphire Blue with dual SIM support.',
  featureBullets: [
    'Bundle includes OPPO wired earphones',
    '8GB RAM for smooth multitasking',
    '256GB internal storage',
    '5G dual SIM connectivity',
    'Sapphire Blue finish, Middle East Version',
  ],
  highlights: ['256GB', '8GB RAM', 'With earphones'],
  specs: [
    ['Brand', 'OPPO'],
    ['Model Name', 'A6 5G'],
    ['Colour', 'Sapphire Blue'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['In the Box', 'OPPO A6 5G, OPPO wired earphones'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Bundle value',
      description: 'OPPO wired earphones come with the phone, so you can listen straight away.',
    },
    {
      title: 'Comfortable memory',
      description: '8GB RAM and 256GB storage for everyday multitasking and media.',
    },
    { title: '5G ready', description: 'Fast mobile data with dual SIM flexibility.' },
    {
      title: 'Keep in mind',
      description: 'The bundled earphones are wired; check that the plug suits your phone or use an adapter if needed.',
    },
  ],
  reviews: [
    {
      name: 'Layla M.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Nice bundle',
      body: 'Phone and earphones both arrived next day in the same box. Smooth and the blue looks great.',
      verified: true,
      helpful: 12,
      variant: 'Sapphire Blue',
    },
    {
      name: 'Vikram J.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good mid-range phone',
      body: 'Plenty of storage and the battery is good. Earphones are a nice extra for calls.',
      verified: true,
      helpful: 8,
      variant: 'Sapphire Blue',
    },
    {
      name: 'Tariq H.',
      rating: 3,
      ago: '1 month ago',
      title: 'Fine, earphones are basic',
      body: 'The phone itself is good for daily use. The earphones are basic, I use my own wireless ones.',
      verified: true,
      helpful: 5,
    },
  ],
  aiSummary: [
    'Buyers appreciate the earphones included in the bundle.',
    'Storage and battery life are praised for daily use.',
    'Some find the bundled earphones basic.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(288)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(383)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
