import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Apple Watch Series 10 GPS 46mm Jet Black Aluminium: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Apple Watch Series 10 has a thinner design and a larger, brighter wide-angle display that is easier to read at a glance. This GPS model comes in a 46mm Jet Black aluminium case with a Sport Band. Track workouts, sleep and heart rate, and get notifications and calls from your iPhone right on your wrist.',
  featureBullets: [
    'Thin design with a large, bright display',
    '46mm Jet Black aluminium case with Sport Band',
    'GPS model for tracking runs, walks and rides',
    'Heart rate, sleep and activity tracking',
    'Notifications, calls and Apple Pay on your wrist',
    'Fast charging',
  ],
  highlights: ['46mm', 'GPS'],
  specs: [
    ['Brand', 'Apple'],
    ['Model Name', 'Apple Watch Series 10'],
    ['Case Size', '46 mm'],
    ['Case Material', 'Aluminium'],
    ['Colour', 'Jet Black'],
    ['Band Type', 'Sport Band'],
    ['Connectivity', 'GPS'],
    ['Operating System', 'watchOS'],
    ['Compatible With', 'iPhone'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Bigger, brighter screen', description: 'The wide-angle display is easy to read from an angle and outdoors.' },
    { title: 'Health and fitness', description: 'Tracks workouts, heart rate, sleep and daily activity rings.' },
    { title: 'Thin and light', description: 'The aluminium case is comfortable for all-day and overnight wear.' },
    { title: 'Keep in mind', description: 'This is the GPS model without cellular, and it needs an iPhone to set up.' },
  ],
  reviews: [
    {
      name: 'Rashid A.',
      rating: 5,
      ago: '3 weeks ago',
      title: 'Jet Black looks premium',
      body: 'The Jet Black finish looks great and the 46mm screen is easy to read during runs. Arrived the next day, well packed.',
      verified: true,
      helpful: 64,
      variant: '46mm',
    },
    {
      name: 'Neha M.',
      rating: 5,
      ago: '1 month ago',
      title: 'Great for sleep and workouts',
      body: 'I wear it to bed now that it is so thin. Charging is quick, a short top-up in the morning is enough for the day.',
      verified: true,
      helpful: 41,
      variant: '46mm',
    },
    {
      name: 'Tariq B.',
      rating: 4,
      ago: '2 months ago',
      title: 'Very good, battery is a daily charge',
      body: 'Smooth and accurate fitness tracking. I still charge it every day with the always-on display, which is fine for me.',
      verified: true,
      helpful: 22,
      variant: '46mm',
    },
  ],
  aiSummary: [
    'Reviewers love the thin design and the large, bright display.',
    'Fitness and sleep tracking are described as accurate and easy to use.',
    'Most charge it daily, which buyers find manageable thanks to fast charging.',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 48210,
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
  ],
});
