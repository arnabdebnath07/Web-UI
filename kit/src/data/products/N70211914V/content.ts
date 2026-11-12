import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Google Pixel 10 Pro 256GB Jade (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Google Pixel 10 Pro in Jade runs on the Google Tensor G5 chip with 16GB RAM and 256GB of storage. Gemini and Pixel AI features are built in, and the Pro camera system covers wide, ultrawide and telephoto shots. Google promises seven years of OS and security updates, and this International Version supports Dual SIM and 5G.',
  featureBullets: [
    'Google Tensor G5 chip with 16GB RAM',
    '256GB internal storage',
    'Pro triple camera with telephoto zoom',
    'Gemini and Pixel AI features built in',
    'Seven years of OS and security updates',
    'International Version, Dual SIM, 5G',
  ],
  highlights: ['256GB', '16GB RAM'],
  specs: [
    ['Brand', 'Google'],
    ['Model Name', 'Pixel 10 Pro'],
    ['Colour Name', 'Jade'],
    ['RAM Size', '16 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Processor', 'Google Tensor G5'],
    ['Charging Type', 'Type-C'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'AI at the core', description: 'Tensor G5 runs Gemini and Pixel AI features quickly on the device.' },
    { title: 'Pro camera', description: 'Wide, ultrawide and telephoto lenses for every kind of shot.' },
    { title: 'Long support', description: 'Seven years of OS and security updates from Google.' },
    { title: 'Keep in mind', description: 'International Version: no charger in the box, and some Google features may not be available in the UAE.' },
  ],
  reviews: [
    { name: 'Layla H.', rating: 5, ago: '1 week ago', title: 'Best Pixel yet', body: 'Jade is a lovely colour and the telephoto shots are crisp. Delivered the next day in sealed packaging.', verified: true, helpful: 4, variant: 'Jade' },
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(925)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1233)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70211914V', 'p11', 'home-maynos-mount'],
});
