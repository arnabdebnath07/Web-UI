import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Classic Black EDT for men 100ml: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title' },
  description:
    'Classic Black is an eau de toilette for men in a 100ml bottle. Its fresh, understated character suits everyday wear at work or in the evening, and the generous size lasts a long time.',
  featureBullets: [
    'Eau de toilette for men',
    '100ml bottle',
    'Suitable for everyday wear',
    'Spray application',
  ],
  specs: [
    ['Product Type', 'Eau de Toilette'],
    ['Target Audience', 'Men'],
    ['Size', '100 ml'],
    ['Item Condition', 'New'],
  ],
  reviews: [
    {
      name: 'Rami D.',
      rating: 5,
      ago: '1 week ago',
      title: 'My everyday scent',
      body: 'Fresh and not overpowering, good for the office. Arrived sealed and well wrapped.',
      verified: true,
      helpful: 5,
    },
    {
      name: 'Kevin O.',
      rating: 4,
      ago: '1 month ago',
      title: 'Nice, lasts a few hours',
      body: 'Pleasant smell. In the summer heat I reapply in the afternoon.',
      verified: true,
      helpful: 3,
    },
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
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(82)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(110)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'verified', title: '100% original' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
