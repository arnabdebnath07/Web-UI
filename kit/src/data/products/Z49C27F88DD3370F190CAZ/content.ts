import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** AirPods Max 2 Purple: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'AirPods Max 2 are Apple over-ear headphones with Active Noise Cancellation, Transparency mode and Personalised Spatial Audio. The knit-mesh canopy and memory-foam ear cushions spread the weight for comfortable listening, and they pair with your iPhone in a tap. This is the Purple colour.',
  featureBullets: [
    'Over-ear design with memory-foam ear cushions',
    'Active Noise Cancellation and Transparency mode',
    'Personalised Spatial Audio with dynamic head tracking',
    'Digital Crown for volume and playback',
    'One-tap setup with iPhone',
  ],
  highlights: ['Over-ear', 'Purple'],
  specs: [
    ['Brand', 'Apple'],
    ['Model Name', 'AirPods Max 2'],
    ['Colour', 'Purple'],
    ['Form Factor', 'Over-Ear'],
    ['Connectivity', 'Wireless'],
    ['Noise Cancellation', 'Active Noise Cancellation'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Immersive sound', description: 'Over-ear design with Personalised Spatial Audio for music and films.' },
    { title: 'Noise control', description: 'Active Noise Cancellation for flights and commutes, Transparency to hear what is around you.' },
    { title: 'Comfortable fit', description: 'A mesh canopy and soft ear cushions for long listening sessions.' },
    { title: 'Keep in mind', description: 'Over-ear headphones are larger and heavier than earbuds; check the fit if you travel light.' },
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
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(433)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(577)}</b>. No late fees. <a>Learn more</a>` },
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
