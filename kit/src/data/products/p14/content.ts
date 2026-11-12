import { defineContent } from '../../define';

/** De'Longhi EcoDecalk natural descaler 500ml: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'EcoDecalk is De’Longhi’s natural-based descaler for coffee machines. Regular descaling removes limescale build-up, helping your machine keep its temperature and flow and protecting it over time. One 500ml bottle covers several descaling cycles.',
  featureBullets: [
    'Natural-based descaling formula',
    'Removes limescale from coffee machines',
    'Helps keep coffee temperature and taste consistent',
    '500ml bottle for several descaling cycles',
    'Made for De’Longhi espresso and bean-to-cup machines',
  ],
  highlights: ['500ml', 'Natural-based'],
  specs: [
    ['Brand', 'De’Longhi'],
    ['Product Name', 'EcoDecalk'],
    ['Product Type', 'Descaler'],
    ['Volume', '500 ml'],
    ['Form', 'Liquid'],
    ['Compatible With', 'De’Longhi coffee machines'],
  ],
  aiOverview: [
    { title: 'Machine care', description: 'Descaling regularly protects the heating element and keeps flow steady.' },
    { title: 'Good value', description: 'One bottle is mixed with water and lasts for several cycles.' },
    { title: 'Keep in mind', description: 'Follow the descaling steps in your machine’s manual and rinse well afterwards.' },
  ],
  reviews: [
    { name: 'Hassan J.', rating: 5, ago: '6 days ago', title: 'Machine runs like new', body: 'Descaled my espresso machine and the flow is back to normal. Hard water here makes it a must.', verified: true, helpful: 13 },
    { name: 'Emma C.', rating: 5, ago: '3 weeks ago', title: 'Easy to use', body: 'Followed the manual and it took about 30 minutes. No smell left after rinsing.', verified: true, helpful: 6 },
    { name: 'Sameer A.', rating: 4, ago: '2 months ago', title: 'Does the job', body: 'Works well, though a bit pricier than generic descalers.', verified: true, helpful: 3 },
  ],
  aiSummary: [
    'Buyers say it restores flow and taste',
    'Easy to use when following the machine manual',
    'Some find it pricier than generic descalers',
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
