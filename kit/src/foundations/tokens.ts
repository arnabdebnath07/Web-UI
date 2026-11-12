import { pressScale } from '../motion/presets';
import { palette } from './palette';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CENTRAL DESIGN TOKENS — single source of truth for every flow & component.
 *  Values are taken from bappzaar (`marketplaces/noon/theme/tokens/*`, NoonColors,
 *  NoonStyles and the per-component style files). Change a value here and every
 *  screen updates. Flows can override any key locally via `flow.tokens`.
 *
 *  Every token is exposed as a CSS variable:
 *    colors.textPrimary  → var(--nk-color-text-primary)
 *    spacing.s16         → var(--nk-space-s16)
 *    radius.r12          → var(--nk-radius-r12)
 *    fontSize.body       → var(--nk-font-size-body)
 *    type.titleSmall     → var(--nk-type-title-small)   (font shorthand)
 *    shadow.card         → var(--nk-shadow-card)
 *    palette.blackAlpha8 → var(--nk-palette-black-alpha8)
 *    button.primaryBg    → var(--nk-button-primary-bg)   (component groups: button, iconButton,
 *                          badge, pill, stepper, searchBar, tabBar, quickAdd, needHelp, sheet, snackbar)
 *  Numbers become px, except keys ending in Scale / Opacity (unitless) and Duration (ms).
 *  Component tokens reference the semantic ones through `ref.*` (CSS vars), so flow overrides of a
 *  colour reach every button / pill that uses it.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const colors = {
  // brand
  brand: palette.yellowColor, // #FEEE00 noon yellow
  brandInk: palette.neutralBlack, // text/icons on yellow

  // text
  textPrimary: palette.blueGray900, // #1D2539 — titles, names, menu rows
  textStrong: palette.charcoalNavy, // #101628 — product titles, headings
  textBody: palette.gray800, // #343D54 — address, inputs
  textSecondary: palette.slateGray, // #666D85 — meta, captions
  textTertiary: palette.bluishGrey, // #989FB3 — legal, counts
  textMuted: palette.slateBlueGray, // #475067
  textLegacy: palette.charcoalGreyColor, // #404553 — older noon screens
  textInverse: palette.white,
  textDisabled: palette.disabledTextColor,

  // surfaces
  bgPage: palette.antiFlashWhite, // #F2F3F7 grey page behind cards
  bgSurface: palette.white,
  bgSubtle: palette.secondaryBackgroundColor, // #F9F9FB — pills, icon buttons
  bgMuted: palette.ghostWhiteColor, // #F3F4F8 — chips, image placeholders
  bgInverse: palette.neutralBlack, // #0E0E0E — primary dark CTA, toasts
  bgInfo: palette.borderGray, // #EBF4FF — soft blue ATC button
  bgChip: palette.lightBabyBlue, // #F1F7FD
  bgDisabled: palette.disabledBackgroundColor, // #0E0E0E0A — NoonButton disabled fill

  // borders
  border: palette.lightGreyColor, // #EAECF0
  borderSubtle: palette.antiFlashWhite, // #F2F3F7 — dashed separators
  borderInput: palette.kitSlate87, // #D7DAE3
  borderStrong: palette.lightGrey, // #D0D4DD
  borderInfo: palette.paleAzure, // #BDDBFF

  // interactive
  primary: palette.primaryBlue, // #0F61FF — links, text buttons, ATC text
  primaryBright: palette.azureBlue, // #0F7EFF — filled blue pills (Create, View cart)
  link: palette.newAccentColor, // #0076FF — highlights in carousels
  tabActive: palette.sapphire, // #1155CB
  tabInactive: palette.charcoalGreyColor, // #404553
  badge: palette.accentColor, // #3866DF

  // status
  success: palette.deepGreen, // #0F8857
  successSurface: palette.noonSuccessSubtle, // #E3FCF2
  successStrong: palette.noonSystemGreen, // #38AE04
  danger: palette.errorRed, // #DE1C1C
  dangerSurface: palette.noonErrorSubtle, // #FFF0F0
  warning: palette.absoluteApricot, // #FF9741
  warningSurface: palette.warningSurface, // #FFF1E0
  discount: palette.deepGreen, // "% off" text
  rating: palette.deepGreen,

  // commerce (PLP / PDP / cart)
  cta: palette.accentColor, // #3866DF — Add to cart, quick-ATC, Buy now outline
  ctaNavy: palette.buyNowNavy, // #162D68
  brandBlue: palette.accentBlue, // #0057FF — store name, size guide, filter selected
  textInk: palette.neutralBlack, // #0E0E0E — sale price
  textProduct: palette.inkBlack, // #212121 — PLP card title
  priceOld: palette.noonGrey1, // #7E859B
  discountBright: palette.greenOff, // #05AF25 — "% OFF"
  bestPriceInk: palette.grass700, // #108757
  bestSellerTag: palette.darkGreenTeal, // #0A4F4A
  couponBorder: palette.softTeal, // #BBE0DE
  couponSurface: palette.mintWhite, // #E9FBF9
  bgPdp: palette.secondaryBackgroundColor, // #F9F9FB
  bgPill: palette.softGray, // #F7F8FA — rating / highlight pills
  bgStoreStrip: palette.lightBlueInfoBg, // #E8F1FF
  pillBorder: palette.kitGray91v2, // #E7E7E7
  pillSelectedBorder: palette.paleBlue, // #D6E9FF
  starLow: palette.pumpkinOrange, // #F36302
  starMid: palette.kitAmber49, // #F8B200
  starGood: palette.greenOff,
  starGreat: palette.darkGreen,
  inCart: palette.greenColorAlpha90, // rgba(45, 175, 50, 0.9)

  // noon One / VIP
  noonOneSurface: palette.paleYellowLegacy, // #FFF3C0 (NoonColors.paleYellow)
  noonOneInk: palette.cocoaBrown, // #794000

  // overlays
  scrim: palette.primaryAlpha50, // rgba(14, 14, 14, 0.5)
  scrimBold: palette.blackAlpha80, // Origin surface/overlay-bold — M-BottomSheet scrim
  imageOverlay: palette.blackAlpha2, // rgba(0, 0, 0, 0.02)

  // SKU card (src/components/SkuCard, Figma "SKU")
  skuDiscount: palette.homeGreen800, // #008200 "33%"
  skuRatingBg: palette.mintWhite97, // #F2F8F8 flat rating pill
  skuMediaTint: palette.cobaltAlpha4, // rgba(7, 47, 143, 0.04) image box tint
} as const;

export const spacing = {
  s0: 0,
  s2: 2,
  s4: 4,
  s6: 6,
  s8: 8,
  s10: 10,
  s12: 12,
  s14: 14,
  s15: 15, // `edgeSpacing` in bappzaar
  s16: 16,
  s18: 18,
  s20: 20,
  s24: 24,
  s32: 32,
  s36: 36,
  s40: 40,
  s48: 48,
  s56: 56,
  s64: 64,
  s72: 72,
  s80: 80,
  s88: 88, // centred Header side slots
} as const;

export const radius = {
  r0: 0,
  r2: 2,
  r4: 4,
  r6: 6,
  r8: 8,
  r10: 10,
  r12: 12,
  r14: 14,
  r16: 16,
  r20: 20,
  r24: 24,
  r30: 30,
  r32: 32,
  r48: 48,
  full: 9999,
} as const;

export const fontSize = {
  microSm: 8,
  micro: 9,
  label: 10,
  caption: 11,
  bodySmall: 12,
  bodyCompact: 13,
  body: 14,
  bodyMedium: 15,
  bodyLarge: 16,
  bodyLead: 17,
  titleSmall: 18,
  titlePromo: 19,
  title: 20,
  titleMedium: 22,
  titleLarge: 24,
  headline: 28,
  display: 32,
  hero: 40,
} as const;

/**
 * Noontree is the noon brand face (bundled in src/assets/fonts, @font-face in global.css).
 * Note: bappzaar master's primaryFont() is still 'Figtree' (Noontree only in a few modules) — Figtree stays as the fallback.
 */
