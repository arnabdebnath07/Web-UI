import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Nothing Phone 3a Pro 256GB Grey: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Nothing Phone (3a) Pro brings Nothing\'s transparent design and Glyph lights to the mid-range, with a periscope telephoto camera for real optical zoom. This Middle East version in Grey has 12GB of RAM, 256GB of storage, dual SIM and 5G. It runs Nothing OS, a clean take on Android.',
  featureBullets: [
    'Transparent design with Glyph light interface',
    'Periscope telephoto camera for optical zoom',
    'Snapdragon 7s Gen 3 processor',
    '12GB RAM with 256GB internal storage',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Nothing'],
    ['Model Name', 'Phone (3a) Pro'],
    ['Colour Name', 'Grey'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Processor', 'Snapdragon 7s Gen 3'],
    ['Operating System', 'Android (Nothing OS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Signature design', description: 'The transparent back and Glyph lights show notifications and charging status at a glance.' },
    { title: 'Zoom without the flagship price', description: 'A periscope telephoto camera gives sharper zoomed shots than most phones in its range.' },
    { title: 'Clean software', description: 'Nothing OS keeps Android simple, with very few preinstalled apps.' },
    { title: 'Keep in mind', description: 'The camera module is large, so the phone rocks slightly when laid flat on a table.' },
  ],
  reviews: [
    {
      name: 'Hamza Y.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Zoom is the highlight',
      body: 'Surprised by how good the zoom photos are at this price. The Glyph lights are fun and actually useful for calls.',
      verified: true,
      helpful: 27,
      variant: 'Grey',
    },
    {
      name: 'Sneha V.',
      rating: 4,
      ago: '1 month ago',
      title: 'Smooth and clean',
      body: 'Nothing OS is clean and fast. Battery lasts a day with moderate use. Box was sealed and arrived next day.',
      verified: true,
      helpful: 15,
      variant: 'Grey',
    },
    {
      name: 'Daniel W.',
      rating: 4,
      ago: '2 months ago',
      title: 'Good, a bit bulky',
      body: 'Great camera and display. The camera bump is big, so I added a case to keep it flat on the desk.',
      verified: true,
      helpful: 8,
    },
  ],
  aiSummary: [
    'Reviewers highlight the periscope zoom camera as standout for the price',
    'Nothing OS is praised for being clean and fast',
    'A few mention the large camera bump',
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
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  discountTags: [
    { title: 'Extra 10% off', code: 'CODE: GLYPH10' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(363)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(483)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70176681V', 'p11'],
});
