import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** De'Longhi Dedica Arte EC885: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Dedica Arte EC885 is a slim pump espresso machine in stainless steel, made for small kitchens. It brews espresso from ground coffee and has a steam wand for frothing milk, so you can make cappuccinos and flat whites at home.',
  featureBullets: [
    'Slim design that fits small countertops',
    '15 bar pump espresso',
    'Steam wand for textured milk and latte art',
    'Stainless steel finish',
    'Single and double shot filters',
  ],
  highlights: ['15 bar', 'Steam wand'],
  specs: [
    ['Brand', 'De’Longhi'],
    ['Model Name', 'Dedica Arte'],
    ['Model Number', 'EC885'],
    ['Machine Type', 'Pump espresso machine'],
    ['Pump Pressure', '15 bar'],
    ['Coffee Input', 'Ground coffee'],
    ['Milk Frothing', 'Steam wand'],
    ['Colour', 'Stainless steel'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Compact', description: 'One of the slimmest espresso machines, easy to fit next to a kettle.' },
    { title: 'Milk drinks', description: 'The steam wand textures milk well enough for latte art with practice.' },
    { title: 'Café at home', description: 'Pulls a proper espresso shot from freshly ground coffee.' },
    { title: 'Keep in mind', description: 'No built-in grinder; use freshly ground coffee and descale regularly in hard water.' },
  ],
  reviews: [
    { name: 'Lina A.', rating: 5, ago: '5 days ago', title: 'Great flat whites', body: 'The steam wand makes silky milk. Fits perfectly in my small apartment kitchen.', verified: true, helpful: 20 },
    { name: 'Mark S.', rating: 4, ago: '2 weeks ago', title: 'Learning curve', body: 'Took a few days to dial in the grind, now the espresso is excellent. Well packed.', verified: true, helpful: 11 },
    { name: 'Rashid H.', rating: 5, ago: '1 month ago', title: 'Looks premium', body: 'Stainless steel looks great on the counter. Heats up quickly in the morning.', verified: true, helpful: 7 },
    { name: 'Joanna P.', rating: 4, ago: '2 months ago', title: 'Small drip tray', body: 'Love the coffee, but the drip tray fills up fast.', verified: true, helpful: 5 },
  ],
  aiSummary: [
    'Buyers love the steam wand for milk drinks',
    'The slim design suits small kitchens',
    'Some mention a learning curve and a small drip tray',
  ],
  seller: {
    name: 'KitchenPro',
    rating: 4.6,
    ratingCount: 1120,
    positive: 94,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 4 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Save 50', code: 'CODE: BREW50' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(225)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(300)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  fbt: ['p8', 'p13', 'p14'],
});
