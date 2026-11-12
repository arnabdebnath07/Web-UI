import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** HUAWEI nova 14i 256GB Black (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'HUAWEI nova 14i is an affordable everyday smartphone with 8GB RAM and 256GB of storage, here in Black. It handles social media, video and messaging comfortably, and Dual SIM lets you keep work and personal numbers on one phone. This is the Middle East Version.',
  featureBullets: [
    '8GB RAM and 256GB internal storage',
    'Dual SIM for two numbers on one phone',
    'Classic Black finish',
    'Middle East Version',
    'Great value for everyday use',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'HUAWEI'],
    ['Model Name', 'nova 14i'],
    ['Colour Name', 'Black'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Everyday performer', description: '8GB RAM keeps messaging, social and video apps smooth.' },
    { title: 'Space to spare', description: '256GB storage for photos, videos and apps.' },
    { title: 'Budget friendly', description: 'Solid features at an entry-level price.' },
    { title: 'Keep in mind', description: 'Google Mobile Services are not preinstalled: apps come from HUAWEI AppGallery.' },
  ],
  reviews: [
    { name: 'Ali M.', rating: 4, ago: '1 week ago', title: 'Good phone for the money', body: 'Bought it for my father. Big storage, simple to use, and it arrived the next day.', verified: true, helpful: 11, variant: 'Black' },
    { name: 'Grace T.', rating: 5, ago: '2 weeks ago', title: 'Battery is great', body: 'Easily lasts a day and a half with normal use. Screen is bright and clear.', verified: true, helpful: 8 },
    { name: 'Zaid K.', rating: 3, ago: '1 month ago', title: 'Okay, but app setup', body: 'Hardware is fine for the price, but some banking apps took extra steps to install.', verified: true, helpful: 6 },
  ],
  aiSummary: [
    'Buyers see it as strong value for the price',
    'Battery life and storage get positive mentions',
    'Some apps take extra steps to install without Google services',
  ],
  seller: {
    name: 'noon',
    rating: 4.8,
    ratingCount: 25840,
    positive: 96,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
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
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(188)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(250)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
