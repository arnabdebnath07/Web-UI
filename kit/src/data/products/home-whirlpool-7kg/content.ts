import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Whirlpool 7 kg Magic Clean washing machine: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'A Whirlpool Magic Clean washing machine with a 7 kg capacity, sized for couples and small families. Fully automatic programmes take care of everyday loads, and a range of wash options covers cottons, delicates and quick washes.',
  featureBullets: [
    '7 kg capacity for everyday family loads',
    'Fully automatic washing',
    'Multiple programmes for different fabrics',
    'Easy-to-use control panel',
    'Free delivery in the UAE',
  ],
  highlights: ['7 kg', 'Fully automatic'],
  specs: [
    ['Brand', 'Whirlpool'],
    ['Model Name', 'Magic Clean'],
    ['Product Type', 'Washing machine'],
    ['Washing Capacity', '7 kg'],
    ['Operation', 'Fully automatic'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Family size', description: 'A 7 kg drum suits two to four people washing a few times a week.' },
    { title: 'Simple to use', description: 'Clear programmes make daily washing straightforward.' },
    { title: 'Keep in mind', description: 'Measure your space and check water and power points before delivery; installation may be extra.' },
  ],
  reviews: [
    { name: 'Suresh N.', rating: 5, ago: '1 week ago', title: 'Delivered next day', body: 'Arrived the next day with no damage. Washes well and is not noisy.', verified: true, helpful: 12 },
    { name: 'Hiba A.', rating: 4, ago: '3 weeks ago', title: 'Good for our family', body: 'Perfect size for three of us. Clothes come out clean, the spin is a bit loud.', verified: true, helpful: 6 },
    { name: 'Paul G.', rating: 4, ago: '1 month ago', title: 'Value for money', body: 'Does everything we need at a good price. Took a while to learn the programmes.', verified: true, helpful: 3 },
  ],
  aiSummary: [
    'Buyers find it a good size for small families',
    'Clean results and good value are common praise',
    'Some say the spin cycle is loud',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 18450,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  dealTag: 'Limited Time Deal',
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(225)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(300)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
});
