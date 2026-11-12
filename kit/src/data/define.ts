import type { FamilyContent, ProductContent, ProductInput } from './types';

/** Typed identity: `export default defineProduct({ … })` in src/data/products/<id>/product.ts. */
export const defineProduct = (p: ProductInput): ProductInput => p;

/** Typed identity: `export default defineContent({ … })` in src/data/products/<id>/content.ts. */
export const defineContent = (c: ProductContent): ProductContent => c;

/** Typed identity: `export default defineFamily({ … })` in src/data/families/<family>.ts. */
export const defineFamily = (f: FamilyContent): FamilyContent => f;
