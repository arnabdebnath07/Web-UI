import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Honor Magic V5 512GB Ivory White: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Honor Magic V5 is a book-style foldable that opens into a large tablet-like screen, while staying remarkably slim when closed. It is powered by the Snapdragon 8 Elite chip. This international version in Ivory White has 16GB of RAM, 512GB of storage, dual SIM and 5G.',
  featureBullets: [
    'Book-style foldable with a large inner display',
    'Slim, lightweight design when folded',
    'Snapdragon 8 Elite chip',
    '16GB RAM with 512GB internal storage',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['512GB', '16GB RAM', 'Foldable'],
  specs: [
    ['Brand', 'Honor'],
    ['Model Name', 'Magic V5'],
    ['Colour Name', 'Ivory White'],
    ['RAM Size', '16 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Item Condition', 'New'],
    ['Form Factor', 'Foldable'],
    ['Processor', 'Snapdragon 8 Elite'],
    ['Operating System', 'Android (MagicOS)'],
  ],
  aiOverview: [
    { title: 'Two screens in one', description: 'Use it as a normal phone closed, then unfold for split-screen apps, reading and video.' },
    { title: 'Slim for a foldable', description: 'Honor focused on keeping the Magic V5 thin and light, so it pockets like a regular phone.' },
    { title: 'Top-tier power', description: 'The Snapdragon 8 Elite with 16GB RAM runs several apps side by side without slowing down.' },
    { title: 'Keep in mind', description: 'Foldable screens need gentle care: avoid sharp objects on the inner display and do not remove the factory screen protector.' },
  ],
  reviews: [
    {
      name: 'Mariam A.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'So thin for a foldable',
      body: 'Closed, it feels like a normal phone. The inner screen is great for reading and emails.',
      verified: true,
      helpful: 11,
      variant: 'Ivory White',
    },
    {
      name: 'Thomas G.',
      rating: 4,
      ago: '1 month ago',
      title: 'Impressive, crease visible',
      body: 'Excellent build and performance. You can see the crease at angles but stop noticing it quickly.',
      verified: true,
      helpful: 7,
      variant: 'Ivory White',
    },
    {
      name: 'Saeed K.',
      rating: 5,
      ago: '2 months ago',
      title: 'Productivity machine',
      body: 'Split screen with email and calendar is a game changer for work. Arrived well packed the next day.',
      verified: true,
      helpful: 5,
    },
  ],
  aiSummary: [
    'Reviewers are impressed by how thin the phone is when folded',
    'The inner display is praised for reading and split-screen work',
    'Some notice the crease at an angle, though it fades from attention',
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 3120,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 6 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  offerBadges: [
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Seller Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  discountTags: [
    { title: 'Extra 10% off', code: 'CODE: FOLD10' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(1050)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1400)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70208284V', 'p11'],
});
