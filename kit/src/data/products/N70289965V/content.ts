import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Nothing Phone 4a 256GB White: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Nothing Phone (4a) continues Nothing\'s distinctive transparent design in the mid-range, with Glyph lights and the clean Nothing OS. This Middle East version in White has 12GB of RAM, 256GB of storage, dual SIM and 5G.',
  featureBullets: [
    'Nothing\'s transparent design in White',
    'Glyph lights for notifications',
    '12GB RAM with 256GB internal storage',
    'Clean Nothing OS on Android',
    'Dual SIM with 5G connectivity',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'Nothing'],
    ['Model Name', 'Phone (4a)'],
    ['Colour Name', 'White'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
    ['Operating System', 'Android (Nothing OS)'],
    ['Charging Type', 'Type-C'],
  ],
  aiOverview: [
    { title: 'Signature look', description: 'The White transparent design and Glyph lights give it a character few phones share.' },
    { title: 'Comfortable headroom', description: '12GB RAM and 256GB of storage keep apps responsive and leave room for media.' },
    { title: 'Clean software', description: 'Nothing OS keeps the interface minimal with few preinstalled apps.' },
    { title: 'Keep in mind', description: 'A white back shows marks from coloured cases over time; a clear case keeps the design visible.' },
  ],
  reviews: [
    {
      name: 'Reem S.',
      rating: 5,
      ago: '1 week ago',
      title: 'Looks amazing in white',
      body: 'The design gets compliments all the time. Smooth and the battery lasts all day.',
      verified: true,
      helpful: 17,
      variant: 'White',
    },
    {
      name: 'Kiran J.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Great all-rounder',
      body: 'Fast, clean software and nice photos. Next-day delivery and well packed.',
      verified: true,
      helpful: 10,
      variant: 'White',
    },
    {
      name: 'Mohammed E.',
      rating: 4,
      ago: '1 month ago',
      title: 'Very good',
      body: 'Excellent value. Only wish the Glyph lights were brighter outdoors.',
      verified: true,
      helpful: 5,
    },
  ],
  aiSummary: [
    'The White transparent design gets frequent compliments',
    'Buyers describe it as smooth with all-day battery',
    'One reviewer wants brighter Glyph lights in sunlight',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(450)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(600)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
