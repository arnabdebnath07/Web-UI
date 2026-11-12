import { defineContent } from '../../define';

/** Milton 1000ml stainless steel water bottle: demo page content written for the prototype (not captured from noon.com). */
export default defineContent({
  source: { kind: 'written', note: 'demo content for the prototype; specs limited to the title' },
  description:
    'A 1 litre single-walled stainless steel water bottle from Milton. It is BPA-free and leak-proof, so it can go in a gym bag or school bag without worry, and the steel body is built to last.',
  featureBullets: [
    '1000ml capacity',
    'Single-walled stainless steel body',
    'BPA-free',
    'Leak-proof lid',
    'Durable for daily use',
  ],
  specs: [
    ['Brand', 'Milton'],
    ['Capacity', '1000 ml'],
    ['Material', 'Stainless Steel'],
    ['Wall Type', 'Single-walled'],
    ['BPA Free', 'Yes'],
    ['Leak Proof', 'Yes'],
  ],
  reviews: [
    {
      name: 'Arjun T.',
      rating: 5,
      ago: '1 week ago',
      title: 'No leaks at all',
      body: 'Carry it in my laptop bag every day and it has never leaked. Easy to clean too.',
      verified: true,
      helpful: 3,
    },
    {
      name: 'Hala Y.',
      rating: 4,
      ago: '3 weeks ago',
      title: 'Good size',
      body: 'One litre is perfect for the gym. Being single-walled, it does not keep water cold for long in the heat.',
      verified: true,
      helpful: 5,
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
    { icon: 'returnable', title: 'Free 15 days returns' },
  ],
  additional: [{ icon: 'returnable', text: 'Free 15 days returns. Learn more' }],
});
