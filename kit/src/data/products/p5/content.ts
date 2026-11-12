import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Sony PlayStation 5 Slim Digital Edition: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The PlayStation 5 Slim Digital Edition brings the full PS5 experience in a smaller, lighter body. With no disc drive, games are bought and downloaded from PlayStation Store. It comes with a DualSense wireless controller, with haptic feedback and adaptive triggers.',
  featureBullets: [
    'Slimmer, lighter design than the original PS5',
    'Digital edition: games download from PlayStation Store',
    'Ultra-fast SSD for quick loading',
    'DualSense controller with haptic feedback and adaptive triggers',
    '4K gaming on compatible TVs',
  ],
  highlights: ['Digital Edition', 'DualSense included'],
  specs: [
    ['Brand', 'Sony'],
    ['Model Name', 'PlayStation 5 Slim'],
    ['Edition', 'Digital Edition'],
    ['Disc Drive', 'No'],
    ['Storage Type', 'SSD'],
    ['Internal Memory', '1 TB'],
    ['Controller Included', 'DualSense wireless controller'],
    ['Maximum Resolution', '4K'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Compact design', description: 'Smaller and lighter than the launch PS5, so it fits more easily under a TV.' },
    { title: 'Fast loading', description: 'The built-in SSD gets you into games in seconds.' },
    { title: 'Immersive controller', description: 'DualSense haptics and adaptive triggers add feel to every game.' },
    { title: 'Keep in mind', description: 'There is no disc drive; physical games need the separately sold disc drive add-on.' },
  ],
  reviews: [
    { name: 'Ali S.', rating: 5, ago: '3 days ago', title: 'Arrived next day', body: 'Sealed box, set up in minutes. Much quieter and smaller than my old PS5.', verified: true, helpful: 32 },
    { name: 'Jason D.', rating: 5, ago: '2 weeks ago', title: 'Loads so fast', body: 'Games start almost instantly. The DualSense feels amazing in racing games.', verified: true, helpful: 17 },
    { name: 'Mohammed E.', rating: 5, ago: '3 weeks ago', title: 'Perfect gift', body: 'Bought it for my son, well packed and genuine. He has not put it down.', verified: true, helpful: 8 },
    { name: 'Priya V.', rating: 4, ago: '1 month ago', title: 'Watch your storage', body: 'Great console. Downloads are big, so I am already managing space.', verified: true, helpful: 12 },
  ],
  aiSummary: [
    'Buyers love the compact size and fast loading',
    'The DualSense controller is a standout',
    'Some note large downloads fill the storage quickly',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 18450,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  officialStore: true,
  dealTag: 'Limited Time Deal',
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(425)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(567)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
});
