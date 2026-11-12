import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Google Pixel 10 Pro Fold 256GB Moonstone (International Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Google Pixel 10 Pro Fold is a book-style foldable that opens into a large inner display for split-screen apps, reading and video. This Moonstone International Version has the Google Tensor G5 chip, 16GB RAM and 256GB of storage, with Gemini and Pixel AI features built in. Dual SIM and 5G come standard, along with seven years of OS and security updates.',
  featureBullets: [
    'Foldable design with a large inner display and a full cover screen',
    'Google Tensor G5 chip with 16GB RAM',
    '256GB internal storage',
    'Gemini and Pixel AI features built in',
    'Seven years of OS and security updates',
    'International Version, Dual SIM, 5G',
  ],
  highlights: ['256GB', '16GB RAM'],
  specs: [
    ['Brand', 'Google'],
    ['Model Name', 'Pixel 10 Pro Fold'],
    ['Colour Name', 'Moonstone'],
    ['RAM Size', '16 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'International Version'],
    ['Operating System', 'Android'],
    ['Processor', 'Google Tensor G5'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Two devices in one', description: 'Use it as a normal phone, or unfold it for a tablet-size screen.' },
    { title: 'Made for multitasking', description: 'Run two apps side by side and drag content between them.' },
    { title: 'AI built in', description: 'Tensor G5 powers Gemini and Pixel AI features on the device.' },
    { title: 'Keep in mind', description: 'Treat the inner screen with care and keep the factory screen protector on.' },
  ],
  reviews: [
    { name: 'George P.', rating: 5, ago: '1 week ago', title: 'My tablet is now redundant', body: 'Reading and email on the big screen is fantastic. Arrived the next day, well packed.', verified: true, helpful: 3, variant: 'Moonstone' },
    { name: 'Mariam E.', rating: 5, ago: '3 weeks ago', title: 'Solid hinge', body: 'The hinge feels sturdy and the Moonstone colour is understated. Split-screen works smoothly.', verified: true, helpful: 2 },
    { name: 'Akash V.', rating: 5, ago: '1 month ago', title: 'Great camera for a foldable', body: 'Photos look like my old Pixel Pro. Using the cover screen for selfies with the main camera is a bonus.', verified: true, helpful: 1 },
  ],
  aiSummary: [
    'Buyers use the inner screen to replace a tablet',
    'The hinge and build feel sturdy',
    'Camera quality is on par with Pixel Pro phones',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(1185)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1580)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
