import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** OnePlus N6 128GB Midnight Green: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The OnePlus N6 is an affordable 5G phone running Android. This international version in Midnight Green has 4GB of RAM, 128GB of storage and dual SIM support. A practical choice for calls, messaging, social apps and streaming.',
  featureBullets: [
    'Midnight Green finish',
    '4GB RAM with 128GB internal storage',
    'Dual SIM with 5G connectivity',
    'Android operating system',
    'International version',
  ],
  highlights: ['128GB', '4GB RAM', '5G'],
  specs: [
    ['Brand', 'OnePlus'],
    ['Model Name', 'N6'],
    ['Colour Name', 'Midnight Green'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Affordable 5G', description: 'Gets you on 5G networks in the UAE at an entry-level price.' },
    { title: 'Enough storage', description: '128GB covers apps, photos and offline media for everyday use.' },
    { title: 'Keep in mind', description: 'With 4GB RAM it suits everyday apps; heavy gaming and multitasking are not its strength.' },
  ],
  reviews: [
    {
      name: 'Joseph A.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Good basic phone',
      body: 'Bought it for my father. Simple to use, clear calls and good battery.',
      verified: true,
      helpful: 2,
      variant: 'Midnight Green',
    },
    {
      name: 'Huda K.',
      rating: 4,
      ago: '1 month ago',
      title: 'Fine for the price',
      body: 'Handles WhatsApp and YouTube well. Slows a little with many apps open.',
      verified: true,
      helpful: 1,
      variant: 'Midnight Green',
    },
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
    { icon: 'warranty', text: '1 Year Seller Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(215)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(287)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
