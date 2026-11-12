import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy S25 Ultra 1TB Titanium Black (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'This Galaxy S25 Ultra in Titanium Black has 1TB of storage, enough for years of 8K-ready video, photos and offline media. It runs on the Snapdragon 8 Elite for Galaxy with 12GB RAM, shoots with a 200MP main camera and keeps the built-in S Pen. This is the International Version with Dual SIM and 5G.',
  featureBullets: [
    'Huge 1TB internal storage',
    '12GB RAM with Snapdragon 8 Elite for Galaxy',
    '200MP main camera and Galaxy AI tools',
    'Built-in S Pen in a titanium frame',
    'International Version, Dual SIM, 5G',
  ],
  highlights: ['1TB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy S25 Ultra'],
    ['Colour Name', 'Titanium Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '1 TB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Processor', 'Snapdragon 8 Elite for Galaxy'],
    ['Screen Size', '6.9 in'],
    ['Primary Camera Resolution', '200 MP'],
    ['Battery Size', '5000 mAh'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Storage for everything', description: '1TB means you rarely need to offload photos, videos or games.' },
    { title: 'Flagship speed', description: 'Snapdragon 8 Elite for Galaxy with 12GB RAM handles heavy apps and gaming.' },
    { title: 'S Pen included', description: 'The stylus lives inside the phone for notes and precise edits.' },
    { title: 'Keep in mind', description: 'International Version: warranty is handled by the seller, and no charger is included in the box.' },
  ],
  reviews: [
    { name: 'Karim J.', rating: 5, ago: '1 week ago', title: 'Never worrying about storage again', body: 'I shoot a lot of video for work and 1TB was the reason I bought this. Came sealed with the next-day delivery.', verified: true, helpful: 29, variant: '1TB' },
    { name: 'Nadia F.', rating: 5, ago: '3 weeks ago', title: 'Fast and beautiful', body: 'Titanium Black looks classy and the screen is the best I have used. Setup in English and Arabic was easy.', verified: true, helpful: 14 },
    { name: 'Rohan P.', rating: 4, ago: '1 month ago', title: 'Excellent, bring a charger', body: 'Great phone overall. There is no charger in the box, so I am using my existing USB-C adapter.', verified: true, helpful: 7 },
  ],
  aiSummary: [
    'Buyers value the 1TB storage for video and media',
    'The display and build quality are frequently praised',
    'Some note the International Version needs your own charger',
  ],
  seller: {
    name: 'GSM+',
    rating: 4.7,
    ratingCount: 1890,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 4 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Seller Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(913)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1217)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70142941V', 'p11'],
});
