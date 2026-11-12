import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy S26 Ultra 256GB Black (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Galaxy S26 Ultra is Samsung’s top Galaxy S flagship, here in Black with 12GB RAM and 256GB of storage. Galaxy AI features help you search, write, translate and edit photos, and the Ultra camera system is built for detail and zoom. This Middle East Version supports Dual SIM and 5G for use across the UAE.',
  featureBullets: [
    'Samsung flagship Galaxy S Ultra model',
    '12GB RAM and 256GB internal storage',
    'Galaxy AI for writing, translation and photo editing',
    'Ultra camera system for detailed photos and zoom',
    'Middle East Version with Dual SIM and 5G',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy S26 Ultra'],
    ['Colour Name', 'Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Latest Galaxy flagship', description: 'The newest Galaxy S Ultra with top-tier performance for apps and games.' },
    { title: 'Galaxy AI built in', description: 'AI tools for live translation, writing help and quick photo edits.' },
    { title: 'Regional version', description: 'Middle East Version, set up for use in the UAE and the region.' },
    { title: 'Keep in mind', description: 'No charger in the box: use a USB-C power adapter you already own.' },
  ],
  reviews: [
    { name: 'Mohammed A.', rating: 5, ago: '3 days ago', title: 'Superb upgrade', body: 'Came sealed with a Middle East warranty card the next day. Camera and screen are a clear step up from my S23 Ultra.', verified: true, helpful: 33, variant: 'Black' },
    { name: 'Fatima Z.', rating: 5, ago: '2 weeks ago', title: 'Very fast', body: 'Everything opens instantly and the battery gets me through a long workday with hotspot on.', verified: true, helpful: 15 },
    { name: 'James O.', rating: 4, ago: '1 month ago', title: 'Great phone, pricey case options', body: 'Love the phone and the Black finish. Took a while to find a case that fits well since it is so new.', verified: true, helpful: 6, variant: 'Black' },
  ],
  aiSummary: [
    'Buyers received sealed Middle East units quickly',
    'Speed, screen and camera are the most praised points',
    'Some found case choice limited at launch',
  ],
  seller: {
    name: 'Cellsavvy',
    rating: 4.7,
    ratingCount: 4210,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 4 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: ULTRA10' }],
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(825)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1100)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70283855V', 'p11', 'home-maynos-mount'],
});
