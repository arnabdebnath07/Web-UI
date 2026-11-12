import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Google Pixel 10a 256GB Lavender (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Google Pixel 10a brings the Pixel camera and clean Android experience to a more affordable phone. This Lavender International Version has 8GB RAM, 256GB of storage and 5G, with Google AI features built in. A simple pick if you want Pixel photos without the Pro price.',
  featureBullets: [
    '8GB RAM and 256GB internal storage',
    'Pixel camera with Google photo tools',
    'Clean Android with Google AI features',
    '5G connectivity',
    'Lavender finish, International Version',
  ],
  highlights: ['256GB', '8GB RAM'],
  specs: [
    ['Brand', 'Google'],
    ['Model Name', 'Pixel 10a'],
    ['Colour Name', 'Lavender'],
    ['RAM Size', '8 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Charging Type', 'Type-C'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Pixel camera for less', description: 'Google photo processing and editing tools at a mid-range price.' },
    { title: 'Clean software', description: 'Android as Google designed it, with Google AI features built in.' },
    { title: 'Plenty of storage', description: '256GB for photos, videos and apps.' },
    { title: 'Keep in mind', description: 'International Version: no charger in the box, and some Google features may not be available in the UAE.' },
  ],
  reviews: [
    { name: 'Sophie B.', rating: 5, ago: '1 week ago', title: 'Perfect mid-range phone', body: 'Photos look just like my old Pixel Pro. Lavender is soft and pretty. Arrived next day.', verified: true, helpful: 5, variant: 'Lavender' },
    { name: 'Ravi K.', rating: 5, ago: '3 weeks ago', title: 'Smooth and simple', body: 'Clean Android with no clutter, and 256GB is plenty for me.', verified: true, helpful: 3 },
    { name: 'Huda J.', rating: 4, ago: '1 month ago', title: 'Great value', body: 'Very happy with the camera. Bring your own charger as there is none in the box.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers say the camera rivals pricier Pixels',
    'Clean, clutter-free software is a highlight',
    'No charger is included in the box',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(490)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(654)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70338936V', 'p11'],
});
