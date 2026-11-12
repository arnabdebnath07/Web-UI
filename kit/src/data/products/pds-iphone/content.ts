import { defineContent } from '../../define';

/** Apple iPhone 16 128GB Ultramarine: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title and well-established facts' },
  description:
    'iPhone 16 in Ultramarine with 128GB of storage, powered by the A18 chip. It adds the Camera Control button for quick photos and video, charges over USB-C and supports 5G. This is the international version with FaceTime.',
  featureBullets: [
    'A18 chip',
    'Camera Control for quick access to the camera',
    '128GB storage',
    '5G and USB-C',
    'Ultramarine finish',
  ],
  specs: [
    ['Brand', 'Apple'],
    ['Model Name', 'iPhone 16'],
    ['Colour Name', 'Ultramarine'],
    ['Internal Memory', '128 GB'],
    ['Network Type', '5G'],
    ['Version', 'International Version'],
    ['Screen Size', '6.1 in'],
    ['Processor', 'A18'],
    ['Charging Type', 'Type-C'],
    ['Operating System', 'iOS'],
  ],
  reviews: [
    {
      name: 'Sara H.',
      rating: 5,
      ago: '2 weeks ago',
      title: 'Love the colour',
      body: 'Ultramarine looks stunning. Setup took minutes and FaceTime works out of the box.',
      verified: true,
      helpful: 12,
    },
    {
      name: 'Nikhil R.',
      rating: 5,
      ago: '1 month ago',
      title: 'Fast and smooth',
      body: 'Camera Control is handy once you get used to it. Delivered sealed and on time.',
      verified: true,
      helpful: 7,
    },
    {
      name: 'Omar B.',
      rating: 4,
      ago: '2 months ago',
      title: 'Great, but 128GB fills up',
      body: 'Excellent phone. If you shoot a lot of video, consider more storage.',
      verified: true,
      helpful: 4,
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
  offerBadges: [
    { icon: 'verified', title: 'Delivery by noon' },
    { icon: 'warranty', title: '1 year warranty' },
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [
    { icon: 'warranty', text: '1 Year Brand Warranty' },
    { icon: 'returnable', text: 'Free 15 days returns. Learn more' },
    { icon: 'verified', text: 'TDRA approved' },
  ],
});
