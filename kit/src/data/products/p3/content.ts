import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Nike Air Max 270 men's Black/White: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Air Max 270 is built around a large Max Air unit in the heel for a soft, cushioned step. A breathable mesh upper and lace-up fit keep it comfortable from morning to evening, and the Black/White colourway goes with almost anything.',
  featureBullets: [
    'Large Max Air unit in the heel for cushioning',
    'Breathable mesh upper',
    'Lace-up closure for a secure fit',
    'Rubber outsole for grip on everyday surfaces',
    'Classic Black/White colourway',
  ],
  highlights: ['Max Air heel', 'Black/White'],
  specs: [
    ['Brand', 'Nike'],
    ['Model Name', 'Air Max 270'],
    ['Department', 'Men'],
    ['Colour', 'Black/White'],
    ['Sport Type', 'Running'],
    ['Upper Material', 'Mesh'],
    ['Outsole Material', 'Rubber'],
    ['Closure Type', 'Lace-up'],
  ],
  aiOverview: [
    { title: 'Comfort', description: 'The tall heel Air unit gives a soft, bouncy feel for long days on your feet.' },
    { title: 'Style', description: 'A bold lifestyle silhouette that pairs well with jeans, joggers and shorts.' },
    { title: 'Keep in mind', description: 'Many buyers find it runs slightly snug; consider half a size up if between sizes.' },
  ],
  reviews: [
    { name: 'Yousef N.', rating: 5, ago: '4 days ago', title: 'Super comfortable', body: 'Wear them all day at work and my feet feel fine. Original box, delivered on time.', verified: true, helpful: 14, variant: '43' },
    { name: 'Daniel F.', rating: 4, ago: '2 weeks ago', title: 'Size up', body: 'Great shoes but a little tight, so I exchanged for one size bigger. The exchange was easy.', verified: true, helpful: 19, variant: '42' },
    { name: 'Imran Q.', rating: 4, ago: '1 month ago', title: 'Looks great', body: 'Clean look and very cushioned heel. Better for walking than serious running.', verified: true, helpful: 5, variant: '44' },
  ],
  aiSummary: [
    'Buyers praise the all-day cushioning',
    'Several recommend going half or one size up',
    'Seen more as a lifestyle shoe than a running shoe',
  ],
  seller: {
    name: 'Sports Corner',
    rating: 4.4,
    ratingCount: 1580,
    positive: 89,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 95, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 3 },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 15% off', code: 'CODE: KICKS15' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(98)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(130)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: '100% original' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
