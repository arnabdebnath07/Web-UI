import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** HUAWEI Pura 80 Ultra 512GB Prestige Gold (Middle East Version): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'HUAWEI Pura 80 Ultra is the camera-focused flagship of the Pura line, here in Prestige Gold with 16GB RAM and 512GB of storage. Its XMAGE camera system is built for detailed photos, zoom and low light. This Middle East Version supports Dual SIM.',
  featureBullets: [
    'Top model of the HUAWEI Pura 80 series',
    'XMAGE camera system for zoom and low-light photos',
    '16GB RAM and 512GB internal storage',
    'Prestige Gold finish',
    'Middle East Version with Dual SIM',
  ],
  highlights: ['512GB', '16GB RAM'],
  specs: [
    ['Brand', 'HUAWEI'],
    ['Model Name', 'Pura 80 Ultra'],
    ['Colour Name', 'Prestige Gold'],
    ['RAM Size', '16 GB'],
    ['Internal Memory', '512 GB'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Camera first', description: 'The XMAGE camera system targets detail, zoom and night photography.' },
    { title: 'Plenty of room', description: '16GB RAM and 512GB storage for multitasking and large photo libraries.' },
    { title: 'Premium finish', description: 'Prestige Gold gives it a distinctive, upscale look.' },
    { title: 'Keep in mind', description: 'Google Mobile Services are not preinstalled: apps come from HUAWEI AppGallery.' },
  ],
  reviews: [
    { name: 'Majid L.', rating: 5, ago: '1 week ago', title: 'Camera is on another level', body: 'Zoom shots of the Burj from across the creek were sharp. Delivered next day in a beautiful box.', verified: true, helpful: 9, variant: 'Prestige Gold' },
    { name: 'Chen Y.', rating: 4, ago: '3 weeks ago', title: 'Great hardware', body: 'Fast and the gold looks elegant. Took an evening to move my apps over through AppGallery.', verified: true, helpful: 5 },
    { name: 'Dina S.', rating: 4, ago: '1 month ago', title: 'Night photos are excellent', body: 'Low-light photos are the best I have taken on a phone. It is a bit heavy with the case on.', verified: true, helpful: 3 },
    { name: 'Rashid O.', rating: 5, ago: '2 months ago', title: 'Premium feel', body: 'Build quality and screen are excellent. Battery lasts me well into the next morning.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'The camera, especially zoom and night shots, is the standout',
    'Buyers describe the build and finish as premium',
    'Some needed time to set up apps via AppGallery',
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
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(825)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1100)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
