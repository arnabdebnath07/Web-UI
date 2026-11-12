import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Dior Sauvage Eau de Parfum 100ml: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Sauvage Eau de Parfum is the warmer, deeper take on Dior’s best-known men’s fragrance. It opens fresh and peppery with bergamot, then settles into a smoother, slightly sweet base. The 100ml bottle is a generous size for everyday wear.',
  featureBullets: [
    'Eau de Parfum concentration for longer wear than the Eau de Toilette',
    'Fresh bergamot opening with a warm, rounded base',
    'Generous 100ml spray bottle',
    'Works for office days and evenings out',
    'Authentic product, sealed in original packaging',
  ],
  highlights: ['100ml', 'Eau de Parfum'],
  specs: [
    ['Brand', 'Dior'],
    ['Product Line', 'Sauvage'],
    ['Fragrance Concentration', 'Eau de Parfum'],
    ['Volume', '100 ml'],
    ['Target Gender', 'Men'],
    ['Top Notes', 'Bergamot'],
    ['Item Form', 'Spray'],
  ],
  aiOverview: [
    { title: 'Scent profile', description: 'Fresh and peppery up top, drying down to a warmer, softer base than the original Eau de Toilette.' },
    { title: 'Longevity', description: 'The Eau de Parfum strength lasts through a full day for most wearers with a few sprays.' },
    { title: 'Everyday versatility', description: 'Easy to wear at work, in the evening and in warmer weather when applied lightly.' },
    { title: 'Keep in mind', description: 'It is a popular scent, so it may not feel unique; store away from heat and direct sun.' },
  ],
  reviews: [
    { name: 'Omar K.', rating: 5, ago: '1 week ago', title: 'My signature scent', body: 'Sealed box, genuine batch code and it arrived the next day. Lasts from morning until I get home.', verified: true, helpful: 24 },
    { name: 'Rahul M.', rating: 5, ago: '3 weeks ago', title: 'Better than the EDT', body: 'Smoother and warmer than the Eau de Toilette I had before. Three sprays is plenty.', verified: true, helpful: 15 },
    { name: 'Faisal A.', rating: 4, ago: '1 month ago', title: 'Great, but very common', body: 'Smells excellent and projects well. Only downside is that a lot of people wear it.', verified: true, helpful: 9 },
  ],
  aiSummary: [
    'Buyers say it lasts through a full working day',
    'Many prefer the warmer Eau de Parfum to the Eau de Toilette',
    'Some note the scent is very widely worn',
  ],
  seller: {
    name: 'Beauty Hub',
    rating: 4.6,
    ratingCount: 2140,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 4 },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: SCENT10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(123)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(163)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: '100% authentic' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
