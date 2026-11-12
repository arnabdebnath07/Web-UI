import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy S26 Ultra 256GB Cobalt Violet (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'This International Version of Galaxy S26 Ultra comes in Cobalt Violet with 12GB RAM and 256GB of storage. Galaxy AI features for search, translation, writing and photo edits are built in, and the Ultra camera system is designed for detail and zoom. Dual SIM and 5G keep you connected at home and when you travel.',
  featureBullets: [
    'Cobalt Violet Galaxy S26 Ultra',
    '12GB RAM and 256GB internal storage',
    'Galaxy AI for search, translation and photo editing',
    'Ultra camera system for detail and zoom',
    'International Version with Dual SIM and 5G',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy S26 Ultra'],
    ['Colour Name', 'Cobalt Violet'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Latest Galaxy flagship', description: 'The newest Galaxy S Ultra with top-tier speed for apps and games.' },
    { title: 'Galaxy AI built in', description: 'AI help for translation, writing and photo edits.' },
    { title: 'Travel ready', description: 'Dual SIM and 5G make it easy to add a travel SIM.' },
    { title: 'Keep in mind', description: 'International Version: warranty is handled by the seller, and no charger is included in the box.' },
  ],
  reviews: [
    { name: 'Samir T.', rating: 5, ago: '6 days ago', title: 'Flawless', body: 'Box was sealed and the phone activated without any issues on my UAE SIM. Very happy with the camera.', verified: true, helpful: 22, variant: 'Cobalt Violet' },
    { name: 'Hannah G.', rating: 5, ago: '2 weeks ago', title: 'Beautiful colour', body: 'The violet is subtle and classy. Battery comfortably lasts a full day.', verified: true, helpful: 10 },
    { name: 'Bilal Q.', rating: 4, ago: '1 month ago', title: 'Good deal', body: 'Great phone for the price. Only downside is the warranty is through the seller rather than local.', verified: true, helpful: 7 },
  ],
  aiSummary: [
    'Units arrived sealed and worked with UAE SIM cards',
    'The Cobalt Violet colour and camera get strong praise',
    'Some prefer a local warranty over the seller warranty',
  ],
  seller: {
    name: 'ALAREESH MPT',
    rating: 4.6,
    ratingCount: 980,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 2 },
    ],
  },
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Seller Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(900)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1200)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
