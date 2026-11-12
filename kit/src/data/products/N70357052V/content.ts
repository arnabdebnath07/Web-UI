import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Infinix Smart 20 128GB Sunlike Orange: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Infinix Smart 20 is an affordable everyday phone in a bright Sunlike Orange. It has 4GB of RAM plus 4GB of virtual memory and 128GB of storage for apps, photos and messages, with dual SIM 4G support. A good first smartphone or a reliable second phone. Middle East version.',
  featureBullets: [
    '4GB RAM plus 4GB virtual RAM',
    '128GB internal storage',
    'Dual SIM, 4G LTE',
    'Bright Sunlike Orange finish',
    'Middle East version',
  ],
  highlights: ['128GB', '4+4GB RAM'],
  specs: [
    ['Brand', 'Infinix'],
    ['Model Name', 'Smart 20'],
    ['Colour Name', 'Sunlike Orange'],
    ['RAM Size', '4 GB'],
    ['Extended RAM', '4 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '4G LTE'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Everyday essentials', description: 'Handles calls, messaging, social apps and video at a budget price.' },
    { title: 'Good storage', description: '128GB is generous for an entry phone, with room for photos and apps.' },
    { title: 'Eye-catching colour', description: 'The Sunlike Orange finish stands out from the usual black and grey.' },
    { title: 'Keep in mind', description: 'The 8GB in the title is 4GB of physical RAM plus 4GB of virtual RAM, and the phone is 4G only.' },
  ],
  reviews: [
    {
      name: 'Grace L.',
      rating: 5,
      ago: '1 week ago',
      title: 'Perfect for my mother',
      body: 'Simple to use and the orange colour is lovely. Delivered next day and the box was sealed.',
      verified: true,
      helpful: 24,
      variant: 'Sunlike Orange',
    },
    {
      name: 'Bilal Q.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Good budget phone',
      body: 'WhatsApp, YouTube and calls all work well. Not for heavy games, but it was never meant to be.',
      verified: true,
      helpful: 15,
    },
    {
      name: 'Anita D.',
      rating: 4,
      ago: '1 month ago',
      title: 'Great value',
      body: 'Battery lasts all day and storage is plenty. Camera is fine for everyday photos.',
      verified: true,
      helpful: 8,
    },
  ],
  aiSummary: [
    'Buyers see it as strong value for an everyday or first smartphone.',
    'Battery life and storage get positive mentions.',
    'Fine for messaging and video, not intended for heavy gaming.',
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(130)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(174)}</b>. No late fees. <a>Learn more</a>` },
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
  fbt: ['N70357052V', 'home-maynos-mount'],
});
