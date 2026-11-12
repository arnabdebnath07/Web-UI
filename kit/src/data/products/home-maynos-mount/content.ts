import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** MAYNOS suction phone case mount: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'A suction phone mount from MAYNOS that holds your phone hands-free on smooth surfaces such as mirrors, tiles and glass. Handy for following recipes, video calls or watching while you get ready.',
  featureBullets: [
    'Suction grip for smooth, flat surfaces',
    'Hands-free viewing at home or in the car',
    'Works with most smartphones',
    'Easy to reposition without tools',
    'Compact and easy to carry',
  ],
  highlights: ['Suction mount', 'Hands-free'],
  specs: [
    ['Brand', 'MAYNOS'],
    ['Product Type', 'Phone mount'],
    ['Mount Type', 'Suction'],
    ['Compatible With', 'Most smartphones'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Hands-free', description: 'Keeps your phone in view while cooking, working out or getting ready.' },
    { title: 'No tools needed', description: 'Press it onto a smooth surface and move it whenever you like.' },
    { title: 'Keep in mind', description: 'Suction holds best on clean, flat, non-porous surfaces; it will not stick to textured walls.' },
  ],
  reviews: [
    { name: 'Reem S.', rating: 5, ago: '2 days ago', title: 'Great in the kitchen', body: 'Stuck it to the tiles to follow recipes. Holds my phone firmly and arrived the same day.', verified: true, helpful: 8 },
    { name: 'Arjun T.', rating: 4, ago: '2 weeks ago', title: 'Strong suction', body: 'Works well on my bathroom mirror. Needs a wipe now and then to keep its grip.', verified: true, helpful: 5 },
    { name: 'Noura H.', rating: 4, ago: '1 month ago', title: 'Handy for video calls', body: 'Useful on the car window and the fridge. Not for textured surfaces.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers like the firm grip on tiles and mirrors',
    'Popular for cooking and video calls',
    'Works poorly on textured surfaces',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 18450,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  dealTag: 'Limited Time Deal',
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(225)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(300)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
