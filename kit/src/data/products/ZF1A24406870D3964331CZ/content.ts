import tabbyLogo from '@assets/checkout/payment-tabby.webp';
import tamaraLogo from '@assets/checkout/payment-tamara.webp';
import { defineContent } from '../../define';
import { money } from '../../format';

/** Spigen GLAStR EZ Fit privacy screen protector (2 pack): demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'Spigen GLAStR EZ Fit is a tempered glass privacy screen protector for iPhone 17 Pro, iPhone 17 and iPhone 16 Pro. The EZ Fit auto-align tray lines the glass up with the screen for a bubble-free install, and the privacy filter keeps the display hard to read from the side. Two protectors in the pack.',
  featureBullets: [
    'Fits iPhone 17 Pro, iPhone 17 and iPhone 16 Pro',
    'Privacy filter limits side viewing angles',
    'Premium tempered glass',
    'EZ Fit tray with auto-align for easy installation',
    'Pack of 2 screen protectors',
  ],
  highlights: ['Privacy', '2 pack'],
  specs: [
    ['Brand', 'Spigen'],
    ['Model Name', 'GLAStR EZ Fit Privacy'],
    ['Compatible Phone Model', 'iPhone 17 Pro, iPhone 17, iPhone 16 Pro'],
    ['Material', 'Tempered Glass'],
    ['Screen Protector Type', 'Privacy'],
    ['Number of Pieces', '2'],
    ['Installation', 'Auto Align tray'],
  ],
  aiOverview: [
    { title: 'Privacy on the go', description: 'Keeps your screen hard to read for people beside you on the metro or in a meeting.' },
    { title: 'Easy install', description: 'The alignment tray positions the glass for you, so there is little room for error.' },
    { title: 'Two in the box', description: 'A spare protector is ready if the first one cracks.' },
    { title: 'Keep in mind', description: 'Privacy glass makes the screen slightly dimmer, and it does not fit the Pro Max models.' },
  ],
  seller: {
    name: 'noon',
    rating: 4.7,
    ratingCount: 48210,
    positive: 95,
    metrics: [
      { kind: 'percent', title: 'Item as shown', value: 98, tone: 'positive' },
      { kind: 'years', title: 'Partner since', value: 8 },
    ],
  },
  discountTags: [{ title: 'Extra 10% off', code: 'CODE: GUARD10' }],
  payments: {
    title: 'Payments for you',
    items: [
      { logo: tabbyLogo, html: `Pay 4 interest-free payments of <b>${money(28)}</b>. <a>Learn more</a>` },
      { logo: tamaraLogo, html: `Split in 3 payments of <b>${money(37)}</b>. No late fees. <a>Learn more</a>` },
    ],
  },
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'returnable', title: 'Free 15 days returns' },
    { icon: 'verified', title: 'Secure transaction' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
  fbt: ['ZF1A24406870D3964331CZ', 'Z7D7DFFC169EA7DE817A2Z'],
});
