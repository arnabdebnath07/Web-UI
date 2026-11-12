import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy Z Fold 7 256GB Blue Shadow (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Galaxy Z Fold 7 opens from a phone into a large tablet-style screen for split-screen multitasking, reading and video. This International Version in Blue Shadow comes with 12GB RAM, 256GB storage, Dual SIM and 5G. Galaxy AI features work across both screens, and the 200MP main camera brings flagship photography to a foldable.',
  featureBullets: [
    'Foldable design with a large inner screen and a full cover screen',
    '12GB RAM and 256GB internal storage',
    '200MP main camera with Galaxy AI tools',
    'Multitask with up to three apps side by side',
    'International Version with Dual SIM and 5G',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy Z Fold 7'],
    ['Colour Name', 'Blue Shadow'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Primary Camera Resolution', '200 MP'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Phone and tablet in one', description: 'Unfold for a large screen that suits documents, video and split-screen apps.' },
    { title: 'Flagship camera', description: 'A 200MP main camera, with the cover screen usable as a selfie viewfinder.' },
    { title: 'Slim when folded', description: 'A thinner, lighter fold than earlier Galaxy Z Fold models.' },
    { title: 'Keep in mind', description: 'Treat the inner screen with care: avoid sharp objects and do not remove the factory screen protector.' },
  ],
  reviews: [
    { name: 'Yousef H.', rating: 5, ago: '5 days ago', title: 'Finally a fold that feels normal', body: 'Closed it feels like a regular phone, open it replaces my tablet. Delivered next day in perfect condition.', verified: true, helpful: 24, variant: 'Blue Shadow' },
    { name: 'Emma W.', rating: 4, ago: '3 weeks ago', title: 'Great for work', body: 'Running email and a spreadsheet side by side is brilliant. The crease is visible at some angles but you stop noticing.', verified: true, helpful: 11 },
    { name: 'Tariq B.', rating: 5, ago: '1 month ago', title: 'Camera surprised me', body: 'Photos are as good as my previous Ultra. Blue Shadow looks great with a clear case.', verified: true, helpful: 6, variant: 'Blue Shadow' },
  ],
  aiSummary: [
    'Buyers like how slim and light it feels when folded',
    'The large inner screen makes multitasking easy',
    'The crease is noticeable at some angles',
  ],
  seller: {
    name: 'Phones4u LLC',
    rating: 4.5,
    ratingCount: 2410,
    positive: 91,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 96, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 5 },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: FOLD10' }],
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(1100)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1467)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
