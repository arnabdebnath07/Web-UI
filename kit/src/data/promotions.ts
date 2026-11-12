import enbdCard from '@assets/pdp/new-pdp/pay-enbd-card.png';
import type { PaymentOffer } from './types';

/**
 * noon-wide promotions: offers that apply to every product, whatever its own content says. The PDP's payment offers card
 * lists these before the product's own payment items (`views/pdp.ts`).
 */

/** Bank card offers (Figma 3499:75437 / New PDP 64:5693: the ENBD noon VISA card image, cover-fit). */
export const bankOffers: PaymentOffer[] = [
  { logo: enbdCard, cover: true, html: '<b>Get extra 5% cashback</b> using ENBD noon VISA credit card <a>Apply Now</a>' },
];
