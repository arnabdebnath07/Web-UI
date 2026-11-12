import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** vivo V70 5G 12GB RAM 256GB Dune Gray: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: {
    kind: 'written',
    note: 'demo content for the prototype; specs limited to the title and well-established facts',
  },
  description: 'The vivo V70 is a style-focused 5G smartphone in vivo\'s V series, known for portrait photography and slim designs. It comes with 12GB of RAM and 256GB of storage for smooth multitasking and plenty of space for photos and videos. This Middle East Version comes in Dune Gray with dual SIM support.',
  featureBullets: [
    'vivo V series, focused on portraits and design',
    '12GB RAM for smooth multitasking',
    '256GB internal storage',
    '5G dual SIM connectivity',
    'Dune Gray finish, Middle East Version',
  ],
  highlights: ['256GB', '12GB RAM', '5G'],
  specs: [
    ['Brand', 'vivo'],
    ['Model Name', 'V70'],
    ['Colour', 'Dune Gray'],
    ['RAM Size', '12 GB'],
    ['Internal Memory', '256 GB'],
    ['Network Type', '5G'],
    ['SIM Count', 'Dual SIM'],
    ['Version', 'Middle East Version'],
    ['Operating System', 'Android'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    {
      title: 'Portrait-focused',
      description: 'The V series is built around flattering portrait and selfie photos.',
    },
    { title: 'Premium memory', description: '12GB RAM and 256GB storage for a smooth, roomy experience.' },
    { title: 'Elegant design', description: 'Dune Gray gives it a refined, neutral look.' },
    {
      title: 'Keep in mind',
      description: 'Few ratings so far; reviews may change as more buyers share feedback.',
    },
  ],
  reviews: [
    {
      name: 'Reem H.',
      rating: 5,
      ago: '1 week ago',
      title: 'Beautiful portraits',
      body: 'Portrait photos look professional and the phone feels slim and premium. Delivered next day.',
      verified: true,
      helpful: 4,
      variant: 'Dune Gray',
    },
    {
      name: 'Nikhil B.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Elegant and fast',
      body: 'The Dune Gray colour is classy. Very smooth and the battery lasts all day.',
      verified: true,
      helpful: 2,
      variant: 'Dune Gray',
    },
    {
      name: 'Omar S.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Great phone, pricey',
      body: 'Excellent camera and screen. A little expensive but worth it overall.',
      verified: true,
      helpful: 1,
    },
  ],
  aiSummary: [
    'Portrait photos are the standout feature for buyers.',
    'The slim design and Dune Gray colour feel premium.',
    'One buyer finds it a little expensive.',
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 18420,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 97, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
      { kind: 'badge', title: 'Low return seller' },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(625)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(833)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  fbt: ['N70340018V', 'p11', 'home-maynos-mount'],
});
