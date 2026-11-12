import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** iPhone 17 Pro 256 GB (eSIM only) Deep Blue 5G With FaceTime - Middle East Version: per-variant demo content written for the prototype (not captured from noon.com).
 *  The description, feature bullets, AI overview, reviews and their summary are the family's (families/iphone-17-pro.ts). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs adapted from the captured iPhone 17 Pro list, limited to the title and well-established facts' },
  specs: [
    ['Model Name', 'iPhone 17 Pro'],
    ['Colour', 'Deep Blue'],
    ['Internal Memory', '256 GB'],
    ['Memory Type', 'No Expandable Memory'],
    ['RAM Size', '12 GB'],
    ['Network Type', '5G'],
    ['Sim Type', 'eSIM only'],
    ['Version', 'Middle East Version'],
    ['Screen Size', '6.3 in'],
    ['Operating System', 'iOS'],
    ['Number of Cores', 'Hexa Core'],
    ['Primary Camera Feature', 'Triple'],
    ['Primary Camera (MP)', '48+48+48MP'],
    ['Secondary Camera Resolution', '18 MP'],
    ['Charging Type', 'Type-C'],
    ['Fast Charging', 'Yes'],
    ['Item Condition', 'New'],
  ],
  seller: {
    name: 'Amanah',
    rating: 4.5,
    ratingCount: 1462,
    positive: 91,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 96, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 4 },
    ],
  },
  offerBadges: [
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'warranty', title: '1 year manufacturer warranty' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Manufacturer Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(1025)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1367)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70211534V', 'Z7D7DFFC169EA7DE817A2Z', 'Z4E7C13D1C7101937B8CEZ', 'ZF1A24406870D3964331CZ', 'Z49C27F88DD3370F190CAZ'],
});
