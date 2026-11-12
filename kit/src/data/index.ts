/**
 * The data layer: products (one folder each in ./products), categories, variants, the demo user and money helpers.
 * Flows and components read data from here: entity data (products and their page content, users, …), copy
 * (`./copy/<flow>`) and views that shape it for a screen (`./views/<flow>`). Flow folders keep only layout. See README.md.
 */
export * from './types';
export { defineContent, defineFamily, defineProduct } from './define';
export * from './catalog';
export * from './content';
export * from './format';
export * from './promotions';
export * from './categories';
export * from './variants';
export * from './users';
export * from './money';
export * from './eta';
