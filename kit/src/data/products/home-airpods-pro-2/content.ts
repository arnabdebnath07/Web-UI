import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Apple AirPods Pro 2 Wireless Earbuds: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'AirPods Pro 2 bring Active Noise Cancellation and Transparency mode to a compact in-ear design. Personalised Spatial Audio and a range of silicone ear tips make them comfortable for long listening sessions, and they connect to your iPhone in a tap.',
  featureBullets: [
    'Active Noise Cancellation and Transparency mode',
    'Personalised Spatial Audio with dynamic head tracking',
    'Touch control for playback and volume',
    'Silicone ear tips in several sizes',
    'Sweat and water resistant',
  ],
  highlights: ['Active Noise Cancellation', 'Wireless'],
  specs: [
    ['Brand', 'Apple'],
    ['Model Name', 'AirPods Pro 2'],
    ['Form Factor', 'In-Ear'],
    ['Connectivity', 'Wireless'],
    ['Noise Cancellation', 'Active Noise Cancellation'],
    ['Colour', 'White'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Quiet when you need it', description: 'Active Noise Cancellation blocks out traffic, offices and cabin noise.' },
    { title: 'Aware when you need it', description: 'Transparency mode lets you hear announcements and conversations without removing them.' },
    { title: 'Easy with iPhone', description: 'One-tap setup and automatic switching between Apple devices.' },
    { title: 'Keep in mind', description: 'Check the charging case type on the box: no power adapter is included.' },
  ],
  reviews: [
    {
      name: 'Hassan Y.',
      rating: 5,
      ago: '1 week ago',
      title: 'Same day delivery, genuine product',
      body: 'Ordered in the morning and had them by evening. Serial number checked out on the Apple site and the noise cancellation is great.',
      verified: true,
      helpful: 58,
    },
    {
      name: 'Lina R.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good sound, great price',
      body: 'Much better price than I expected. Sound is clear and calls are good, the case picks up small scratches though.',
      verified: true,
      helpful: 31,
    },
    {
      name: 'Ahmed N.',
      rating: 4,
      ago: '2 months ago',
      title: 'Comfortable for the gym',
      body: 'They stay in during workouts and survive sweat. Battery lasts my whole gym session and commute.',
      verified: true,
      helpful: 17,
    },
    {
      name: 'Sara T.',
      rating: 4,
      ago: '3 months ago',
      title: 'Nice, fit needs adjusting',
      body: 'Very good noise cancellation. I had to change to the small ear tips, after that they were comfortable.',
      verified: false,
      helpful: 6,
    },
  ],
  aiSummary: [
    'Buyers highlight fast delivery and genuine products at a good price.',
    'Noise cancellation and call quality are frequently praised.',
    'Some mention needing smaller ear tips and the case scratching easily.',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 48210,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  officialStore: true,
  dealTag: 'Limited Time Deal',
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(225)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(300)}</b>. No late fees. <a>Learn more</a>` },
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
