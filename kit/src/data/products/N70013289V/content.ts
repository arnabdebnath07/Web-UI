import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Google Pixel 8 256GB Obsidian (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Google Pixel 8 in Obsidian is a compact Android phone powered by the Google Tensor G3 chip, with 8GB RAM and 256GB of storage. Pixel camera features like Best Take and Magic Editor help you get the shot, and Google promises seven years of OS and security updates. This International Version supports 5G.',
  featureBullets: [
    'Google Tensor G3 chip with 8GB RAM',
    '256GB internal storage',
    '50MP main camera with Pixel photo tools',
    'Seven years of OS and security updates',
    'Compact size, 5G, International Version',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'Google'],
    ['Model Name', 'Pixel 8'],
    ['Colour Name', 'Obsidian'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Processor', 'Google Tensor G3'],
    ['Screen Size', '6.2 in'],
    ['Primary Camera Resolution', '50 MP'],
    ['Charging Type', 'Type-C'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Smart camera', description: 'Pixel tools such as Best Take and Magic Editor fix group shots and edits.' },
    { title: 'Long support', description: 'Google commits to seven years of OS and security updates.' },
    { title: 'Easy to hold', description: 'A compact design that is comfortable for one-handed use.' },
    { title: 'Keep in mind', description: 'International Version: no charger in the box, and warranty may differ from regional units.' },
  ],
  reviews: [
    { name: 'Tom E.', rating: 4, ago: '2 weeks ago', title: 'Clean Android, great photos', body: 'Love the camera and the clean software. Came the next day, well packed.', verified: true, helpful: 3, variant: 'Obsidian' },
    { name: 'Rania D.', rating: 3, ago: '1 month ago', title: 'Gets warm', body: 'Good phone and nice size, but it warms up during long video calls in the heat.', verified: true, helpful: 2 },
    { name: 'Imran F.', rating: 3, ago: '2 months ago', title: 'Battery is average', body: 'Photos are excellent but I need to charge by evening with heavy use.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers like the camera and clean Android software',
    'Battery life is described as average with heavy use',
    'Some notice the phone warming up under load',
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
    { icon: 'warranty', text: '1 Year Seller Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(450)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(600)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
