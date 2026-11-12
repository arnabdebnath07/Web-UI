import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** vivo Y05 4G 4GB RAM 128GB Black with exclusive neckband: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The vivo Y05 4G is an affordable AI smartphone with 4GB of RAM and 128GB of storage for everyday calls, chats and videos. This bundle comes with an exclusive neckband for music and calls. This Middle East Version comes in Black with dual SIM support.',
  featureBullets: [
    'Bundle includes an exclusive neckband',
    'AI features for everyday tasks',
    '4GB RAM and 128GB internal storage',
    '4G dual SIM connectivity',
    'Black finish, Middle East Version',
  ],
  highlights: ['128GB', '4GB RAM', 'With neckband'],
  specs: [
    ['Brand', 'vivo'],
    ['Model Name', 'Y05'],
    ['Colour', 'Black'],
    ['RAM Size', '4 GB'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '4G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['In the Box', 'vivo Y05, exclusive neckband'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Bundle value',
      description: 'An exclusive neckband is included for music and hands-free calls.',
    },
    { title: 'Everyday storage', description: '128GB is plenty for photos, chats and apps at this price.' },
    { title: 'Easy to own', description: 'An affordable, straightforward phone for daily use.' },
    {
      title: 'Keep in mind',
      description: 'This model is 4G only and suits everyday use rather than demanding games.',
    },
  ],
  reviews: [
    {
      name: 'Shabana T.',
      rating: 5,
      ago: '1 week ago',
      title: 'Good deal with the neckband',
      body: 'Phone and neckband arrived together the next day. Battery lasts all day.',
      verified: true,
      helpful: 8,
      variant: 'Black',
    },
    {
      name: 'Ali R.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Fine for basics',
      body: 'Good for calls, WhatsApp and YouTube. Neckband sound is decent.',
      verified: true,
      helpful: 5,
      variant: 'Black',
    },
    {
      name: 'Peter W.',
      rating: 3,
      ago: '1 month ago',
      title: 'Okay phone',
      body: 'Does the basics but slows down with many apps open. Good for the price.',
      verified: true,
      helpful: 3,
    },
  ],
  aiSummary: [
    'Buyers like getting a neckband with the phone.',
    'It handles calls, chats and video well.',
    'Some notice slowdowns with many apps open.',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(135)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(180)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
