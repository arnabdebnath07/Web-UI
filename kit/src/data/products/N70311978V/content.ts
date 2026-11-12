import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** TECNO Pova Curve 2 5G 256GB Melting Silver: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The TECNO Pova Curve 2 5G brings a curved-edge display and a Melting Silver finish to the gaming-focused POVA line. 12GB of RAM keeps games and apps running side by side, and 256GB of storage leaves room for large titles and media. This is the Middle East version.',
  featureBullets: [
    'Curved-edge display for an immersive view',
    '12GB RAM for gaming and multitasking',
    '256GB internal storage',
    '5G connectivity',
    'Melting Silver finish',
    'Middle East version',
  ],
  highlights: ['256GB', '12GB RAM', '5G'],
  specs: [
    ['Brand', 'TECNO'],
    ['Model Name', 'Pova Curve 2 5G'],
    ['Colour Name', 'Melting Silver'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['Display', 'Curved'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Curved display', description: 'Edges that curve into the frame give a sleek look and an immersive screen.' },
    { title: 'Room to play', description: '12GB of RAM and 256GB of storage suit gamers who keep several titles installed.' },
    { title: '5G speeds', description: 'Faster downloads and lower lag on supported 5G networks.' },
    { title: 'Keep in mind', description: 'Curved screens need a case and protector made for this model; flat protectors will not fit.' },
  ],
  reviews: [
    {
      name: 'Faisal R.',
      rating: 5,
      ago: '1 week ago',
      title: 'Curved screen looks great',
      body: 'Feels like a much more expensive phone. Games run smoothly and the silver back catches the light nicely.',
      verified: true,
      helpful: 7,
      variant: 'Melting Silver',
    },
    {
      name: 'Neha P.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Fast, but finding a case was hard',
      body: 'Performance is very good for the price. It took me a while to find a screen protector that fits the curved edges.',
      verified: true,
      helpful: 5,
    },
    {
      name: 'Khalid S.',
      rating: 3,
      ago: '1 month ago',
      title: 'Good phone, gets warm',
      body: 'Delivered next day and well packed. It gets warm during long gaming sessions, otherwise fine.',
      verified: true,
      helpful: 3,
    },
  ],
  aiSummary: [
    'The curved display and Melting Silver design are the most praised features.',
    'Gaming and multitasking performance are rated well for the price.',
    'Some buyers mention warmth in long gaming sessions and a hard search for a fitting protector.',
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(400)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(533)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  fbt: ['N70311978V', 'p11'],
});
