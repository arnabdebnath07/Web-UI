import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** LEGO Technic Ferrari Daytona SP3 42143: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Build a large-scale LEGO Technic model of the Ferrari Daytona SP3 with this 3,778-piece set. It recreates the car’s V12 engine with moving pistons, a working sequential gearbox and butterfly doors. A rewarding, long build for adult fans that makes a striking display piece.',
  featureBullets: [
    '3,778 pieces for a detailed large-scale model',
    'V12 engine with moving pistons',
    'Working sequential gearbox with paddle shifters',
    'Opening butterfly doors and removable roof',
    'Designed for adult builders, ages 18+',
  ],
  highlights: ['3,778 pcs', 'Set 42143'],
  specs: [
    ['Brand', 'LEGO'],
    ['Theme', 'Technic'],
    ['Model Name', 'Ferrari Daytona SP3'],
    ['Set Number', '42143'],
    ['Piece Count', '3778'],
    ['Minimum Age', '18 years'],
    ['Product Type', 'Building set'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Big build', description: 'Thousands of pieces and numbered bags make it a multi-evening project.' },
    { title: 'Working mechanics', description: 'The gearbox, engine and doors all move, not just look the part.' },
    { title: 'Keep in mind', description: 'It is large when finished; plan a display spot before you start.' },
  ],
  reviews: [
    { name: 'Karim F.', rating: 5, ago: '1 week ago', title: 'Incredible set', body: 'Took me about two weeks of evenings. The gearbox is genius. Box arrived without a dent.', verified: true, helpful: 15 },
    { name: 'Ben R.', rating: 5, ago: '1 month ago', title: 'Display centrepiece', body: 'Looks stunning on the shelf. All bags were sealed and numbered.', verified: true, helpful: 9 },
    { name: 'Zaid M.', rating: 5, ago: '2 months ago', title: 'Worth every piece', body: 'Challenging gearbox section but the instructions are clear. Best Technic set I own.', verified: true, helpful: 4 },
  ],
  aiSummary: [
    'Buyers call it a rewarding, long build',
    'The working gearbox is the highlight',
    'Makes an impressive display piece',
  ],
  seller: {
    name: 'Toy Planet',
    rating: 4.7,
    ratingCount: 940,
    positive: 96,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 99, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 5 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  dealTag: 'Limited Time Deal',
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(363)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(483)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: '100% original' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
