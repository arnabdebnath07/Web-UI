import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** HUAWEI Mate XT 16GB+1TB White: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'HUAWEI Mate XT is a tri-fold smartphone that opens in stages, from a phone to a dual-screen view to a full 10.2-inch HUAWEI X-True display. An advanced precision hinge system keeps the super slim body stable, and MultiView in One lets you run apps side by side. It comes in White with 16GB RAM, 1TB of storage, an Ultra Aperture XMAGE camera and bundled gifts.',
  featureBullets: [
    'Super slim tri-fold design that unfolds to a 10.2-inch display',
    'HUAWEI X-True display with MultiView in One',
    'Advanced precision hinge system',
    'Ultra Aperture XMAGE camera',
    '16GB RAM and 1TB internal storage',
    'Comes with gifts in the box',
  ],
  highlights: ['1TB', '16GB RAM'],
  specs: [
    ['Brand', 'HUAWEI'],
    ['Model Name', 'Mate XT'],
    ['Colour Name', 'White'],
    ['RAM Size', '16 GB'],
    ['Internal Memory', '1 TB'],
    ['Screen Size', '10.2 in'],
    ['Display Type', 'HUAWEI X-True Display'],
    ['Form Factor', 'Tri-fold'],
    ['Camera', 'Ultra Aperture XMAGE Camera'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Three screens in one', description: 'Use it folded as a phone, half open as a dual screen, or fully open as a 10.2-inch tablet.' },
    { title: 'Built for multitasking', description: 'MultiView in One shows several apps at once on the large display.' },
    { title: 'Premium storage', description: '16GB RAM and 1TB storage for media, documents and apps.' },
    { title: 'Keep in mind', description: 'Google Mobile Services are not preinstalled: apps come from HUAWEI AppGallery.' },
  ],
  reviews: [
    { name: 'Khalid S.', rating: 4, ago: '2 weeks ago', title: 'Nothing else like it', body: 'Opening it fully to read documents on the plane is impressive. Packaging was premium and the gifts were included.', verified: true, helpful: 4, variant: 'White' },
    { name: 'Daniel R.', rating: 4, ago: '1 month ago', title: 'Stunning screen, heavy-ish', body: 'The big screen is excellent for video. It is thicker in the pocket than a normal phone when folded.', verified: true, helpful: 3 },
    { name: 'Aisha M.', rating: 3, ago: '1 month ago', title: 'App setup takes effort', body: 'Hardware is amazing, but getting some of my usual apps working took time through AppGallery.', verified: true, helpful: 5 },
    { name: 'Vikram D.', rating: 2, ago: '2 months ago', title: 'Not for me', body: 'Beautiful device, but I missed the Google apps I rely on and the price is hard to justify for daily use.', verified: true, helpful: 2 },
  ],
  aiSummary: [
    'Buyers are impressed by the tri-fold design and large screen',
    'Several mention extra effort to set up apps without Google services',
    'Some feel it is bulky when folded for the price',
  ],
  seller: {
    name: 'Arabian NextTech',
    rating: 4.3,
    ratingCount: 640,
    positive: 88,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 95, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 2 },
    ],
  },
  dealTag: 'Limited Time Deal',
  offerBadges: [
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(2325)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(3100)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
});
