import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Stanley Quencher H2.0 FlowState Tumbler 40oz: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Quencher H2.0 FlowState is a 40oz stainless steel tumbler with double-wall vacuum insulation to keep drinks cold for hours. A comfortable handle, a straw lid with a rotating cover and a base that fits most car cup holders make it easy to carry through a hot UAE day.',
  featureBullets: [
    '40oz capacity for all-day hydration',
    'Double-wall vacuum insulated stainless steel',
    'FlowState lid with a rotating cover and reusable straw',
    'Comfort-grip handle',
    'Tapered base fits most car cup holders',
    'Dishwasher safe',
  ],
  highlights: ['40oz', 'Stainless steel'],
  specs: [
    ['Brand', 'Stanley'],
    ['Model Name', 'Quencher H2.0 FlowState'],
    ['Capacity', '40 oz (approx. 1.18 L)'],
    ['Material', 'Stainless steel'],
    ['Insulation', 'Double-wall vacuum'],
    ['Lid Type', 'Straw lid with rotating cover'],
    ['Handle', 'Yes'],
    ['Dishwasher Safe', 'Yes'],
  ],
  aiOverview: [
    { title: 'Keeps drinks cold', description: 'Vacuum insulation keeps ice in place for hours, even in the car.' },
    { title: 'Easy to carry', description: 'The handle and cup-holder-friendly base make it a good daily companion.' },
    { title: 'Keep in mind', description: 'The straw lid is not fully leak-proof when tipped over; close the cover when carrying it in a bag.' },
  ],
  reviews: [
    { name: 'Layla M.', rating: 5, ago: '1 week ago', title: 'Ice lasts all day', body: 'Filled it with ice in the morning and there was still ice in the evening. Fits my car cup holder.', verified: true, helpful: 26 },
    { name: 'Aisha R.', rating: 5, ago: '2 weeks ago', title: 'Love the colour', body: 'Exactly the colour shown and arrived well wrapped. Helps me drink more water.', verified: true, helpful: 10 },
    { name: 'Tom W.', rating: 4, ago: '1 month ago', title: 'Great, but not for bags', body: 'Keeps water cold for ages. It can drip if it falls over, so it stays out of my bag.', verified: true, helpful: 8 },
  ],
  aiSummary: [
    'Buyers say ice lasts through the day',
    'The handle and cup-holder fit are popular',
    'A few mention it can leak when tipped over',
  ],
  seller: {
    name: 'Global Store',
    rating: 4.5,
    ratingCount: 1960,
    positive: 92,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 3 },
    ],
  },
  dealTag: 'Limited Time Deal',
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(45)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(60)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: '100% original' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
