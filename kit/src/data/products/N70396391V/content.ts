import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** TECNO SPARK 50 5G 256GB Titanium Grey: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The TECNO SPARK 50 5G brings 5G connectivity and 256GB of storage to an affordable price. It has 4GB of RAM for everyday apps, dual SIM support and a Titanium Grey finish. This is the global version.',
  featureBullets: [
    '5G connectivity at an entry price',
    '256GB internal storage',
    '4GB RAM for everyday apps',
    'Dual SIM support',
    'Titanium Grey finish',
    'Global version',
  ],
  highlights: ['256GB', '4GB RAM', '5G'],
  specs: [
    ['Brand', 'TECNO'],
    ['Model Name', 'SPARK 50 5G'],
    ['Colour Name', 'Titanium Grey'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Affordable 5G', description: 'One of the more accessible ways to get on a 5G network.' },
    { title: 'Big storage', description: '256GB is generous at this price, with room for photos and apps.' },
    { title: 'Everyday performance', description: '4GB of RAM handles calls, messaging, social apps and video.' },
    { title: 'Keep in mind', description: 'With 4GB of RAM it is not built for heavy gaming, and this is the global version.' },
  ],
  reviews: [
    {
      name: 'Deepak J.',
      rating: 4,
      ago: '1 week ago',
      title: 'Good for the price',
      body: '5G and 256GB at this price is good value. Arrived next day, box sealed.',
      verified: true,
      helpful: 2,
      variant: 'Titanium Grey',
    },
    {
      name: 'Noura B.',
      rating: 3,
      ago: '3 weeks ago',
      title: 'Okay for basic use',
      body: 'Fine for WhatsApp and browsing, but it slows down with many apps open. The grey colour looks nice.',
      verified: true,
      helpful: 1,
    },
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 96, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
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
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
});
