import payInstallments from '@assets/products/iphone-17-pro/pay-installments.webp';
import payNoonOne from '@assets/products/iphone-17-pro/pay-noon-one-card.webp';
import paySplit from '@assets/products/iphone-17-pro/pay-split.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Captured from noon.com/uae-en for iPhone 17 Pro 1TB Silver (offer edbc4677f7e4775c, Oct 2026): specs and offer-level SD content.
 *  The description, highlights and reviews are the family's (families/iphone-17-pro.ts). */
export default defineContent({
  source: { kind: 'captured', note: 'noon.com/uae-en, Oct 2026' },
  specs: [
    ['Memory Type', 'No Expandable Memory'],
    ['Secondary Camera Resolution', '18 MP'],
    ['SIM Count', 'Dual SIM'],
    ['RAM Size', '12 GB'],
    ['Battery Size', '3988 mAh'],
    ['Internal Memory', '1 TB'],
    ['Screen Size', '6.3 in'],
    ['Version', 'International Version'],
    ['Sim Type', 'Nano + eSIM'],
    ['Primary Camera Resolution', '48 MP'],
    ['Charging Type', 'Type-C'],
    ['Operating System', 'iOS'],
    ['Item Condition', 'New'],
    ['Audio Jack', 'Type-C'],
    ['Network Type', '5G'],
    ['Fast Charging', 'Yes'],
    ['Flash', 'Dual Tone flash'],
    ['Number of Cores', 'Hexa Core'],
    ['Primary Camera Feature', 'Triple'],
    ['Primary Camera (MP)', '48+48+48MP'],
  ],
  // "Coupons" row (page text) → discount_tags
  discountTags: [
    { title: 'Extra 10% off', code: 'CODE: SALE200' },
    { title: 'Extra 10% off', code: 'CODE: FAB10' },
    { title: 'Extra 15% off', code: 'CODE: RAK50' },
  ],
  // "Get it by 12 Oct · Order in 16h 26m"
  delivery: 'Get it by <b>12 Oct</b>',
  orderWithinMin: 16 * 60 + 26,
  // "or GET IN 1 HR 22 MINS  6549.00 ↗" (supermall / rocket offer) → buying_options
  buyingOptions: [{ code: 'rocket', html: 'GET IN <b>1 HR 22 MINS</b>', price: 6549 }],
  // "Payment Discount"
  payments: {
    title: 'Payment Discount',
    items: [
      { logo: payNoonOne, html: `Earn <b>${money(327.45)}</b> cashback with the noon One Credit Card. <a>Apply now</a>` },
      { logo: payNoonOne, html: `Earn <b>${money(327.45)}</b> cashback with the Mashreq noon Credit Card. <a>Apply now</a>` },
      { logo: paySplit, html: 'Split in up to 6 payments <a>View details</a>' },
      { logo: payInstallments, html: 'Buy now, pay in monthly installments later with select cards. <a>View details</a>' },
    ],
  },
  // reinforcement badges (icons inferred: the page's badge icons were not captured)
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'tick', title: 'High Rated Seller' },
    { icon: 'returnable', title: 'Low Returns' },
    { icon: 'verified', title: 'Secure Transaction' },
    { icon: 'warranty', title: '1 year manufacturer warranty' },
    { icon: 'returnable', title: 'Easy and Hassle Free Returns' },
  ],
  // "Sold by KKGSM 4.9 · 98% Positive Ratings · Item as shown 100% · Partner since 2+ Years · Low return seller"
  seller: {
    name: 'KKGSM',
    rating: 4.9,
    ratingCount: 171,
    positive: 98,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 100, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 2 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  fbt: ['N70211593V', 'Z7D7DFFC169EA7DE817A2Z', 'Z49C27F88DD3370F190CAZ', 'ZF1A24406870D3964331CZ'],
});
