import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Xiaomi REDMI A7 Pro 4GB RAM 64GB Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The Xiaomi REDMI A7 Pro is a budget-friendly 4G smartphone with 4GB of RAM and 64GB of storage for calls, messaging and everyday apps. It is a simple, dependable choice as a first phone, a backup phone or for a family member. This Global Version comes in Black.',
  featureBullets: [
    '4GB RAM for everyday apps',
    '64GB internal storage',
    '4G LTE connectivity',
    'Simple, easy-to-use design',
    'Black finish, Global Version',
  ],
  highlights: ['64GB', '4GB RAM'],
  specs: [
    ['Brand', 'Xiaomi'],
    ['Model Name', 'REDMI A7 Pro'],
    ['Colour', 'Black'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '64 GB'],
    ['Network Type', '4G'],
    ['Version', 'Global Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Budget friendly', description: 'A low-cost way to get a new Android smartphone.' },
    { title: 'Covers the basics', description: 'Calls, WhatsApp, social media and video run fine.' },
    { title: 'Great backup phone', description: 'Suits first-time users, children or as a second phone.' },
    {
      title: 'Keep in mind',
      description: '64GB fills up quickly with photos and videos; back up regularly or use cloud storage.',
    },
  ],
  reviews: [
    {
      name: 'Grace O.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Perfect for my dad',
      body: 'Easy to use, big screen and the battery lasts. Exactly what he needed.',
      verified: true,
      helpful: 31,
      variant: 'Black',
    },
    {
      name: 'Saeed A.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good cheap phone',
      body: 'Fine for calls and WhatsApp. Arrived next day.',
      verified: true,
      helpful: 17,
      variant: 'Black',
    },
    {
      name: 'Ramesh V.',
      rating: 4,
      ago: '1 month ago',
      title: 'Fair for the price',
      body: 'Works well for basics. Storage fills fast if you take a lot of videos.',
      verified: true,
      helpful: 12,
    },
    {
      name: 'Lina F.',
      rating: 4,
      ago: '2 months ago',
      title: 'Backup phone',
      body: 'Bought it as a spare for travel. Does everything a basic phone should.',
      verified: true,
      helpful: 6,
    },
  ],
  aiSummary: [
    'Buyers see it as an easy, affordable phone for basics.',
    'Popular as a phone for parents, children or as a backup.',
    'Some note the 64GB storage fills quickly.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(98)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(130)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
