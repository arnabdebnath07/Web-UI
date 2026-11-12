import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** 60L single door minibar fridge RR60D4ASU, silver: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title' },
  description:
    'A compact single door minibar fridge with 60 litres gross and 45 litres net capacity, finished in silver. An adjustable thermostat, a separate chiller compartment and a big door balcony for bottles make it a practical fit for a bedroom, office or hotel room, and it runs quietly.',
  featureBullets: [
    '60L gross / 45L net capacity',
    'Adjustable thermostat',
    'Separate chiller compartment',
    'Big door balcony for bottles',
    'Low noise operation',
  ],
  specs: [
    ['Model Number', 'RR60D4ASU'],
    ['Type', 'Single Door Minibar'],
    ['Gross Capacity', '60 L'],
    ['Net Capacity', '45 L'],
    ['Colour Name', 'Silver'],
    ['Thermostat', 'Adjustable'],
    ['Chiller Compartment', 'Yes'],
  ],
  reviews: [
    {
      name: 'Vikram S.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Perfect for my room',
      body: 'Fits under the desk and keeps drinks cold. Very quiet, I can sleep with it on.',
      verified: true,
      helpful: 6,
    },
    {
      name: 'Mona A.',
      rating: 4,
      ago: '1 month ago',
      title: 'Good small fridge',
      body: 'Delivered well packed. The chiller is small but handy; the door balcony holds 1.5L bottles.',
      verified: true,
      helpful: 3,
    },
  ],
  seller: {
    name: 'noon',
    rating: 4.6,
    ratingCount: 12840,
    positive: 93,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(82)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(110)}</b>. No late fees. <a>Learn more</a>` },
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
  ],
});
