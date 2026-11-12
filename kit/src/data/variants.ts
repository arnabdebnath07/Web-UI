import type { VariantFamily } from './types';

/** iPhone 17 Pro / Pro Max variant matrix (Color · Internal Memory · Model Name · Version), options in live-page order. */
export const variantFamilies: VariantFamily[] = [
  {
    id: 'iphone-17-pro',
    dimensions: [
      { key: 'color', name: 'Color', options: ['Silver', 'Cosmic Orange', 'Deep Blue'] },
      { key: 'storage', name: 'Internal Memory', options: ['1 TB', '256 GB', '512 GB'] },
      { key: 'model', name: 'Model Name', options: ['iPhone 17 Pro', 'iPhone 17 Pro Max'] },
      { key: 'version', name: 'Version', options: ['International Version', 'International Version (eSIM)', 'Middle East Version (eSIM)', 'Physical Dual SIM Version'], versionGuide: true },
    ],
  },
];

