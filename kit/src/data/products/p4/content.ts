import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Philips Series 3000i air purifier: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The Philips Series 3000i air purifier uses a HEPA filter to capture dust, pollen and other fine particles. It shows air quality in real time and can be controlled and monitored from the Philips app, so you can check the air at home from anywhere.',
  featureBullets: [
    'HEPA filter captures dust, pollen and fine particles',
    'Real-time air quality display',
    'Smart app control over Wi-Fi',
    'Automatic mode adjusts fan speed to the air quality',
    'Quiet sleep mode for bedrooms',
  ],
  highlights: ['HEPA filter', 'App control'],
  specs: [
    ['Brand', 'Philips'],
    ['Model Series', 'Series 3000i'],
    ['Product Type', 'Air purifier'],
    ['Filter Type', 'HEPA'],
    ['Connectivity', 'Wi-Fi'],
    ['Smart Control', 'Philips app'],
    ['Air Quality Display', 'Yes'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Cleaner air', description: 'The HEPA filter is effective against dust and pollen, useful during sandy days.' },
    { title: 'Smart control', description: 'Check air quality and change settings from your phone.' },
    { title: 'Keep in mind', description: 'Replacement filters are an ongoing cost; the app shows when one is due.' },
  ],
  reviews: [
    { name: 'Fatima Z.', rating: 5, ago: '1 week ago', title: 'Noticeable difference', body: 'Less dust on surfaces and my allergies are better. The app setup took five minutes.', verified: true, helpful: 16 },
    { name: 'George H.', rating: 4, ago: '3 weeks ago', title: 'Quiet at night', body: 'Sleep mode is almost silent. Auto mode ramps up loudly when cooking though.', verified: true, helpful: 7 },
    { name: 'Anil K.', rating: 4, ago: '1 month ago', title: 'Good, filters cost extra', body: 'Works well in our living room. Keep budget aside for replacement filters.', verified: true, helpful: 9 },
    { name: 'Mona T.', rating: 4, ago: '2 months ago', title: 'Well packed', body: 'Delivered on the promised day in a sealed box. The air quality light is a handy touch.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers notice less dust and fewer allergy symptoms',
    'Sleep mode is quiet, auto mode can get loud',
    'Replacement filter cost is a common note',
  ],
  seller: {
    name: 'HomeMart',
    rating: 4.3,
    ratingCount: 870,
    positive: 88,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 94, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 2 },
    ],
  },
  dealTag: 'Limited Time Deal',
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: HOME10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(163)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(217)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
});
