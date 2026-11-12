import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** realme 15 5G 12GB RAM 256GB Suit Titanium: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The realme 15 5G brings AI features, 5G connectivity, 12GB of RAM and 256GB of storage in a slim design. Built-in AI tools help with editing photos and everyday tasks. This Middle East Version comes in Suit Titanium with dual SIM support.',
  featureBullets: [
    'AI features for photo editing and everyday tasks',
    '12GB RAM for smooth multitasking',
    '256GB internal storage',
    '5G dual SIM connectivity',
    'Suit Titanium finish, Middle East Version',
  ],
  highlights: ['256GB', '12GB RAM'],
  specs: [
    ['Brand', 'realme'],
    ['Model Name', '15 5G'],
    ['Colour', 'Suit Titanium'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'AI on board',
      description: 'Built-in AI tools help tidy up photos and speed up everyday tasks.',
    },
    { title: 'Generous memory', description: '12GB RAM and 256GB storage at a mid-range price.' },
    { title: 'Sleek design', description: 'The Suit Titanium finish gives it a premium look.' },
    {
      title: 'Keep in mind',
      description: 'Some AI features may need an internet connection and a realme account.',
    },
  ],
  reviews: [
    {
      name: 'Rahul P.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Looks premium',
      body: 'The titanium colour looks much more expensive than it is. Smooth and quick in daily use.',
      verified: true,
      helpful: 22,
      variant: 'Suit Titanium',
    },
    {
      name: 'Sara N.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good all-rounder',
      body: 'Battery comfortably lasts the day and the AI eraser in the gallery is fun. Delivery was next day.',
      verified: true,
      helpful: 14,
      variant: 'Suit Titanium',
    },
    {
      name: 'Yousef B.',
      rating: 4,
      ago: '1 month ago',
      title: 'Nice phone, some bloatware',
      body: 'Fast and light, but I had to uninstall a few apps that came preloaded.',
      verified: true,
      helpful: 8,
    },
  ],
  aiSummary: [
    'The Suit Titanium finish is often called premium-looking.',
    'Buyers find daily performance smooth and battery life good.',
    'Some mention preinstalled apps to remove.',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 18420,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(263)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(350)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
