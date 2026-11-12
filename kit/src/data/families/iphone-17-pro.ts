import review1 from '@assets/products/iphone-17-pro/review-1.webp';
import review2 from '@assets/products/iphone-17-pro/review-2.webp';
import review3 from '@assets/products/iphone-17-pro/review-3.webp';
import review4 from '@assets/products/iphone-17-pro/review-4.webp';
import review5 from '@assets/products/iphone-17-pro/review-5.webp';
import swatchDeepBlue from '@assets/products/iphone-17-pro/swatch-deep-blue.webp';
import swatchOrange from '@assets/products/iphone-17-pro/swatch-cosmic-orange.webp';
import swatchSilver from '@assets/products/iphone-17-pro/swatch-silver.webp';
import { defineFamily } from '../define';
import type { ProductReview } from '../types';

/**
 * iPhone 17 Pro family (variantFamily 'iphone-17-pro'): content every member shares, captured from noon.com/uae-en
 * (Oct 2026). noon page text and reviews belong to the product group, so each family member shows these.
 */

/** Live colour swatches (62×85 tiles on the page) for the iPhone 17 Pro family. */
const swatches: Record<string, string> = { Silver: swatchSilver, 'Cosmic Orange': swatchOrange, 'Deep Blue': swatchDeepBlue };

/** mp-trust-api product-reviews/ai-summary/get (showSummary: true) */
const aiSummary = [
  'This phone is praised for its premium build, stunning display, and lightning-fast performance.',
  'Its camera system consistently delivers sharp, vibrant photos, especially in low-light conditions.',
  'Many people are happy with the strong battery life, which easily lasts through a full day of use.',
  'Some buyers received a different regional version (e.g., Japanese) than expected, so check this.',
];

/** product-reviews/sku/images-list (English reviews with photos; family-level, variant chips = productGroupVariant). */
const reviews: ProductReview[] = [
  {
    name: 'Hamza R.',
    rating: 5,
    ago: '9 months ago', // updatedAt 2025-12-29
    title: "\"It is the first iPhone to feature an 'All-48MP' triple-camera system and a massive 6.9-inch display",
    body: '"I am beyond happy with my purchase! I ordered the iPhone 17 Pro Max expecting it to arrive in a few days, but Noon delivered it well before the scheduled time. The packaging was secure and the device is 100% genuine. The phone itself is a masterpiece—the performance is lightning fast and the camera is incredible. Highly recommend buying from Noon if you want fast delivery and authentic products!',
    verified: true,
    helpful: 575,
    variants: ['Silver', '512 GB', 'iPhone 17 Pro Max', 'International Version (eSIM)'],
    images: [review1],
  },
  {
    name: 'Alcris Buaron P.',
    rating: 5,
    ago: '10 months ago', // updatedAt 2025-12-09
    title: 'A powerful, smooth, and premium-feeling device with outstanding camera performance.',
    body: 'The iPhone 17 Pro Max 512GB has exceeded my expectations. The performance is super smooth, apps load instantly, and the new camera system takes sharp, vibrant photos in any lighting condition. The silver finish looks very elegant, and the build feels premium. Battery life is strong, easily lasting a full day of heavy use. If you’re looking for a reliable flagship phone with top-tier features, this is an excellent choice.',
    verified: true,
    helpful: 341,
    variants: ['Silver', '512 GB', 'iPhone 17 Pro Max', 'International Version (eSIM)'],
    images: [review2, review3],
  },
  {
    name: 'Jul Ajim J.',
    rating: 5,
    ago: '3 months ago', // updatedAt 2026-06-26
    title: 'Very awesome items and stunning services noon🫡',
    body: 'Noon is very helpful all the way..unbeatable expectation from items solding online. Awesome and good quality phone i purchase and the delivery was so fast more than the estimated time schedule.  There for i give five stars⭐️⭐️⭐️⭐️⭐️ the delivery company naquel is awesome and friendly driver as well and on time. The next level noon thank you🫡🤝',
    verified: true,
    helpful: 19,
    variants: ['Cosmic Orange', '256 GB', 'iPhone 17 Pro Max', 'Middle East Version (eSIM)'],
    images: [review4, review5],
  },
];

export default defineFamily({
  id: 'iphone-17-pro',
  swatches,
  description:
    'The innovative design for iPhone 17 Pro delivers exceptional durability, breakthrough battery life and unlocks the extraordinary power of the A19 Pro chip. The 48MP Pro Fusion camera system has the longest iPhone Telephoto ever with 8x zoom, and a Center Stage front camera for smarter group selfies and Dual Capture video. Ceramic Shield 2 on the front for 3x better scratch resistance, and a forged aluminium unibody that dissipates heat. Helpful Apple Intelligence tools like Clean Up and more.',
  featureBullets: ['Super Retina XDR display Footnote 2 Pro Motion technology Always-On display Dynamic Island', 'Aluminum Unibody Action button Camera Control for faster access to photo and video tools', 'A19 Pro chip 6-core GPU with Neural Accelerators Hardware-accelerated ray tracing', 'Up to 39 hours of video playback', '18MP Center Stage front camera Tap to zoom and rotate Centre Stage for photos Ultra‑stabilized video Dual Capture Centre Stage for video calls', '48MP Pro Fusion camera system 48MP Fusion Main | 48MP Fusion Ultra-Wide | 48MP Fusion Telephoto Super-high‑resolution photos (24MP and 48MP) Next-generation portraits with Focus and Depth Control Macro photography', 'Dolby Vision up to 4K at 120 fps Latest-generation Photographic Styles'],
  aiOverview: [
    { title: 'Pro camera system', description: 'Three 48MP rear cameras (Main, Ultra Wide and Telephoto) plus an 18MP Center Stage front camera.' },
    { title: 'A19 Pro performance', description: 'The A19 Pro chip runs Apple Intelligence features, demanding games and 4K video editing smoothly.' },
    { title: 'Durable aluminium design', description: 'A forged aluminium unibody with Ceramic Shield 2 on the front for better scratch resistance.' },
    { title: 'Keep in mind', description: 'Versions differ by region: eSIM-only models have no physical SIM tray, so check the version and SIM type before you buy.' },
  ],
  aiSummary,
  reviews,
});
