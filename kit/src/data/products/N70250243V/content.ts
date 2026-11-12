import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** HUAWEI nova 14 256GB Black with 100W SuperCharge Turbo (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'HUAWEI nova 14 in Black pairs 12GB RAM and 256GB of storage with 100W HUAWEI SuperCharge Turbo, so a short top-up gets you through the day. It is a slim, style-led phone with a camera tuned for portraits and selfies. This Middle East Version supports Dual SIM.',
  featureBullets: [
    '100W HUAWEI SuperCharge Turbo fast charging',
    '12GB RAM and 256GB internal storage',
    'Portrait and selfie-focused camera experience',
    'Dual SIM',
    'Middle East Version',
  ],
  highlights: ['256GB', '12GB RAM', '100W charging'],
  specs: [
    ['Brand', 'HUAWEI'],
    ['Model Name', 'nova 14'],
    ['Colour Name', 'Black'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Fast Charging', '100W HUAWEI SuperCharge Turbo'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Very fast charging', description: '100W HUAWEI SuperCharge Turbo tops up the battery in minutes.' },
    { title: 'Smooth and roomy', description: '12GB RAM and 256GB storage for apps, photos and video.' },
    { title: 'Style-led design', description: 'A slim Black body with a camera tuned for portraits.' },
    { title: 'Keep in mind', description: 'Google Mobile Services are not preinstalled: apps come from HUAWEI AppGallery.' },
  ],
  reviews: [
    { name: 'Nasser F.', rating: 5, ago: '5 days ago', title: 'Charging is crazy fast', body: 'Plug it in while I shower and it is nearly full. Delivered next day, sealed box.', verified: true, helpful: 7, variant: 'Black' },
    { name: 'Anjali R.', rating: 5, ago: '3 weeks ago', title: 'Lovely portraits', body: 'Portrait photos look professional and the phone feels light in the hand.', verified: true, helpful: 4 },
    { name: 'Omar S.', rating: 4, ago: '1 month ago', title: 'Very good overall', body: 'Fast, good screen, great charging. Moving apps over through AppGallery took a while.', verified: true, helpful: 3 },
  ],
  aiSummary: [
    'The 100W fast charging is the most praised feature',
    'Buyers like the portrait camera and light design',
    'App setup via AppGallery takes some time',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(275)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(367)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
