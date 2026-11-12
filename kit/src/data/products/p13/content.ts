import { defineContent } from '../../define';

/** De'Longhi stainless steel milk frothing jug 350ml: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'A 350ml stainless steel jug for frothing milk with an espresso machine steam wand. The spout helps you pour cleanly for cappuccinos, flat whites and simple latte art.',
  featureBullets: [
    '350ml capacity, ideal for one or two milk drinks',
    'Stainless steel body',
    'Pouring spout for controlled pours',
    'Handle stays comfortable while steaming',
    'Easy to rinse and clean',
  ],
  highlights: ['350ml', 'Stainless steel'],
  specs: [
    ['Brand', 'De’Longhi'],
    ['Product Type', 'Milk frothing jug'],
    ['Capacity', '350 ml'],
    ['Material', 'Stainless steel'],
    ['Use With', 'Espresso machine steam wands'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Right size', description: 'Holds enough milk for one or two drinks without wasting any.' },
    { title: 'Better pours', description: 'The spout makes it easier to pour textured milk neatly.' },
    { title: 'Keep in mind', description: 'The steel gets hot while steaming; hold it by the handle.' },
  ],
  reviews: [
    { name: 'Nadia K.', rating: 5, ago: '1 week ago', title: 'Perfect with my Dedica', body: 'Fits under the steam wand nicely and the spout pours well. Arrived in a neat box.', verified: true, helpful: 9 },
    { name: 'Chris O.', rating: 4, ago: '3 weeks ago', title: 'Good quality', body: 'Solid steel and easy to clean. A bit small if you make lattes for two.', verified: true, helpful: 4 },
    { name: 'Rania S.', rating: 5, ago: '1 month ago', title: 'Latte art practice', body: 'Much easier to pour hearts than with my old mug.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers say it pours cleanly for milk drinks',
    'Solid steel build that is easy to clean',
    'Some find 350ml small for two large lattes',
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
  offerBadges: [
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
