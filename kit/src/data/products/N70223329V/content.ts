import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** HUAWEI nova 14 Pro 512GB White (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'HUAWEI nova 14 Pro is a style-focused smartphone with a strong emphasis on selfies and portraits. This Middle East Version in White comes with 12GB RAM and 512GB of storage, Dual SIM and 4G connectivity. It is a good fit if you want lots of storage and a sleek design at a mid-range price.',
  featureBullets: [
    '12GB RAM and 512GB internal storage',
    'Portrait and selfie-focused camera experience',
    'Sleek White design',
    'Dual SIM with 4G',
    'Middle East Version',
  ],
  highlights: ['512GB', '12GB RAM'],
  specs: [
    ['Brand', 'HUAWEI'],
    ['Model Name', 'nova 14 Pro'],
    ['Colour Name', 'White'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '512 GB'],
    ['Network Type', '4G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Lots of storage', description: '512GB holds years of photos, videos and apps.' },
    { title: 'Made for portraits', description: 'Camera tuning in the nova line favours selfies and portraits.' },
    { title: 'Smooth everyday use', description: '12GB RAM keeps social apps and multitasking responsive.' },
    { title: 'Keep in mind', description: 'This model is 4G, not 5G, and Google Mobile Services are not preinstalled: apps come from HUAWEI AppGallery.' },
  ],
  reviews: [
    { name: 'Hiba A.', rating: 5, ago: '1 week ago', title: 'Selfies look amazing', body: 'Front camera photos are sharp and natural. White colour looks clean and premium. Delivered the next day.', verified: true, helpful: 6, variant: 'White' },
    { name: 'Joseph N.', rating: 4, ago: '3 weeks ago', title: 'Great value', body: 'Huge storage for the price and the phone feels fast. Took a little time to install apps through AppGallery.', verified: true, helpful: 4 },
    { name: 'Salma R.', rating: 4, ago: '1 month ago', title: 'Nice design', body: 'Slim and light, battery lasts all day. I wish it had 5G, but 4G speeds are fine for me.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers praise the selfie camera and design',
    'The 512GB storage is seen as strong value',
    'Some mention the lack of 5G and app setup via AppGallery',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(323)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(430)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
