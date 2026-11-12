import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy S25 Ultra 256GB Titanium Black: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Galaxy S25 Ultra brings Samsung flagship performance in a titanium frame, with the Snapdragon 8 Elite for Galaxy chip, 12GB RAM and 256GB of storage. The 200MP main camera and Galaxy AI tools handle everything from night shots to quick edits, and the built-in S Pen is always ready for notes and sketches. Dual SIM and 5G keep you connected across the UAE.',
  featureBullets: [
    'Snapdragon 8 Elite for Galaxy with 12GB RAM',
    '256GB internal storage',
    '200MP main camera with Galaxy AI photo editing',
    'Built-in S Pen for notes, sketches and quick actions',
    'Titanium frame in Titanium Black',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy S25 Ultra'],
    ['Colour Name', 'Titanium Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Operating System', 'Android'],
    ['Processor', 'Snapdragon 8 Elite for Galaxy'],
    ['Screen Size', '6.9 in'],
    ['Primary Camera Resolution', '200 MP'],
    ['Battery Size', '5000 mAh'],
    ['Charging Type', 'Type-C'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Flagship performance', description: 'The Snapdragon 8 Elite for Galaxy and 12GB RAM keep apps, games and multitasking smooth.' },
    { title: 'Pro-grade camera', description: 'A 200MP main camera with Galaxy AI editing for detailed photos day and night.' },
    { title: 'S Pen built in', description: 'The stylus docks inside the phone for notes, sketches and precise editing.' },
    { title: 'Keep in mind', description: 'No charger in the box: use a USB-C power adapter you already own.' },
  ],
  reviews: [
    { name: 'Omar K.', rating: 5, ago: '1 week ago', title: 'Best phone I have owned', body: 'Arrived the same day in sealed packaging. The camera zoom is unreal and the battery easily lasts a full day of heavy use.', verified: true, helpful: 42, variant: 'Titanium Black' },
    { name: 'Priya S.', rating: 5, ago: '3 weeks ago', title: 'S Pen is a game changer', body: 'I use the S Pen every day for meeting notes. Screen is bright enough outdoors even in Dubai summer.', verified: true, helpful: 18, variant: 'Titanium Black' },
    { name: 'Hassan A.', rating: 4, ago: '1 month ago', title: 'Great, but large', body: 'Performance and camera are excellent. It is a big phone, so one-handed use takes some getting used to.', verified: true, helpful: 9 },
    { name: 'Lina M.', rating: 5, ago: '2 months ago', title: 'Worth the upgrade', body: 'Upgraded from an older Galaxy and the Galaxy AI features are genuinely useful. Data transfer took ten minutes.', verified: true, helpful: 6 },
  ],
  aiSummary: [
    'Buyers praise the camera, especially zoom and low-light shots',
    'Battery life comfortably covers a full day of heavy use',
    'Some find the large size hard to use one-handed',
  ],
  seller: {
    name: 'noon',
    rating: 4.8,
    ratingCount: 25840,
    positive: 96,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  officialStore: true,
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: GALAXY10' }],
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(1075)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1433)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['p2', 'p11', 'home-maynos-mount'],
});
