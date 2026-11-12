import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Samsung Galaxy S26 Ultra 512GB Cobalt Violet (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Galaxy S26 Ultra in Cobalt Violet gives you 12GB RAM and a roomy 512GB of storage for photos, 4K video and games. Galaxy AI tools for translation, writing and photo editing are built in, and the Ultra camera system is made for detail and zoom. This Middle East Version supports Dual SIM and 5G.',
  featureBullets: [
    '512GB internal storage with 12GB RAM',
    'Cobalt Violet finish',
    'Galaxy AI for translation, writing and photo editing',
    'Ultra camera system for detail and zoom',
    'Middle East Version with Dual SIM and 5G',
  ],
  highlights: ['512GB', '12GB RAM'],
  specs: [
    ['Brand', 'Samsung'],
    ['Model Name', 'Galaxy S26 Ultra'],
    ['Colour Name', 'Cobalt Violet'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Room to spare', description: '512GB storage suits heavy photo and video use without constant clean-ups.' },
    { title: 'Galaxy AI built in', description: 'AI tools for translation, writing help and quick photo edits.' },
    { title: 'Standout colour', description: 'Cobalt Violet gives the Ultra a bolder look than the classic black.' },
    { title: 'Keep in mind', description: 'Only one unit left at this price, and no charger is included in the box.' },
  ],
  reviews: [
    { name: 'Reem K.', rating: 5, ago: '1 week ago', title: 'The colour is gorgeous', body: 'Cobalt Violet looks even better in person. Delivered next day, sealed, with the regional warranty.', verified: true, helpful: 19, variant: 'Cobalt Violet' },
    { name: 'Arjun M.', rating: 5, ago: '3 weeks ago', title: '512GB was the right call', body: 'I film my kids a lot and the extra storage means I never have to delete clips. Phone is lightning fast.', verified: true, helpful: 12, variant: '512GB' },
    { name: 'Noura B.', rating: 4, ago: '1 month ago', title: 'Excellent but big', body: 'Brilliant camera and screen. It is a large phone, so I use it with a grip.', verified: true, helpful: 4 },
  ],
  aiSummary: [
    'Buyers love the Cobalt Violet finish',
    'The 512GB storage is valued by video-heavy users',
    'Some find the phone large for one-handed use',
  ],
  seller: {
    name: 'Electronic-Mart',
    rating: 4.5,
    ratingCount: 1560,
    positive: 92,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 3 },
    ],
  },
  dealTag: 'Limited Time Deal',
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(1074)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1431)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
