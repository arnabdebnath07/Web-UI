import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** motorola G06 64GB Pantone Laurel Oak: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The motorola G06 is an entry-level 4G phone with a Pantone-validated finish and motorola\'s near-stock Android. This Middle East version in Pantone Laurel Oak has 4GB of RAM, 64GB of storage and dual SIM. A simple, reliable phone for calls, messaging and everyday apps.',
  featureBullets: [
    'Pantone Laurel Oak finish',
    '4GB RAM with 64GB internal storage',
    'Dual SIM with 4G connectivity',
    'Clean, near-stock Android experience',
    'Middle East version with brand warranty in the UAE',
  ],
  highlights: ['64GB', '4GB RAM', '4G'],
  specs: [
    ['Brand', 'motorola'],
    ['Model Name', 'G06'],
    ['Colour Name', 'Pantone Laurel Oak'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '64 GB'],
    ['Network Type', '4G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android'],
  ],
  aiOverview: [
    { title: 'Everyday essentials', description: 'Handles calls, messaging, social apps and video comfortably.' },
    { title: 'Pantone colour', description: 'The Laurel Oak finish gives a budget phone a more considered look.' },
    { title: 'Keep in mind', description: 'It is a 4G phone without 5G support, and 64GB of storage suits light users.' },
  ],
  reviews: [
    {
      name: 'Maria F.',
      rating: 5,
      ago: '1 week ago',
      title: 'Great for the price',
      body: 'Bought as a second phone. Battery lasts a long time and the colour is lovely.',
      verified: true,
      helpful: 8,
      variant: 'Pantone Laurel Oak',
    },
    {
      name: 'Suresh R.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Simple and reliable',
      body: 'Clean software, no junk apps. Not fast for games but fine for daily use.',
      verified: true,
      helpful: 5,
      variant: 'Pantone Laurel Oak',
    },
    {
      name: 'Abdullah T.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good starter phone',
      body: 'Got it for my son. Delivered next day, works well with his SIM.',
      verified: true,
      helpful: 3,
    },
  ],
  aiSummary: [
    'Buyers see it as strong value for a budget phone',
    'Clean software and battery life get positive mentions',
    'Performance is described as fine for daily use but not for gaming',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(122)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(163)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