export const fontFamily = {
  primary: "'Noontree', 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  rtl: "'Cairo', 'Noontree', 'Figtree', sans-serif",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

/** Typography presets → CSS `font` shorthand. Use via `<Text variant="titleSmall">` or `font: var(--nk-type-title-small)`. */
export const type = {
  hero: { size: 28, line: 34, weight: 700 },
  titleLarge: { size: 24, line: 30, weight: 700 },
  title: { size: 20, line: 26, weight: 700 },
  titleSmall: { size: 18, line: 24, weight: 700 },
  heading: { size: 17, line: 22, weight: 700 }, // profile name, toggle title
  section: { size: 16, line: 22, weight: 700 }, // module titles
  bodyLarge: { size: 16, line: 22, weight: 400 },
  bodyMedium: { size: 15, line: 20, weight: 500 }, // menu rows
  body: { size: 14, line: 18, weight: 400 },
  bodyBold: { size: 14, line: 18, weight: 700 },
  bodySemibold: { size: 14, line: 18, weight: 600 },
  productTitle: { size: 14, line: 18, weight: 500 },
  caption: { size: 12, line: 16, weight: 400 },
  captionBold: { size: 12, line: 16, weight: 600 },
  micro: { size: 11, line: 14, weight: 500 },
  tab: { size: 14, line: 17, weight: 600 }, // NoonApp.getTab: fontSize 14, semibold

  // Recurring combos across components + flows: text<size><Weight>Lh<line> (Lh1 / Lh1p35 = unitless line-height).
  // Raw shorthand → token lookup: scripts/token-map.json (`type`).
  text10MediumLh12: { size: 10, line: 12, weight: 500 },
  text10SemiboldLh12: { size: 10, line: 12, weight: 600 },
  text11RegularLh14: { size: 11, line: 14, weight: 400 },
  text11BoldLh18: { size: 11, line: 18, weight: 700 },
  text11SemiboldLh14: { size: 11, line: 14, weight: 600 }, // Origin B11/SemiBold
  text12RegularLh1: { size: 12, line: '1', weight: 400 },
  text12RegularLh14: { size: 12, line: 14, weight: 400 },
  text12RegularLh18: { size: 12, line: 18, weight: 400 },
  text12MediumLh1: { size: 12, line: '1', weight: 500 },
  text12MediumLh14: { size: 12, line: 14, weight: 500 },
  text12MediumLh15: { size: 12, line: 15, weight: 500 },
  text12MediumLh16: { size: 12, line: 16, weight: 500 },
  text12MediumLh18: { size: 12, line: 18, weight: 500 },
  text12SemiboldLh1: { size: 12, line: '1', weight: 600 },
  text12SemiboldLh14: { size: 12, line: 14, weight: 600 },
  text12SemiboldLh16: { size: 12, line: 16, weight: 600 }, // Origin A12/SemiBold
  text12BoldLh1: { size: 12, line: '1', weight: 700 },
  text12BoldLh16: { size: 12, line: 16, weight: 700 },
  text12BoldLh18: { size: 12, line: 18, weight: 700 }, // Origin B12/Bold
  text13RegularLh1p35: { size: 13, line: '1.35', weight: 400 },
  text13RegularLh16: { size: 13, line: 16, weight: 400 },
  text13RegularLh17: { size: 13, line: 17, weight: 400 },
  text13RegularLh18: { size: 13, line: 18, weight: 400 },
  text13RegularLh20: { size: 13, line: 20, weight: 400 },
  text13MediumLh16: { size: 13, line: 16, weight: 500 },
  text13MediumLh17: { size: 13, line: 17, weight: 500 },
  text13MediumLh18: { size: 13, line: 18, weight: 500 },
  text13SemiboldLh1: { size: 13, line: '1', weight: 600 },
  text13SemiboldLh16: { size: 13, line: 16, weight: 600 },
  text13SemiboldLh18: { size: 13, line: 18, weight: 600 },
  text14RegularLh1: { size: 14, line: '1', weight: 400 },
  text14RegularLh20: { size: 14, line: 20, weight: 400 },
  text14RegularLh22: { size: 14, line: 22, weight: 400 },
  text14MediumLh1: { size: 14, line: '1', weight: 500 },
  text14SemiboldLh1: { size: 14, line: '1', weight: 600 },
  text14SemiboldLh16: { size: 14, line: 16, weight: 600 },
  text14SemiboldLh20: { size: 14, line: 20, weight: 600 },
  text14BoldLh1: { size: 14, line: '1', weight: 700 },
  text14BoldLh20: { size: 14, line: 20, weight: 700 },
  text15MediumLh18: { size: 15, line: 18, weight: 500 },
  text15SemiboldLh19: { size: 15, line: 19, weight: 600 },
  text15SemiboldLh20: { size: 15, line: 20, weight: 600 },
  text16RegularLh20: { size: 16, line: 20, weight: 400 },
  text16RegularLh21: { size: 16, line: 21, weight: 400 },
  text16SemiboldLh18: { size: 16, line: 18, weight: 600 },
  text16SemiboldLh20: { size: 16, line: 20, weight: 600 },
  text16SemiboldLh22: { size: 16, line: 22, weight: 600 },
  text16BoldLh1: { size: 16, line: '1', weight: 700 },
  text16BoldLh20: { size: 16, line: 20, weight: 700 },
  text17MediumLh30: { size: 17, line: 30, weight: 500 },
  text17SemiboldLh20: { size: 17, line: 20, weight: 600 },
  text17SemiboldLh22: { size: 17, line: 22, weight: 600 },
  text18SemiboldLh22: { size: 18, line: 22, weight: 600 },
  text18BoldLh20: { size: 18, line: 20, weight: 700 },
  text18BoldLh22: { size: 18, line: 22, weight: 700 },
  text19BoldLh24: { size: 19, line: 24, weight: 700 },
  text20BoldLh24: { size: 20, line: 24, weight: 700 },
  text22BoldLh28: { size: 22, line: 28, weight: 700 },
  text15BoldLh20: { size: 15, line: 20, weight: 700 }, // SKU price (Figma "SKU", cart + home)
  text10RegularLh11: { size: 10, line: 11, weight: 400 }, // SKU "Ad" tag
  // Field Design System text styles (@field-ds/tokens text-styles.ts): H = headings, B = body, A = action (buttons).
  // Letter-spacing is not part of a font shorthand: add `letter-spacing: var(--nk-field-tracking-<h|h16|b16|b|a17>)`.
  fieldH40Bold: { size: 40, line: 48, weight: 700 }, // H40_Bold
  fieldH40Extrabold: { size: 40, line: 48, weight: 800 }, // H40_Extrabold
  fieldH32Bold: { size: 32, line: 40, weight: 700 }, // H32_Bold
  fieldH32Extrabold: { size: 32, line: 40, weight: 800 }, // H32_Extrabold
  fieldH28Bold: { size: 28, line: 36, weight: 700 }, // H28_Bold
  fieldH24Bold: { size: 24, line: 32, weight: 700 }, // H24_Bold
  fieldH20Bold: { size: 20, line: 28, weight: 700 }, // H20_Bold
  fieldH18Bold: { size: 18, line: 24, weight: 700 }, // H18_Bold
  fieldH16Bold: { size: 16, line: 20, weight: 700 }, // H16_Bold
  fieldB16Regular: { size: 16, line: 22, weight: 400 }, // B16_Regular
  fieldB16Medium: { size: 16, line: 22, weight: 500 }, // B16_Medium
  fieldB16Semibold: { size: 16, line: 22, weight: 600 }, // B16_SemiBold
  fieldB16Bold: { size: 16, line: 22, weight: 700 }, // B16_Bold
  fieldB14Regular: { size: 14, line: 20, weight: 400 }, // B14_Regular
  fieldB14Medium: { size: 14, line: 20, weight: 500 }, // B14_Medium
  fieldB14Semibold: { size: 14, line: 20, weight: 600 }, // B14_SemiBold
  fieldB14Bold: { size: 14, line: 20, weight: 700 }, // B14_Bold
  fieldB13Regular: { size: 13, line: 20, weight: 400 }, // B13_Regular
  fieldB13Medium: { size: 13, line: 20, weight: 500 }, // B13_Medium
  fieldB13Semibold: { size: 13, line: 20, weight: 600 }, // B13_SemiBold
  fieldB13Bold: { size: 13, line: 20, weight: 700 }, // B13_Bold
  fieldB12Regular: { size: 12, line: 18, weight: 400 }, // B12_Regular
  fieldB12Medium: { size: 12, line: 18, weight: 500 }, // B12_Medium
  fieldB12Semibold: { size: 12, line: 18, weight: 600 }, // B12_SemiBold
  fieldB12Bold: { size: 12, line: 18, weight: 700 }, // B12_Bold
  fieldB11Regular: { size: 11, line: 14, weight: 400 }, // B11_Regular
  fieldB11Medium: { size: 11, line: 14, weight: 500 }, // B11_Medium
  fieldB11Semibold: { size: 11, line: 14, weight: 600 }, // B11_SemiBold
  fieldB11Bold: { size: 11, line: 14, weight: 700 }, // B11_Bold
  fieldA17Semibold: { size: 17, line: 24, weight: 600 }, // A17_SemiBold
  fieldA16Semibold: { size: 16, line: 24, weight: 600 }, // A16_SemiBold
  fieldA16Bold: { size: 16, line: 24, weight: 700 }, // A16_Bold
  fieldA14Semibold: { size: 14, line: 20, weight: 600 }, // A14_SemiBold
  fieldA14Bold: { size: 14, line: 20, weight: 700 }, // A14_Bold
  fieldA12Semibold: { size: 12, line: 16, weight: 600 }, // A12_SemiBold
  fieldA12Bold: { size: 12, line: 16, weight: 700 }, // A12_Bold
} as const;

export const shadow = {
  none: 'none',
  card: `0 1px 2px ${palette.blackAlpha4}`, // NoonStyles.shadow()
  raised: `0 3px 6px ${palette.darkGrayColorAlpha10}`, // shadow2
  lg: `0 7px 16px ${palette.blackAlpha18}`, // shadow3 (softened for web)
  tabBar: `0 -3px 4px ${palette.blackAlpha8}`, // NoonApp.getTabOptions iOS shadow: opacity 0.08, radius 4 (UIKit offset 0, -3)
  thumb: `0 1px 4px ${palette.blackAlpha6}`,
  bottomBar: `0 -2px 6px ${palette.blackAlpha8}`, // sticky footer (BottomBar)
  floating: `0 -4px 32px ${palette.charcoalAlpha12}`, // floating action pill (NeedHelpButton)
  sheet: `0 -2px 16px ${palette.blackAlpha12}`, // Origin M-BottomSheet
  snackbar: `0 12px 14px ${palette.shadowOverlay}`, // Origin M-Toast drop-shadow
} as const;

export const layout = {
  deviceWidth: 390,
  deviceHeight: 844,
  screenRadius: 52, // device screen corner
  screenSmoothing: 1, // Figma corner smoothing (0–1); 1 = 100%
  statusBar: 54,
  homeIndicator: 34,
  tabBar: 49, // bappzaar native bottom tabs (UITabBar, stacked): 49pt above the home-indicator inset
  header: 56,
} as const;


/** camelCase token key → CSS var segment (same rule as the ThemeProvider): textPrimary → text-primary. */
export const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

/** Typed `var(--nk-…)` references, for component tokens and TSX inline styles (typos fail tsc). */
export const ref = {
  color: (k: keyof typeof colors) => `var(--nk-color-${kebab(k)})`,
  palette: (k: keyof typeof palette) => `var(--nk-palette-${kebab(k)})`,
  space: (k: keyof typeof spacing) => `var(--nk-space-${kebab(k)})`,
  radius: (k: keyof typeof radius) => `var(--nk-radius-${kebab(k)})`,
  type: (k: keyof typeof type) => `var(--nk-type-${kebab(k)})`,
  fontSize: (k: keyof typeof fontSize) => `var(--nk-font-size-${kebab(k)})`,
  fontWeight: (k: keyof typeof fontWeight) => `var(--nk-font-weight-${kebab(k)})`,
  shadow: (k: keyof typeof shadow) => `var(--nk-shadow-${kebab(k)})`,
  layout: (k: keyof typeof layout) => `var(--nk-layout-${kebab(k)})`,
};

const transparent = 'transparent';
/** kit variants share one disabled look (#EAECF0 fill, disabled text, no border) */
const kitDisabled = { bg: ref.color('border'), fg: ref.color('textDisabled'), border: transparent };

/** `var(--nk-field-<key>)` — Field DS colour refs for the `button` / `iconButton` field variants (group defined below). */
const fieldRef = (k: keyof typeof field) => `var(--nk-field-${kebab(k)})`;

/**
 * <Button> — every visual value of src/components/Button. CSS: var(--nk-button-<key>), e.g.
 *   --nk-button-primary-bg / -fg / -border / -bg-disabled / -fg-disabled / -border-disabled
 *   --nk-button-md-height / -padding-x / -radius / -font   (sm · md · lg)
 *   --nk-button-noon-padding-y, --nk-button-noon-press-scale …
 * Kit variants are the noon app's CTAs; `noon*` are bappzaar marketplaces/noon/components/NoonButton
 * (styles.ts DEFAULT/GHOST/DOTTED_PRESETS, r12, padding 14/24, 16/600, press opacity .95 + scale .98, 200ms).
 */
export const button = {
  gap: 6,
  borderWidth: 1,
  /** <Pressable> default press scale (AnimatedPressable 0.96) */
  pressScale,

  smHeight: 32,
  smPaddingX: 10,
  smRadius: ref.radius('r8'),
  smFont: ref.type('captionBold'),
  smIconSize: 14,
  mdHeight: 40,
  mdPaddingX: 14,
  mdRadius: ref.radius('r10'),
  mdFont: ref.type('bodyBold'),
  mdIconSize: 16,
  lgHeight: 52, // min-height
  lgPaddingX: 24,
  lgRadius: ref.radius('r12'),
  lgFont: ref.type('text16SemiboldLh20'),
  lgIconSize: 18,
  /** kit `loading` spinner */
  spinnerSize: 18,
  spinnerDuration: 700,

  // kit variants — #3866DF Add to cart / View cart
  primaryBg: ref.color('cta'),
  primaryFg: ref.color('textInverse'),
  primaryBorder: transparent,
  primaryBgDisabled: kitDisabled.bg,
  primaryFgDisabled: kitDisabled.fg,
  primaryBorderDisabled: kitDisabled.border,
  // #0057FF cart Checkout, Cancel selected
  checkoutBg: ref.color('brandBlue'),
  checkoutFg: ref.color('textInverse'),
  checkoutBorder: transparent,
  checkoutBgDisabled: kitDisabled.bg,
  checkoutFgDisabled: kitDisabled.fg,
  checkoutBorderDisabled: kitDisabled.border,
  // #0F7EFF Create pill, View cart floating
  brightBg: ref.color('primaryBright'),
  brightFg: ref.color('textInverse'),
  brightBorder: transparent,
  brightBgDisabled: kitDisabled.bg,
  brightFgDisabled: kitDisabled.fg,
  brightBorderDisabled: kitDisabled.border,
  // #0E0E0E Login, Continue shopping
  darkBg: ref.color('bgInverse'),
  darkFg: ref.color('textInverse'),
  darkBorder: transparent,
  darkBgDisabled: kitDisabled.bg,
  darkFgDisabled: kitDisabled.fg,
  darkBorderDisabled: kitDisabled.border,
  // white + #3866DF border — Buy now
  outlineBg: ref.color('bgSurface'),
  outlineFg: ref.color('cta'),
  outlineBorder: ref.color('cta'),
  outlineBgDisabled: kitDisabled.bg,
  outlineFgDisabled: kitDisabled.fg,
  outlineBorderDisabled: kitDisabled.border,
  // white + #EAECF0 border — Cancel, Clear all
  secondaryBg: ref.color('bgSurface'),
  secondaryFg: ref.color('textPrimary'),
  secondaryBorder: ref.color('border'),
  secondaryBgDisabled: kitDisabled.bg,
  secondaryFgDisabled: kitDisabled.fg,
  secondaryBorderDisabled: kitDisabled.border,
  // #EBF4FF + #0F61FF text — wishlist ATC, View options
  softBg: ref.color('bgInfo'),
  softFg: ref.color('primary'),
  softBorder: transparent,
  softBgDisabled: kitDisabled.bg,
  softFgDisabled: kitDisabled.fg,
  softBorderDisabled: kitDisabled.border,
  // #DE1C1C Yes, sign out
  dangerBg: ref.color('danger'),
  dangerFg: ref.color('textInverse'),
  dangerBorder: transparent,
  dangerBgDisabled: kitDisabled.bg,
  dangerFgDisabled: kitDisabled.fg,
  dangerBorderDisabled: kitDisabled.border,
  // text only
  ghostBg: transparent,
  ghostFg: ref.color('primary'),
  ghostBorder: transparent,
  ghostBgDisabled: kitDisabled.bg,
  ghostFgDisabled: kitDisabled.fg,
  ghostBorderDisabled: kitDisabled.border,

  // NoonButton metrics (all noon* variants)
  noonRadius: ref.radius('r12'),
  noonPaddingY: 14,
  noonPaddingX: ref.space('s24'),
  noonFont: ref.type('text16SemiboldLh20'),
  noonBorderWidth: 0,
  noonPressScale: 0.98,
  noonPressOpacity: 0.95,
  noonPressDuration: 200,
  noonLoaderSize: 24,
  // variant primary: newAccentColor / white; disabled disabledBackgroundColor / disabledTextColor
  noonBg: ref.color('link'),
  noonFg: ref.color('textInverse'),
  noonBgDisabled: ref.color('bgDisabled'),
  noonFgDisabled: ref.color('textDisabled'),
  noonLoader: ref.palette('white'),
  // variant secondary: white, newAccentColor text + 1px border
  noonSecondaryBg: ref.color('bgSurface'),
  noonSecondaryFg: ref.color('link'),
  noonSecondaryBorder: ref.color('link'),
  noonSecondaryBorderWidth: 1,
  noonSecondaryBgDisabled: ref.color('bgSurface'),
  noonSecondaryFgDisabled: ref.color('textDisabled'),
  noonSecondaryBorderDisabled: ref.color('bgDisabled'),
  noonSecondaryLoader: ref.color('link'),
  // type ghost: transparent, no padding
  noonGhostFg: ref.color('link'),
  noonGhostFgDisabled: ref.color('textDisabled'),
  // bappzaar GHOST_PRESETS.secondary / DOTTED_PRESETS.text = newTextPrimary (#0E0E0E)
  noonGhostSecondaryFg: ref.color('textInk'),
  noonGhostSecondaryFgDisabled: ref.color('textDisabled'),
  // type dotted: text over a 0.5/3 round-dotted line, 2px below
  noonDottedFg: ref.color('textInk'),
  noonDottedFgDisabled: ref.color('textDisabled'),
  noonDottedLine: ref.color('textInk'), // NoonButton dotted Line stroke = dottedColor ?? newTextPrimary
  noonDottedLineDisabled: ref.color('textDisabled'),
  noonDottedLineGap: 2,
  noonDottedDash: '0.5, 3',

  // ── Field DS buttons (@field-ds/components Button/*: sizing.ts BUTTON_SIZE, _RectButton tones, TextButton,
  // NeutralTextButton, RoundButton). `variant="field*"` + `fieldSize`. Colours are `field` tokens.
  fieldPressScale: 0.98, // usePressScale BUTTON_PRESS_SCALE (in: duration xs, out: spring snappy)
  fieldPressColorDuration: 120, // sizing.ts PRESS_TRANSITION (bg / border / colour)
  fieldPressEase: 'cubic-bezier(0.32, 0.72, 0, 1)', // Field motion.easing.standard (= fieldMotion.ease.standard)
  fieldLoadingFadeDuration: 160, // useLoadingFade (motion.duration.sm)
  fieldBorderWidth: 1,
  // rectangular sizes (H56 … H32): height, padding-x, radius, gap, icon, spinner, A-type
  fieldH56Height: 56,
  fieldH56PaddingX: ref.space('s24'),
  fieldH56Radius: ref.radius('r12'),
  fieldH56Gap: ref.space('s8'),
  fieldH56IconSize: 24,
  fieldH56SpinnerSize: 24,
  fieldH56Font: ref.type('fieldA17Semibold'),
  fieldH56Tracking: fieldRef('trackingA17'),
  fieldH52Height: 52,
  fieldH52PaddingX: ref.space('s20'),
  fieldH52Radius: ref.radius('r12'),
  fieldH52Gap: ref.space('s8'),
  fieldH52IconSize: 24,
  fieldH52SpinnerSize: 24,
  fieldH52Font: ref.type('fieldA16Semibold'),
  fieldH48Height: 48,
  fieldH48PaddingX: ref.space('s16'),
  fieldH48Radius: ref.radius('r10'),
  fieldH48Gap: ref.space('s6'),
  fieldH48IconSize: 20,
  fieldH48SpinnerSize: 20,
  fieldH48Font: ref.type('fieldA14Semibold'),
  // H40 default = PrimaryButton footprint
  fieldH40Height: 40,
  fieldH40PaddingX: ref.space('s12'),
  fieldH40Radius: ref.radius('r8'),
  fieldH40Gap: ref.space('s4'),
  fieldH40IconSize: 16,
  fieldH40SpinnerSize: 16,
  fieldH40Font: ref.type('fieldA12Semibold'),
  // H40 override for secondary / secondary-neutral / neutral (BUTTON_SIZE_H40_OVERRIDES; secondary keeps A12)
  fieldH40WidePaddingX: ref.space('s16'),
  fieldH40WideRadius: ref.radius('r10'),
  fieldH40WideGap: ref.space('s6'),
  fieldH40WideIconSize: 20,
  fieldH40WideSpinnerSize: 18, // secondary, secondary-neutral
  fieldH40NeutralSpinnerSize: 20,
  fieldH40WideFont: ref.type('fieldA14Semibold'),
  fieldH36Height: 36,
  fieldH36PaddingX: ref.space('s12'),
  fieldH36Radius: ref.radius('r8'),
  fieldH36Gap: ref.space('s4'),
  fieldH36IconSize: 16,
  fieldH36SpinnerSize: 16,
  fieldH36Font: ref.type('fieldA12Semibold'),
  fieldH32Height: 32,
  fieldH32PaddingX: ref.space('s10'),
  fieldH32Radius: ref.radius('r6'),
  fieldH32Gap: ref.space('s4'),
  fieldH32IconSize: 16,
  fieldH32SpinnerSize: 16,
  fieldH32Font: ref.type('fieldA12Semibold'),
  // text buttons (TextButton / NeutralTextButton TEXT_SIZE)
  fieldTextA14Height: 28,
  fieldTextA14PaddingX: ref.space('s8'),
  fieldTextA14Radius: ref.radius('r6'),
  fieldTextA14Gap: ref.space('s4'),
  fieldTextA14IconSize: 20,
  fieldTextA14Font: ref.type('fieldA14Semibold'),
  fieldTextA12Height: 24,
  fieldTextA12PaddingX: ref.space('s6'),
  fieldTextA12Radius: ref.radius('r4'),
  fieldTextA12Gap: ref.space('s4'),
  fieldTextA12IconSize: 16,
  fieldTextA12Font: ref.type('fieldA12Semibold'),
  // round button (RoundButton ROUND_SIZE, radius rounded)
  fieldRoundRadius: ref.radius('full'),
  fieldRoundH40Height: 40,
  fieldRoundH40PaddingX: ref.space('s16'),
  fieldRoundH40Gap: ref.space('s6'),
  fieldRoundH40IconSize: 20,
  fieldRoundH40SpinnerSize: 20,
  fieldRoundH40Font: ref.type('fieldA14Semibold'),
  fieldRoundH36Height: 36,
  fieldRoundH36PaddingX: ref.space('s12'),
  fieldRoundH36Gap: ref.space('s4'),
  fieldRoundH36IconSize: 16,
  fieldRoundH36SpinnerSize: 16,
  fieldRoundH36Font: ref.type('fieldA12Semibold'),
  // tones: bg / pressed / disabled, border, fg (PrimaryButton … RoundButton TONE)
  fieldPrimaryBg: fieldRef('surfaceActionBold'),
  fieldPrimaryBgPressed: fieldRef('surfaceActionExtrabold'),
  fieldPrimaryBgDisabled: fieldRef('surfaceMuted'),
  fieldPrimaryBorder: transparent,
  fieldPrimaryFg: fieldRef('textOnSurfaceBold'),
  fieldPrimaryFgDisabled: fieldRef('textMuted'),
  fieldSecondaryBg: fieldRef('surfacePrimary'),
  fieldSecondaryBgPressed: fieldRef('surfaceActionSubtle'),
  fieldSecondaryBgDisabled: fieldRef('surfaceMuted'),
  fieldSecondaryBorder: fieldRef('borderAction'),
  fieldSecondaryBorderDisabled: fieldRef('borderSubtle'),
  fieldSecondaryFg: fieldRef('textAction'),
  fieldSecondaryFgDisabled: fieldRef('textMuted'),
  fieldSecondaryNeutralBg: fieldRef('surfacePrimary'),
  fieldSecondaryNeutralBgPressed: fieldRef('surfaceSecondary'),
  fieldSecondaryNeutralBgDisabled: fieldRef('surfacePrimary'),
  fieldSecondaryNeutralBorder: fieldRef('borderPrimary'),
  fieldSecondaryNeutralBorderDisabled: fieldRef('borderPrimary'),
  fieldSecondaryNeutralFg: fieldRef('textPrimary'),
  fieldSecondaryNeutralFgPressed: fieldRef('textSecondary'),
  fieldSecondaryNeutralFgDisabled: fieldRef('textMuted'),
  fieldNeutralBg: fieldRef('surfacePrimaryInverted'),
  fieldNeutralBgPressed: fieldRef('surfaceSecondaryInverted'),
  fieldNeutralBgDisabled: fieldRef('surfaceMuted'),
  fieldNeutralBorder: transparent,
  fieldNeutralFg: fieldRef('textOnSurfaceBold'),
  fieldNeutralFgDisabled: fieldRef('textMuted'),
  fieldTextBg: transparent,
  fieldTextBgPressed: fieldRef('surfaceActionSubtle'),
  fieldTextFg: fieldRef('textAction'),
  fieldTextFgDisabled: fieldRef('textMuted'),
  fieldNeutralTextBg: transparent,
  fieldNeutralTextBgPressed: fieldRef('surfaceSecondary'),
  fieldNeutralTextFg: fieldRef('textPrimary'),
  fieldNeutralTextFgDisabled: fieldRef('textMuted'),
  fieldRoundBg: fieldRef('surfacePrimary'),
  fieldRoundBgPressed: fieldRef('surfaceSecondary'),
  fieldRoundBgDisabled: fieldRef('surfacePrimary'),
  fieldRoundBorder: fieldRef('borderPrimary'),
  fieldRoundFg: fieldRef('textPrimary'),
  fieldRoundFgPressed: fieldRef('textSecondary'),
  fieldRoundFgDisabled: fieldRef('textMuted'),
} as const;

/** <IconButton> (Header) — 40px circle (NoonBackButton). CSS: var(--nk-icon-button-<key>). */
export const iconButton = {
  size: 40,
  iconSize: 20,
  radius: '50%',
  borderWidth: 1,
  fg: ref.color('textInk'),
  outlineBg: ref.color('bgSurface'),
  outlineBorder: ref.color('border'),
  glassBg: ref.palette('whiteAlpha90'),
  glassBorder: ref.color('borderSubtle'),
  glassBlur: 8,
  subtleBg: ref.color('bgSubtle'),
  subtleBorder: ref.color('border'),
  plainBg: transparent,
  badgeOffset: -2,
  // ── Field DS M-IconButton (@field-ds/components Button/IconButton.tsx): circle, H40 pad 10 / H36 pad 8, icon 20.
  // `variant="fieldDefault" | "fieldGhost" | "fieldAction"`; pressed + disabled bg = surface/secondary.
  fieldIconSize: 20,
  fieldH40Padding: ref.space('s10'),
  fieldH36Padding: ref.space('s8'),
  fieldPressScale: 0.98,
  fieldPressColorDuration: 120,
  fieldBgPressed: fieldRef('surfaceSecondary'),
  fieldBgDisabled: fieldRef('surfaceSecondary'),
  fieldFgDisabled: fieldRef('textMuted'),
  fieldBorderDisabled: fieldRef('borderSubtle'),
  fieldDefaultBg: fieldRef('surfacePrimary'),
  fieldDefaultBorder: fieldRef('borderSubtle'),
  fieldDefaultFg: fieldRef('textPrimary'),
  fieldGhostBg: fieldRef('surfacePrimary'),
  fieldGhostFg: fieldRef('textPrimary'),
  fieldActionBg: fieldRef('surfaceActionSubtle'),
  fieldActionBgPressed: fieldRef('surfaceActionSubtle'),
  fieldActionBorder: fieldRef('borderAction'),
  fieldActionFg: fieldRef('textAction'),
} as const;

/** Count badge on IconButton / TabBar. CSS: var(--nk-badge-<key>). */
export const badge = {
  size: 18,
  paddingX: 5,
  radius: 9,
  bg: ref.color('badge'),
  fg: ref.color('textInverse'),
  font: ref.type('text11BoldLh18'),
  /** TabBar badge ring */
  ringWidth: 1.5,
  ringColor: ref.color('bgSurface'),
} as const;

/** <Pill> — PLP nav pill / home tag chip / filter option (NoonCatalogListNavPill). CSS: var(--nk-pill-<key>). */
export const pill = {
  gap: 6,
  iconSize: 16,
  dropdownIconSize: 14,
  removeIconSize: 13,
  pressScale: 0.94,
  transitionDuration: 280,
  bg: ref.color('bgSurface'),
  border: ref.color('border'),
  borderWidth: 1,
  fg: ref.color('textMuted'),
  selectedWeight: ref.fontWeight('semibold'),
  // nav (sm 26 · md 30 · lg 32)
  navHeight: 30,
  navHeightSm: 26,
  navHeightLg: 32,
  navPaddingX: 11,
  navLgPaddingX: 12,
  navRadius: ref.radius('r20'),
  navFont: ref.type('text13MediumLh16'),
  navFontSizeLg: ref.fontSize('body'),
  navSelectedBorder: ref.color('pillSelectedBorder'),
  navSelectedFg: ref.color('primary'),
  // tag
  tagPaddingY: 8,
  tagPaddingX: 12,
  tagRadius: ref.radius('r32'),
  tagFont: ref.type('body'),
  tagFg: ref.color('textPrimary'),
  tagSelectedBorder: ref.color('textPrimary'),
  // filter
  filterPadding: 8,
  filterRadius: ref.radius('r8'),
  filterBorderWidth: 2,
  filterFont: ref.type('productTitle'),
  filterFg: ref.color('textBody'),
  filterSelectedBorder: ref.color('brandBlue'),
  filterSelectedBg: ref.palette('filterSelectedBackground'),
  // selected-count bubble
  countSize: 20,
  countBg: ref.color('primary'),
  countFg: ref.color('textInverse'),
  countFont: ref.type('text12BoldLh1'),
  rowGap: 8,
  rowPadding: 15,
} as const;

/** <QuantityStepper> — cart (NoonCartItemQuantitySelector) · filled (quick ATC) · soft (wishlist). CSS: var(--nk-stepper-<key>). */
export const stepper = {
  height: 36,
  radius: ref.radius('r8'),
  paddingX: 6,
  buttonPadding: 4,
  iconSize: 16,
  valueHeight: 20,
  valueMinWidth: 16,
  disabledOpacity: 0.4,
  cartWidth: 92,
  cartBg: ref.color('bgSurface'),
  cartBorder: `1px solid ${ref.color('borderInput')}`,
  cartFg: ref.palette('secondaryTextColor'),
  cartValueFg: ref.color('textInk'),
  cartFont: ref.type('text14BoldLh20'),
  filledWidth: 76,
  filledBg: ref.color('cta'),
  filledBorder: '0',
  filledFg: ref.color('textInverse'),
  filledValueFg: ref.color('textInverse'),
  filledFont: ref.type('text16BoldLh20'),
  softWidth: 120,
  softBg: ref.color('bgInfo'),
  softBorder: `1.2px solid ${ref.color('borderInfo')}`,
  softFg: ref.color('primary'),
  softValueFg: ref.color('primary'),
  softFont: ref.type('text18BoldLh20'),
} as const;

/** <SearchBarButton> / <SearchInput> (NoonSearchBarButton, NoonSearchScreen). CSS: var(--nk-search-bar-<key>). */
export const searchBar = {
  height: 52,
  radius: ref.radius('r12'),
  paddingX: 12,
  gap: 8,
  pressScale: 0.98,
  bg: ref.color('bgSurface'),
  border: ref.color('borderInput'),
  inputBorder: ref.palette('gray400'),
  iconSize: 20,
  cameraSize: 24,
  placeholderFont: ref.type('text17MediumLh30'),
  placeholderTracking: -0.2,
  placeholderFg: ref.color('textPrimary'),
  tickerHeight: 30,
  dividerHeight: 24,
  dividerGap: 4,
  fieldFont: ref.type('bodyLarge'),
  fieldFg: ref.color('textBody'),
  fieldPlaceholder: ref.color('textSecondary'),
  clearIconSize: 18,
} as const;

/** <TabBar> (NoonApp.getTabScreens). CSS: var(--nk-tab-bar-<key>). */
export const tabBar = {
  // bappzaar native bottom tabs (NoonApp.getTab / getTabOptions → react-native-navigation UITabBar): opaque white,
  // shadow 0.08 / 4, no indicator; labels primaryFont semibold 14 in both states, charcoalGreyColor → sapphire;
  // icons the tabbar webps at native size, iconInsets top 3; badge = the native badge in accentColor.
  bg: ref.color('bgSurface'),
  shadow: ref.shadow('tabBar'),
  barShadow: ref.shadow('tabBar'),
  fg: ref.palette('charcoalGreyColor'),
  fgInactive: ref.palette('charcoalGreyColor'), // #404553
  fgActive: ref.palette('sapphire'), // #1155CB
  iconBox: 32,
  iconSize: 32,
  iconInsetTop: 3,
  gap: 0,
  font: ref.type('tab'),
  labelFont: `600 14px/14px var(--nk-font-family)`,
  labelFontActive: `600 14px/14px var(--nk-font-family)`,
  labelTracking: 0,
  pressScale: 1,
  height: ref.layout('tabBar'),
  // UITabBarItem badge: 18 high capsule, min 18 wide, 13pt system text, top-right of the icon
  badgeTop: -2,
  badgeEnd: -8,
  badgeLeft: 'calc(50% + 6px)',
  badgeFont: `400 13px/18px -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
  // Liquid Glass bar (the default): bappzaar `noon/ios/liquid-upgrade` (UIDesignRequiresCompatibility false) — the same
  // native UITabBar, which iOS 26 draws as a floating glass platter; NoonApp.getTab on iOS 26: labels 10pt semibold,
  // no iconInsets. The platter geometry is UIKit's (not in bappzaar): 62 high, 21 from the sides, its bottom 13 below
  // the home-indicator inset, so platter + gap = layout.tabBar + inset (83 on a 34-inset phone) like the opaque bar.
  glassHeight: 62,
  glassInsetX: 21,
  glassLift: 13, // platter bottom = max(glassBottomMin, inset − glassLift) — computed in TabBar.module.css (the inset is set below the root)
  glassBottomMin: 8,
  glassRadius: ref.radius('full'),
  glassBg: ref.palette('whiteAlpha64'), // translucent tint over the blurred content
  glassBgFallback: ref.palette('whiteAlpha95'), // no backdrop-filter / reduced transparency
  glassBlur: 'blur(14px) saturate(180%)',
  glassRim: ref.palette('whiteAlpha70'), // 1px specular rim
  glassShadow: `0 8px 28px ${ref.palette('blackAlpha12')}, 0 0 0 0.5px ${ref.palette('blackAlpha6')}`,
  glassHighlight: `inset 0 1px 0 ${ref.palette('whiteAlpha90')}, inset 0 -1px 1px ${ref.palette('whiteAlpha40')}`,
  glassSheen: ref.palette('whiteAlpha50'), // top-left specular gradient
  glassLens: ref.palette('blackAlpha6'), // selected-item capsule
  glassIcon: ref.palette('blueGray900'), // #1D2539 — tab icons, selected and unselected (the filled shape marks the selection)
  glassBadgeBg: ref.palette('blueGray900'), // #1D2539 cart count badge
  glassBadgeBorder: ref.palette('white'), // ring that lifts it off the icon
  glassBadgeBorderWidth: 1.5,
  glassLensInset: 4,
  glassIconScale: 0.875, // the 32pt tab webps at 28
  glassGap: 2,
  glassPressScale: 1.08, // the lens swells under the finger
  // tab switch: the lens slides from the old tab to the new one on a slightly underdamped spring and stretches like a
  // droplet on the way (scaleX up by glassLensStretch per tab travelled, capped; scaleY down by glassLensSquash), the
  // icon tints cross-fade over glassTintFade (iOS 26 UITabBar selection)
  glassLensStiffness: 320,
  glassLensDamping: 26,
  glassLensStretch: 0.14,
  glassLensStretchMax: 0.4,
  glassLensSquash: 0.1,
  glassLensMorph: 0.42, // s, the stretch → settle keyframes
  glassTintFade: 0.2, // s
  glassHideShadow: 16, // hide travel = platter + its bottom gap + this (the shadow)
  /** FLOATING_BOTTOM_GAP: docked / floating sticky content sits this far above the bar */
  floatingGap: 10,
  // one glass for every floating element (TabBar, PDP card, ActionBar surface="glass"); fills inside it
  glassInnerFill: ref.palette('whiteAlpha40'), // controls on the glass (QTY box, quantity chips)
  // GlassFade — under the floating containers: progressive blur (4 masked layers) + a white gradient, so what scrolls
  // under the glass blends into it instead of showing a hard edge
  fadeExtend: 48, // how far above the container the fade starts
  fadeBlur1: 'blur(1px)',
  fadeBlur2: 'blur(2px)',
  fadeBlur3: 'blur(4px)',
  fadeBlur4: 'blur(8px)',
  fadeFrom: ref.palette('whiteAlpha0'),
  fadeMid: ref.palette('whiteAlpha60'),
  fadeTo: ref.palette('whiteAlpha90'),
} as const;

/** <QuickAdd> on ProductCard (NoonProductBoxAddToCart). CSS: var(--nk-quick-add-<key>). */
export const quickAdd = {
  size: 36,
  expandedWidth: 76,
  radius: ref.radius('r8'),
  bg: ref.color('bgSurface'),
  border: ref.color('borderSubtle'),
  shadow: ref.shadow('thumb'),
  icon: ref.palette('black'),
  iconSize: 22,
  filledBg: ref.color('cta'),
  countFg: ref.color('textInverse'),
  countFont: ref.type('text13SemiboldLh1'),
  pressScale: 0.9,
} as const;

/** <NeedHelpButton> floating help pill (Accounts Figma 4NvyqO60K7Xn4gRJrkWmzQ · 8924:67388). CSS: var(--nk-need-help-<key>). */
export const needHelp = {
  size: 48, // collapsed circle = expanded height (2 border + 12 padding + 20 icon + 12 + 2)
  padding: 12,
  gap: 8,
  radius: ref.radius('full'),
  borderWidth: 2,
  border: ref.palette('lightBlue'), // blue/200 #BBDAFF
  bg: ref.color('bgSurface'),
  shadow: ref.shadow('floating'),
  icon: ref.color('brandBlue'), // #0057FF
  iconSize: 20,
  fg: ref.color('textPrimary'), // blue-gray/900
  font: ref.type('text16SemiboldLh20'), // Primary/Label2/Semibold
  tracking: -0.16,
  inset: 16, // from the screen edge / above the tab bar
  pressScale: 0.96,
} as const;

/**
 * Default bottom sheet: Origin Design System M-BottomSheet (Figma wFRKiKskxZ4vjIHbDVvngJ · 3207:15). The navigator draws
 * the chrome (scrim, grabber above the sheet, floating 12px inset, r16 on all corners, gap above the home indicator);
 * <SheetHeader> / <SheetBody> / <SheetFooter> fill the slots. CSS: var(--nk-sheet-<key>).
 */
export const sheet = {
  scrim: ref.color('scrimBold'), // rgba(0,0,0,0.8)
  inset: 12, // floating horizontal inset
  radius: ref.radius('r16'), // all four corners
  bg: ref.color('bgSurface'), // surface.primary — override per context (any surface token)
  shadow: ref.shadow('sheet'),
  maxHeight: 680,
  bottomGap: 12, // min gap under the sheet (the home-indicator inset wins when larger)
  grabberZone: 28, // 12 + 4 + 12, outside the sheet
  grabberWidth: 36,
  grabberHeight: 4,
  grabberRadius: ref.radius('r2'),
  grabber: ref.palette('whiteAlpha64'), // on the scrim
  headerHeight: 48,
  padding: 12, // header / body / footer side padding (aligns with the footer button edge)
  titleFont: ref.type('text16SemiboldLh22'),
  titleFg: ref.color('textPrimary'),
  subtitleFont: ref.type('text12MediumLh18'), // B12 medium
  subtitleFg: ref.color('textSecondary'), // text-n-icon/tertiary #666D85
  closeSize: 44, // tap target ≥ 44 (Origin don'ts)
  closeIconSize: 24,
  closeFg: ref.color('textPrimary'),
  footerPadding: 12, // M-StackedActionBar
  footerGap: 12,
  secondaryBg: ref.color('bgSurface'), // M-SecondaryButton
  secondaryFg: ref.color('primary'), // text-n-icon/action #0F61FF
  secondaryBorder: ref.color('pillSelectedBorder'), // border/action #D6E9FF
  // `sheet: 'floating'` — bappzaar OverlayBottomSheet `isFloating` (src/components/OverlayBottomSheet/styles.ts)
  floatingScrim: ref.palette('overlaySheetScrim'), // rgba(30,30,30,0.7)
  floatingInset: 12, // overlayFloating paddingHorizontal
  floatingRadius: ref.radius('r16'), // containerFloating
  floatingTopGap: 60, // overlayWrapper paddingTop
  floatingBottomGap: 15, // FLOATING_BOTTOM_INSET without a safe area (the home-indicator inset wins)
  floatingHandle: ref.palette('overlaySheetHandle'), // #B7B7B7, 36×4 r2
  floatingHandleOffset: 18, // handleContainer top -18 (on the scrim)
  // `sheet: 'gorhom'` — bappzaar src/components/BottomSheet (@gorhom/bottom-sheet): full width, docked to the screen
  // bottom (the content pads the safe area), top corners rounded, the floating handle above it, backdrop black 0.5
  gorhomScrim: ref.palette('blackAlpha50'),
  gorhomRadius: ref.radius('r16'), // backgroundStyle borderTopLeft/RightRadius (per screen: `radius`)
  gorhomTopGap: 60, // the sheet never covers the status bar + handle
} as const;

/**
 * <EtaBadge> — Origin Design System `_ETA` (Figma wFRKiKskxZ4vjIHbDVvngJ · 2673:2414): estimated-delivery badge on
 * product cards. CSS: var(--nk-eta-<key>).
 */
export const eta = {
  height: 18, // max-h 18 (express / market / global rows)
  pillHeight: 24, // Minutes / Supermall pill
  pillPadding: ref.space('s4'),
  pillRadius: ref.radius('r6'),
  gap: ref.space('s4'),
  minutesBg: ref.palette('dangerRed'), // colour/surface/error-bold #D92626
  minutesShadow: ref.palette('originRed900'), // 0 2 0 #7B1414
  supermallBg: ref.palette('blueSapphire'), // colour/surface/supermall-bold #2122B8
  supermallShadow: ref.palette('originSupermall1000'), // 0 2 0 #12136D
  onBold: ref.color('textInverse'), // on-surface-bold white
  supermallAccent: ref.palette('yellowColor'), // text-n-icon/yellow-light #FEEE00
  labelFont: ref.type('text12RegularLh18'), // B12/Regular "Get in" / "Get by"
  valueFont: ref.type('text12BoldLh18'), // B12/Bold time / date / "minutes" / "supermall"
  labelColor: ref.palette('slateGray'), // #666D85 "Get by"
  valueColor: ref.palette('blueGray900'), // #1D2539 date
  chipHeight: 18,
  chipPadding: ref.space('s4'),
  chipGap: ref.space('s2'),
  marketFrom: ref.palette('noonSuccessSubtle'), // colour/surface/success-subtle #E3FCF2
  marketTo: ref.palette('paleYellowGradient'), // colour/surface/yellow-subtle #FEFDC8
  globalBg: ref.palette('originSupermallSubtle'), // #EDEEFD
  globalFont: ref.type('text11SemiboldLh14'), // B11/SemiBold
  globalColor: ref.palette('slateGray'), // text-n-icon/tertiary #666D85
  tomorrowOverlap: 13, // express mark overlaps the "Tomorrow" bar by 13 (mr -13)
} as const;

/**
 * <Snackbar> / nav.toast: Origin Design System M-Toast + M-Stacked Toast (Figma wFRKiKskxZ4vjIHbDVvngJ · 4227:76702 /
 * 4229:76747). CSS: var(--nk-snackbar-<key>).
 */
export const snackbar = {
  radius: ref.radius('r14'),
  minWidth: 300,
  maxWidth: 440,
  padding: 12, // Content p12, gap 8
  gap: 8,
  assetSize: 40, // Asset container 20–40
  textGap: 2,
  shadow: ref.shadow('snackbar'),
  titleFont: ref.type('text14SemiboldLh20'), // B14/SemiBold
  subtitleFont: ref.type('text12RegularLh18'), // B12/Regular
  tracking: -0.1,
  chevronSize: 16,
  // Type=Dark (default) / Light / Error / Success
  darkBg: ref.color('textPrimary'), // surface/secondary-inverted #1D2539
  lightBg: ref.color('bgSurface'),
  errorBg: ref.palette('dangerRed'), // surface/error-bold #D92626
  successBg: ref.color('success'), // surface/success-bold #0F8857
  border: ref.palette('whiteAlpha8'), // border/overlay
  lightBorder: ref.color('borderSubtle'), // border/subtle #F2F3F7
  fg: ref.color('textInverse'), // on-surface-bold
  subtitleFg: ref.palette('whiteAlpha80'), // on-surface-subtle
  lightFg: ref.color('textPrimary'),
  lightSubtitleFg: ref.color('textSecondary'), // tertiary #666D85
  // action: Button-dark (alpha-light/16, p8, r8) / Button-light (M-SecondaryNeutralButton 32h, #EAECF0 border)
  actionInset: 10, // pr 10
  actionPadding: 8,
  actionRadius: ref.radius('r8'),
  actionFont: ref.type('text12SemiboldLh16'), // A12/SemiBold
  actionBg: ref.palette('whiteAlpha16'),
  actionLightBg: ref.color('bgSurface'),
  actionLightBorder: ref.color('border'),
  actionLightHeight: 32,
  // M-Stacked Toast: the card behind peeks 12 above, 12 narrower on each side (327 of 351)
  stackPeek: 12,
  stackInset: 12,
  // placement: bottom of the screen, 12 from the sides, above the tab bar
  inset: 12,
} as const;


/**
 * Field Design System (@field-ds/tokens — the coded Origin DS, github.com/ayaneshu/field-design-system) colours, named
 * after the Field semantic token (`colour.<group>.<name>` → `<group><Name>`). CSS: var(--nk-field-<key>).
 * Field grey names sit one step from the kit's: Field text secondary #475067 = kit `textMuted`, Field tertiary #666D85 =
 * kit `textSecondary`, Field muted #989FB3 = kit `textTertiary`. Field components and `variant="field*"` props use these;
 * mapping notes in .claude/skills/noon-ui/references/field-ds.md.
 */
export const field = {
  textPrimary: ref.palette('blueGray900'), // text-n-icon/primary #1D2539
  textSecondary: ref.palette('blueGray700'), // text-n-icon/secondary #475067 (= kit textMuted)
  textTertiary: ref.palette('slateGray'), // text-n-icon/tertiary #666D85 (= kit textSecondary)
  textMuted: ref.palette('bluishGrey'), // text-n-icon/muted #989FB3 (= kit textTertiary)
  textOnSurfaceBold: ref.palette('white'), // text-n-icon/on-surface-bold
  textOnSurfaceSubtle: ref.palette('whiteAlpha80'), // text-n-icon/on-surface-subtle
  textAction: ref.palette('primaryBlue'), // text-n-icon/action #0F61FF
  textSupermall: ref.palette('rocketBlueSapphire'), // text-n-icon/supermall #2122B8
  textError: ref.palette('dangerRed'), // text-n-icon/error #D92626
  textWarning: ref.palette('sunsetOrange'), // text-n-icon/warning #E5641A
  textYellowLight: ref.palette('yellowColor'), // text-n-icon/yellow-light #FEEE00
  textYellowDark: ref.palette('fieldYellowDark'), // text-n-icon/yellow-dark #A36200
  textSuccess: ref.palette('deepGreen'), // text-n-icon/success #0F8857
  textSuccessBold: ref.palette('baseGreen800'), // text-n-icon/success_bold #0B623F
  textPurple: ref.palette('fieldPurple700'), // base purple/700 #AD24DB (InfoBanner purple)
  surfacePrimary: ref.palette('white'), // surface/primary
  surfaceSecondary: ref.palette('secondaryBackgroundColor'), // surface/secondary #F9F9FB
  surfaceTertiary: ref.palette('antiFlashWhite'), // surface/tertiary #F2F3F7
  surfaceMuted: ref.palette('lightGreyColor'), // surface/muted #EAECF0
  surfaceTertiaryInverted: ref.palette('gray800'), // surface/tertiary-inverted #343D54
  surfaceSecondaryInverted: ref.palette('blueGray900'), // surface/secondary-inverted #1D2539
  surfacePrimaryInverted: ref.palette('blueGray1000'), // surface/primary-inverted #101628
  surfaceAbsoluteBlack: ref.palette('black'), // surface/absolute_black
  surfaceActionSubtle: ref.palette('borderGray'), // surface/action-subtle #EBF4FF
  surfaceActionBold: ref.palette('azureBlue'), // surface/action-bold #0F7EFF
  surfaceActionExtrabold: ref.palette('primaryBlue'), // surface/action-extrabold #0F61FF
  surfaceSupermallSubtle: ref.palette('originSupermallSubtle'), // surface/supermall-subtle #EDEEFD
  surfaceSupermallBold: ref.palette('rocketBlueSapphire'), // surface/supermall-bold #2122B8
  surfaceErrorSubtle: ref.palette('noonErrorSubtle'), // surface/error-subtle #FFF0F0
  surfaceErrorBold: ref.palette('dangerRed'), // surface/error-bold #D92626
  surfaceErrorExtrabold: ref.palette('red800'), // surface/error-extrabold #B81414
  surfaceWarningSubtle: ref.palette('warningSurface'), // surface/warning-subtle #FFF1E0
  surfaceWarningBold: ref.palette('sunsetOrange'), // surface/warning-bold #E5641A
  surfaceYellowSubtle: ref.palette('paleYellowGradient'), // surface/yellow-subtle #FEFDC8
  surfaceYellowMild: ref.palette('fieldYellowMild'), // surface/yellow-mild #FFF7C2
  surfaceBrandPrimary: ref.palette('yellowColor'), // surface/brand-primary #FEEE00
  surfaceYellowBold: ref.palette('fieldYellowBold'), // surface/yellow-bold #F5C400
  surfaceSuccessSubtle: ref.palette('noonSuccessSubtle'), // surface/success-subtle #E3FCF2
  surfaceSuccessBold: ref.palette('deepGreen'), // surface/success-bold #0F8857
  surfaceSuccessExtrabold: ref.palette('fieldSuccessExtrabold'), // surface/success-extrabold #083F3B
  surfacePurpleSubtle: ref.palette('lavenderMist'), // base purple/100 #FBF0FE (InfoBanner purple)
  surfaceOverlaySubtle: ref.palette('blackAlpha24'), // surface/overlay-subtle
  surfaceOverlayBold: ref.palette('blackAlpha80'), // surface/overlay-bold
  borderWhite: ref.palette('white'), // border/white
  borderOverlay: ref.palette('whiteAlpha8'), // border/overlay
  borderPrimary: ref.palette('lightGreyColor'), // border/primary #EAECF0
  borderSubtle: ref.palette('antiFlashWhite'), // border/subtle #F2F3F7
  borderMedium: ref.palette('lightGrey'), // border/medium #D0D4DD
  borderBold: ref.palette('slateGray'), // border/bold #666D85
  borderExtrabold: ref.palette('blueGray1000'), // border/extrabold #101628
  borderAction: ref.palette('paleBlue'), // border/action #D6E9FF
  borderActionBold: ref.palette('primaryBlue'), // border/action-bold #0F61FF
  borderSupermall: ref.palette('fieldBorderSupermall'), // border/supermall #C0C2F6
  borderError: ref.palette('red200'), // border/error #FED2D2
  borderErrorBold: ref.palette('dangerRed'), // border/error_bold #D92626
  borderWarning: ref.palette('warningBorder'), // border/warning #FEDBB4
  borderYellow: ref.palette('fieldYellowMild'), // border/yellow #FFF7C2
  borderSuccess: ref.palette('fieldBorderSuccess'), // border/success #CBF6E5
  borderSuccessBold: ref.palette('deepGreen'), // border/success_bold #0F8857
  // letter-spacing per text-style family (font shorthands can't carry it)
  trackingH: -0.25, // H40 … H20
  trackingH16: -0.15, // H18, H16
  trackingB16: -0.15, // B16
  trackingB: -0.1, // B14 … B11
  trackingA17: -0.25, // A17 (A16 … A12 = 0)
  // elevation
  shadowSm: '0 1px 3px rgba(0, 0, 0, 0.06)', // token-lint-ignore — Field elevation Sm (switch thumb, search bar)
} as const;

export const tokens = { colors, palette, spacing, radius, fontSize, fontFamily, fontWeight, type, shadow, layout, button, iconButton, badge, pill, stepper, searchBar, tabBar, quickAdd, needHelp, sheet, eta, snackbar, field };
export type Tokens = typeof tokens;

type Widen<T> = { [K in keyof T]?: T[K] extends object ? Widen<T[K]> : string | number };
/** Partial token overrides a flow (or a consumer app) can apply. Extra keys are allowed for flow-specific tokens. */
export type TokenOverrides = { [K in keyof Tokens]?: Widen<Tokens[K]> & Record<string, unknown> };
