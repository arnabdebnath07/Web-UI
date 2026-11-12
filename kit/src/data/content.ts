import type { FamilyContent, Product, ProductContent } from './types';

/**
 * Product page content: `src/data/products/<id>/content.ts` (one per product, `defineContent`) over the shared content of
 * its variant family (`src/data/families/<family>.ts`, `defineFamily`). Like the catalogue, nothing to register.
 */
const own = import.meta.glob<ProductContent>('./products/*/content.ts', { eager: true, import: 'default' });
const families = import.meta.glob<FamilyContent>('./families/*.ts', { eager: true, import: 'default' });

const contentById = new Map(Object.entries(own).map(([path, c]) => [path.split('/')[2], c]));
const familyById = new Map(Object.values(families).map((f) => [f.id, f]));

/** Frequently-bought-together accessories per product (`fbt_offers` without the product itself), from the content files. */
export const fbtFor: Record<string, string[]> = Object.fromEntries(
  [...contentById].filter(([, c]) => c.fbt?.length).map(([id, c]) => [id, c.fbt!.filter((x) => x !== id)]),
);

/** A variant family's shared content (reviews, AI summary, swatches), if it has any. */
export const familyContent = (familyId: string | undefined): FamilyContent | undefined => (familyId ? familyById.get(familyId) : undefined);

/** The product's page content: its own content.ts over its family's; `undefined` when it has neither. */
export function productContent(p: Pick<Product, 'id' | 'variantFamily'>): ProductContent | undefined {
  const mine = contentById.get(p.id);
  const family = familyContent(p.variantFamily);
  if (!family) return mine;
  const { id: _id, swatches: _swatches, ...shared } = family;
  return { source: mine?.source ?? { kind: 'captured', note: `family ${family.id}` }, ...shared, ...mine };
}
