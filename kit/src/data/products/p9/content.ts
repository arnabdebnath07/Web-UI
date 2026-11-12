import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Lenovo IdeaPad Slim 5 14" OLED Ryzen 7 16GB 1TB: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'The IdeaPad Slim 5 pairs a 14-inch OLED display with an AMD Ryzen 7 processor in a thin, portable body. 16GB of RAM keeps multitasking smooth, and the 1TB SSD leaves plenty of room for files, photos and apps. A good fit for study, office work and streaming.',
  featureBullets: [
    '14-inch OLED display with deep blacks and vivid colour',
    'AMD Ryzen 7 processor for everyday and multitasking work',
    '16GB RAM for smooth switching between apps',
    '1TB SSD for fast boot and plenty of storage',
    'Slim, light design that fits in a backpack',
  ],
  highlights: ['16GB RAM', '1TB SSD', '14" OLED'],
  specs: [
    ['Brand', 'Lenovo'],
    ['Model Name', 'IdeaPad Slim 5'],
    ['Display Size', '14 in'],
    ['Display Type', 'OLED'],
    ['Processor Brand', 'AMD'],
    ['Processor Type', 'Ryzen 7'],
    ['RAM Size', '16 GB'],
    ['Storage Type', 'SSD'],
    ['Internal Memory', '1 TB'],
    ['Item Condition', 'New'],
  ],
  aiOverview: [
    { title: 'Display', description: 'The OLED panel gives rich colour and contrast for films, photos and documents.' },
    { title: 'Performance', description: 'Ryzen 7 with 16GB RAM handles office apps, browsing and light creative work with ease.' },
    { title: 'Portability', description: 'A slim 14-inch body that is easy to carry between home, office and class.' },
    { title: 'Keep in mind', description: 'Check the keyboard layout and operating system language in the box before setting up.' },
  ],
  reviews: [
    { name: 'Sara H.', rating: 5, ago: '1 week ago', title: 'Stunning screen', body: 'The OLED screen is the best I have used on a laptop at this price. Delivered next day, well packed.', verified: true, helpful: 21 },
    { name: 'Vikram P.', rating: 4, ago: '3 weeks ago', title: 'Fast and light', body: 'Boots in seconds and handles lots of browser tabs. Speakers are just average.', verified: true, helpful: 11 },
    { name: 'Khalid B.', rating: 4, ago: '1 month ago', title: 'Great for work', body: 'Running Office and Teams all day without issues. Battery gets me through most of a working day.', verified: true, helpful: 6 },
    { name: 'Maria L.', rating: 5, ago: '2 months ago', title: 'Lots of storage', body: '1TB is plenty for my photos. Light enough to carry to university every day.', verified: true, helpful: 3 },
  ],
  aiSummary: [
    'The OLED display is the most praised feature',
    'Buyers find it fast and light for daily work and study',
    'Some say the speakers are only average',
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
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: LAPTOP10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(750)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(1000)}</b>. No late fees. <a>Learn more</a>` },
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
