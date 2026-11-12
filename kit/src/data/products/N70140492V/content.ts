import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy S25 Ultra 256GB Titanium Grey (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Middle East Version of Galaxy S25 Ultra in Titanium Grey pairs 12GB RAM with 256GB of storage and the Snapdragon 8 Elite for Galaxy chip. Galaxy AI features help you write, translate and edit photos, while the 200MP main camera captures sharp detail. The built-in S Pen, titanium frame and Dual SIM 5G round out a complete flagship.',
  featureBullets: [
    'Middle East Version with Dual SIM and 5G',
    '12GB RAM and 256GB internal storage',
    'Snapdragon 8 Elite for Galaxy processor',
    '200MP main camera with Galaxy AI editing tools',
    'Built-in S Pen and titanium frame',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy S25 Ultra'],
    ['Colour Name', 'Titanium Grey'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Processor', 'Snapdragon 8 Elite for Galaxy'],
    ['Screen Size', '6.9 in'],
    ['Primary Camera Resolution', '200 MP'],
    ['Battery Size', '5000 mAh'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Galaxy AI on board', description: 'Built-in AI tools for live translation, note summaries and photo edits.' },
    { title: 'Detailed photos', description: 'A 200MP main camera that keeps detail when you crop or zoom.' },
    { title: 'Regional version', description: 'Middle East Version, set up for use in the UAE and the region.' },
    { title: 'Keep in mind', description: 'No charger in the box, and only a few units are left in stock at this price.' },
  ],
  reviews: [
    { name: 'Ahmed R.', rating: 5, ago: '4 days ago', title: 'Amazing value at this price', body: 'Original Middle East box, sealed, with a local warranty card. The phone is fast and the camera is superb.', verified: true, helpful: 37, variant: 'Titanium Grey' },
    { name: 'Sara T.', rating: 5, ago: '2 weeks ago', title: 'Battery lasts all day', body: 'I get through a full day with navigation and calls and still have charge left at night.', verified: true, helpful: 21 },
    { name: 'Faisal N.', rating: 4, ago: '1 month ago', title: 'Very good phone', body: 'Excellent screen and S Pen. Delivery took two days longer than expected but the seller kept me updated.', verified: true, helpful: 8, variant: 'Titanium Grey' },
    { name: 'Maria L.', rating: 5, ago: '2 months ago', title: 'Titanium Grey looks premium', body: 'The colour looks great in person and the frame feels solid. Galaxy AI translation helps me at work.', verified: true, helpful: 5 },
  ],
  aiSummary: [
    'Buyers received sealed, original Middle East units',
    'Camera, screen and battery life get consistent praise',
    'A few mention delivery taking slightly longer than estimated',
  ],
  seller: {
    name: 'TECH ORBIT TRADING L.L.C.',
    rating: 4.6,
    ratingCount: 3120,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 3 },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: SMART10' }],
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(735)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(980)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
