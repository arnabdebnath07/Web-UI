/**
 * Raw noon palette — ported 1:1 from bappzaar
 * `marketplaces/noon/theme/tokens/colors.ts` (colorStatic), plus (below) every other colour literal the kit
 * and its flows use, named after NoonTokens.colors / NoonColors where bappzaar has a name.
 * Prefer the semantic tokens in `tokens.ts` inside components; use the palette
 * only when a flow needs an exact one-off brand colour.
 *
 * Every entry is a CSS variable too: palette.blackAlpha8 → var(--nk-palette-black-alpha8).
 * Literal → token lookup (incl. the matching semantic `--nk-color-*` vars): scripts/token-map.json.
 */
export const palette = {
  absoluteApricot: '#FF9741',
  accentBlue: '#0057FF',
  accentColor: '#3866DF',
  alabaster: '#FAFAFA',
  aliceBlue: '#EFF7FF',
  antiFlashWhite: '#F2F3F7',
  ashGray: '#757575',
  azureBlue: '#0F7EFF',
  azureBlueDark: '#0F4BB3',
  bestPriceGradientEnd: 'rgba(159, 231, 202, 0.35)',
  bestPriceGradientStart: 'rgba(189, 248, 224, 0.35)',
  blackSilver: '#747474',
  blarneyStone: '#0B7542',
  blue900: '#0937A5',
  blueGray1000: '#101628',
  blueGray200: '#F2F3F7',
  blueGray50: '#FCFCFD',
  blueGray700: '#475067',
  blueGray900: '#1D2539',
  bluishGrey: '#989FB3',
  brandWidgetCoinBorder: '#EBECF0',
  brandWidgetCta: '#F3F4F7',
  brandWidgetCtaPressed: '#E9EBF0',
  brandWidgetDivider: '#F0F1F4',
  brandWidgetMutedText: '#A3A9BA',
  chatbotLavenderPink: '#EDC6F9',
  chatbotLavenderPinkTranslucent: '#EDC6F9B3',
  chatbotPeriwinkle: '#B5BBFE',
  chatbotPeriwinkleTranslucent: '#B5BBFEB3',
  chatbotScrim: 'rgba(30, 30, 30, 0.9)',
  overlaySheetScrim: 'rgba(30, 30, 30, 0.7)', // OverlayBottomSheetMetrics BACKDROP 30,30,30 × 0.7
  overlaySheetHandle: '#B7B7B7', // OverlayBottomSheet styles.handle
  chatbotSuggestedGradientEnd: '#262FFF',
  chatbotSuggestedGradientStart: '#BF3DEB',
  chatbotTitleIndigo: '#4447CF',
  chatbotTitleViolet: '#BD3DEA',
  brandAdsShopMoreBg: '#111827',
  brandAdsSponsoredText: '#84859A',
  brandAdsYellowHeader: '#FEEF00',
  brandHeaderShadow: '#000040',
  borderColor: '#f0f2f7',
  borderGray: '#EBF4FF',
  borderPrimary: '#F5F5F5',
  brightGreyColor: '#EBEBEB',
  buyNowNavy: '#162D68',
  calmIridescence: '#DFE2EB',
  catalogTagGradientEnd: '#000000',
  catalogTagGradientStart: '#666666',
  charcoalAlpha12: 'rgba(34, 34, 34, 0.12)', // Accounts Figma 8924:67388 floating "Need help?" shadow
  charcoalGreyColor: '#404553',
  cleanPool: '#CCEADA',
  creekBend: '#928A86',
  crossMpInnerBackground: '#E8E8E8',
  crossMpPromoRed: '#D72A26',
  darkGray: '#3C3C3C',
  darkGreen: '#006300',
  darkGreenTeal: '#0A4F4A',
  darkGrey: '#67778E',
  darkNavy: '#02060C',
  darkOrange: '#973414',
  darkRed: '#B22424',
  darkTextColor: '#242A34',
  deepRedColor: '#F43333',
  defaultTagColor: '#D7EFCD',
  defaultTagTextColor: '#008B0E',
  dilutedMint: '#D8F9EB',
  dimTextPrimary: '#0E0E0EA7',
  disabledBackgroundColor: '#0E0E0E0A',
  disabledSurface: '#D2D2D6',
  disabledTextColor: '#0E0E0E3D',
  emerald100: '#D1FAE5',
  emerald1000: '#033D38',
  emeraldGreen: '#13645F',
  errorRed: '#DE1C1C',
  red: '#FF0000',
  ficusElastica: '#075F30',
  filterCheckboxBorder: '#CCCCCC',
  filterContainerBackground: '#F4F6FA',
  filterDisabledText: '#999999',
  filterLineGray: '#E0E0E0',
  filterSelectedBackground: '#F0F7FF',
  flyoutInstantOverlay: '#801815',
  flyoutRocketOverlay: '#0E0E60',
  frescoGreen: '#77DBAA',
  ghostWhiteColor: '#F3F4F8',
  giftingBannerBackground: '#F8EFD8',
  giftingGroupBorderColor: '#F3E5BD',
  grass700: '#108757',
  gray: '#848391',
  gray400: '#DFDFDF',
  gray800: '#343D54',
  grayBackgroundTint: '#F7F7F7',
  grayColor: '#ced1da',
  green100: '#CEF3DA',
  green800: '#329537',
  greenOff: '#05AF25',
  grey: '#D7D7D7',
  imageFill: '#002888',
  imageFillLight: '#00288808',
  inkBlack: '#212121',
  installationCancelledBg: '#FFF0F0',
  installationInfoBg: '#EAF1FF',
  installationSuccessBg: '#EEFBF0',
  instantDarkRedColor: '#CF2B2C',
  irishGreen: '#02A31E',
  lavender: '#E1EFFF',
  lavenderPink: '#FCFCFD',
  lightBabyBlue: '#F1F7FD',
  lightBlue: '#BBDAFF',
  lightBlueBackground: '#F5F8FD',
  lightBlueInfoBg: '#E8F1FF',
  lighterSpanishGrayColor: '#959595',
  lightGray: '#f1f1f1',
  lightGrey: '#D0D4DD',
  lightGreyColor: '#EAECF0',
  dashedBorderDefault: '#EAECE0',
  lightPinkBg: '#FFF5F5',
  lightSkyBlue: '#EAF4FE',
  loaderGray: '#F8F8F8',
  mediumGray: '#CBCFD7',
  mediumSkyBlue: '#71B2FF',
  mintCream: '#F6FEFD',
  mintCyanLight: '#E8FCFA',
  mintWhite: '#E9FBF9',
  mokafaaBlue: '#241AFC',
  neutralBlack: '#0E0E0E',
  newAccentColor: '#0076FF',
  newAccentDarkColor: '#0057FF',
  newBlack: '#262A33',
  newBlue: '#3466EA',
  newBorderColor: 'rgba(14, 14, 14, 0.07)',
  newTextPrimary: '#0E0E0E',
  noonGrey1: '#7E859B',
  noonGrey2: '#9ba0b1',
  noonGrey3: '#DADCE3',
  noonGrey3Translucent: '#DADCE3B2',
  offerCodeIconBg: '#FDF5EC',
  offerCodeNotchBg: '#F4F0EE',
  oliveGray: '#1F7A7466',
  orange300: '#FDBA74',
  orange800: '#B93D14',
  orangeColor: '#F5AF39',
  paleBlack: '#404553',
  paleGray: '#D5D5D5',
  paleYellow: '#FFFBBC',
  paleYellowGradient: '#FEFDC8',
  pinkGradient: '#E96CC4',
  pink600: '#F7306F',
  blushPink: '#EBC0BA',
  purpleGradient: '#6E51FF',
  deepPurple: '#741B92',
  lavenderMist: '#FBF0FE',
  persianBlue: '#2F33C0',
  progressGreen: '#38AE04',
  paleBlue: '#D6E9FF',
  primaryBlue: '#0F61FF',
  red100: '#FEEBEB',
  red200: '#FED2D2',
  red600: '#F04242',
  red800: '#B81414',
  rocketBlueSapphire: '#2122B8',
  sapphire: '#1155CB',
  sapphireAlpha70: '#1155CBB2',
  secondaryBackgroundColor: '#F9F9FB',
  secondaryBackgroundColorTransparent: '#F9F9FB00',
  secondaryTextColor: '#5D5D5D',
  sellerLogoBorder: '#F3F5F7',
  shimmerGray: '#F2F4F7',
  silver: '#C0C0C0',
  skeletonBase: '#F6F5FA',
  skyBlue: '#96C6FF',
  slate600: '#526075',
  slateBlueGray: '#475067',
  slateGray: '#666D85',
  softGray: '#F7F8FA',
  softLavender: '#F7F7FF',
  softPink: '#FFF7FE',
  softTeal: '#BBE0DE',
  softWhiteColor: '#F9FAFB',
  spanishGrayColor: '#939393',
  springTimeBlueColor: '#ECEEF4',
  steelColor: '#7e859b',
  successGreen: '#26732C',
  textTertiary: '#8D8F92',
  titleGradientIndigo: 'rgba(65, 70, 206, 0.92)',
  titleGradientViolet: '#BF3DEB',
  turquoiseTower: '#A7E1C9',
  yellowColor: '#FEEE00',
  transparent: 'transparent',
  blackCow: '#4C4C4C',
  black: '#000000',
  blueSapphire: '#2122B8',
  charcoalNavy: '#101628',
  comfortOrange: '#D08243',
  coralBisque: '#F8C4B1',
  dairyCream: '#FCE1B8',
  darkGrayColor: '#808080',
  greenColor: '#2DAF32',
  lightBrownShade: '#FFF7ED',
  lightGrayColor: '#F5F5F5',
  lightSapphire: '#1155CB',
  mandysPink: '#F8C4B1',
  noonBlack: '#404553',
  noonSystemGreen: '#38AE04',
  noonErrorSubtle: '#FFF0F0',
  noonSuccessSubtle: '#E3FCF2',
  paleMint: '#ADF0D5',
  baseGreen800: '#0B623F',
  placeboTurquoise: '#EBFFF4',
  redColor: '#FA0000',
  textSecondary: '#101628',
  white: '#FFFFFF',
  whiteAlphaLight: '#FFFFFFA3',
  yellowEssence: '#FCE1B8',
  paleAzure: '#BDDBFF',
  watermelonPink: '#FF4869',
  deepCerulean: '#035794',
  sponsoredLabel: '#F2F3F8',
  deepGreen: '#0F8857',
  shadowOverlay: 'rgba(11, 12, 14, 0.10)',
  dangerRed: '#D92626',
  originRed900: '#7B1414', // Origin base/colour/red/900 (ETA minutes badge shadow)
  originSupermall1000: '#12136D', // Origin base/colour/supermall/1000 (ETA supermall badge shadow)
  originSupermallSubtle: '#EDEEFD', // Origin colour/surface/supermall-subtle (ETA global pill)
  dangerRedMuted: '#F6A2A2',
  gradientPurpleStart: '#9047E9',
  gradientPurpleEnd: '#E33FB9',
  gradientGreenStart: '#02C678',
  lightBlueSky: '#E8F2FF',
  adTagBackground: 'rgba(38, 38, 38, 0.3)',
  // ── Additions: every other colour literal used in src/ (generated, see scripts/token-map.json) ──
  // bappzaar names (NoonTokens.colors / NoonColors); alpha variants are <base>Alpha<percent> (9p8 = 9.8%),
  // 8-digit hex variants are <base>Hex<alpha byte>.
  accentBlueAlpha20: 'rgba(0, 87, 255, 0.2)', // accentBlue @ 0.2
  accentBlueAlpha50: 'rgba(0, 87, 255, 0.5)', // accentBlue @ 0.5
  antiFlashWhiteAlpha6: 'rgba(242, 243, 247, 0.06)', // NoonTokens.colors.antiFlashWhiteAlpha(0.06)
  azureBlueAlpha35: 'rgba(15, 126, 255, 0.35)', // azureBlue @ 0.35
  blackAlpha0: 'rgba(0, 0, 0, 0)', // NoonTokens.colors.blackAlpha(0)
  blackAlpha1: 'rgba(0, 0, 0, 0.01)', // NoonTokens.colors.blackAlpha(0.01)
  blackAlpha2: 'rgba(0, 0, 0, 0.02)', // NoonTokens.colors.blackAlpha(0.02)
  blackAlpha3: 'rgba(0, 0, 0, 0.03)', // NoonTokens.colors.blackAlpha(0.03)
  blackAlpha4: 'rgba(0, 0, 0, 0.04)', // NoonTokens.colors.blackAlpha(0.04)
  blackAlpha5: 'rgba(0, 0, 0, 0.05)', // NoonTokens.colors.blackAlpha(0.05)
  blackAlpha6: 'rgba(0, 0, 0, 0.06)', // NoonTokens.colors.blackAlpha(0.06)
  blackAlpha8: 'rgba(0, 0, 0, 0.08)', // NoonTokens.colors.blackAlpha(0.08)
  blackAlpha9: 'rgba(0, 0, 0, 0.09)', // NoonTokens.colors.blackAlpha(0.09)
  blackAlpha9p8: 'rgba(0, 0, 0, 0.098)', // NoonTokens.colors.blackAlpha(0.098)
  blackAlpha10: 'rgba(0, 0, 0, 0.1)', // NoonTokens.colors.blackAlpha(0.1)
  blackAlpha11: 'rgba(0, 0, 0, 0.11)', // NoonTokens.colors.blackAlpha(0.11)
  blackAlpha12: 'rgba(0, 0, 0, 0.12)', // NoonTokens.colors.blackAlpha(0.12)
  blackAlpha18: 'rgba(0, 0, 0, 0.18)', // NoonTokens.colors.blackAlpha(0.18)
  blackAlpha20: 'rgba(0, 0, 0, 0.2)', // NoonTokens.colors.blackAlpha(0.2)
  blackAlpha28: 'rgba(0, 0, 0, 0.28)', // NoonTokens.colors.blackAlpha(0.28)
  blackAlpha30: 'rgba(0, 0, 0, 0.3)', // NoonTokens.colors.blackAlpha(0.3)
  blackAlpha40: 'rgba(0, 0, 0, 0.4)', // NoonTokens.colors.blackAlpha(0.4)
  blackAlpha50: 'rgba(0, 0, 0, 0.5)', // NoonTokens.colors.blackAlpha(0.5)
  blackAlpha60: 'rgba(0, 0, 0, 0.6)', // NoonTokens.colors.blackAlpha(0.6)
  blackAlpha80: 'rgba(0, 0, 0, 0.8)', // NoonTokens.colors.blackAlpha(0.8)
  blackAlpha83: 'rgba(0, 0, 0, 0.83)', // NoonTokens.colors.blackAlpha(0.83)
  blackAlpha85: 'rgba(0, 0, 0, 0.85)', // NoonTokens.colors.blackAlpha(0.85)
  blackAlpha90: 'rgba(0, 0, 0, 0.9)', // NoonTokens.colors.blackAlpha(0.9)
  blackHex00: '#00000000', // black + alpha byte 00 (0)
  blackHex19: '#00000019', // black + alpha byte 19 (0.098)
  blueGray500: '#8B8FA8', // NoonColors.blueGray500()
  blueGray900Alpha95: 'rgba(29, 37, 57, 0.95)', // blueGray900 @ 0.95
  brightGreyColorAlpha40: 'rgba(235, 235, 235, 0.4)', // brightGreyColor @ 0.4
  charcoalNavyAlpha8: 'rgba(16, 22, 40, 0.08)', // NoonTokens.colors.charcoalNavyAlpha(0.08)
  charcoalNavyAlpha12: 'rgba(16, 22, 40, 0.12)', // NoonTokens.colors.charcoalNavyAlpha(0.12)
  charcoalNavyAlpha16: 'rgba(16, 22, 40, 0.16)', // NoonTokens.colors.charcoalNavyAlpha(0.16)
  cocoaBrown: '#794000', // NoonColors.cocoaBrown()
  copperColor: '#B45309', // NoonColors.copperColor()
  darkGrayColorAlpha10: 'rgba(128, 128, 128, 0.1)', // NoonTokens.colors.darkGrayColorAlpha(0.1)
  darkNavyAlpha10: 'rgba(2, 6, 12, 0.1)', // NoonColors.darkNavyAlpha(0.1)
  darkNavyAlpha20: 'rgba(2, 6, 12, 0.2)', // NoonColors.darkNavyAlpha(0.2)
  darkNavyAlpha60: 'rgba(2, 6, 12, 0.6)', // NoonColors.darkNavyAlpha(0.6)
  darkNavyAlpha92: 'rgba(2, 6, 12, 0.92)', // NoonColors.darkNavyAlpha(0.92)
  darkTextColorAlpha60: 'rgba(36, 42, 52, 0.6)', // darkTextColor @ 0.6
  emerald50: '#EDFDFB', // NoonColors.emerald50()
  emeraldGreen700: '#1F7A74', // NoonColors.emeraldGreen700()
  emeraldGreen700Alpha40: 'rgba(31, 122, 116, 0.4)', // emeraldGreen700 @ 0.4
  emeraldGreen800: '#115A56', // NoonColors.emeraldGreen800()
  fadedBlue: '#EFF3FD', // NoonColors.fadedBlue()
  fadedRedColor: '#EE4D52', // NoonColors.fadedRedColor()
  gray200: '#E5E7EB', // NoonColors.gray200()
  greenColorAlpha90: 'rgba(45, 175, 50, 0.9)', // NoonTokens.colors.greenColorAlpha(0.9)
  greenCrystal: '#ECFEF6', // NoonColors.greenCrystal()
  lightApricot: '#FFBE88', // NoonColors.lightApricot()
  mintGreen200: '#F5FEFA', // NoonColors.mintGreen200()
  neutralBlackHex3F: '#0E0E0E3F', // neutralBlack + alpha byte 3F (0.247)
  neutralBlackHex12: '#0E0E0E12', // neutralBlack + alpha byte 12 (0.071)
  neutralBlackHex24: '#0E0E0E24', // neutralBlack + alpha byte 24 (0.141)
  nightFall: '#02060CEB', // NoonColors.nightFall()
  noonOfferATCSystemOrange: '#F3AC30', // NoonColors.noonOfferATCSystemOrange()
  noonOfferATCSystemOrangeAlpha4: 'rgba(243, 172, 48, 0.04)', // noonOfferATCSystemOrange @ 0.04
  noonOfferATCSystemOrangeAlpha20: 'rgba(243, 172, 48, 0.2)', // noonOfferATCSystemOrange @ 0.2
  noonOneBannerAmberAlpha30: 'rgba(255, 168, 45, 0.3)', // NoonColors.noonOneBannerAmber(0.3)
  noonOneBannerCream: '#FEF8EC', // NoonColors.noonOneBannerCream()
  noonOneBannerPeach: '#FEDEA9', // NoonColors.noonOneBannerPeach()
  noonSystemOrangeTint: '#FFF8EC', // NoonColors.noonSystemOrangeTint()
  orderSummaryInstallationStripBg: '#F5FAFF', // NoonColors.orderSummaryInstallationStripBg()
  paleAzureAlpha35: 'rgba(189, 219, 255, 0.35)', // paleAzure @ 0.35
  paleOrange: '#FED7AA', // NoonColors.paleOrange()
  paleYellowLegacy: '#FFF3C0', // NoonColors.paleYellow()
  pink600Alpha30: 'rgba(247, 48, 111, 0.3)', // pink600 @ 0.3
  primaryAlpha4: 'rgba(14, 14, 14, 0.04)', // NoonTokens.colors.primaryAlpha(0.04)
  primaryAlpha6: 'rgba(14, 14, 14, 0.06)', // NoonTokens.colors.primaryAlpha(0.06)
  primaryAlpha24: 'rgba(14, 14, 14, 0.24)', // NoonTokens.colors.primaryAlpha(0.24)
  primaryAlpha25: 'rgba(14, 14, 14, 0.25)', // NoonTokens.colors.primaryAlpha(0.25)
  primaryAlpha45: 'rgba(14, 14, 14, 0.45)', // NoonTokens.colors.primaryAlpha(0.45)
  primaryAlpha50: 'rgba(14, 14, 14, 0.5)', // NoonTokens.colors.primaryAlpha(0.5)
  primaryBlueAlpha0: 'rgba(15, 97, 255, 0)', // primaryBlue @ 0
  primaryBlueAlpha60: 'rgba(15, 97, 255, 0.6)', // primaryBlue @ 0.6
  pumpkinOrange: '#F36302', // NoonColors.pumpkinOrange()
  skeletonGray: '#E9EBED', // NoonColors.skeletonGray()
  slate500: '#6B7280', // NoonColors.slate500()
  slateGrayAlpha0: 'rgba(102, 109, 133, 0)', // slateGray @ 0
  slateGrayAlpha10: 'rgba(102, 109, 133, 0.1)', // slateGray @ 0.1
  slateGrayAlpha12: 'rgba(102, 109, 133, 0.12)', // slateGray @ 0.12
  sunsetOrange: '#E5641A', // NoonColors.sunsetOrange()
  tangerine: '#F8913E', // NoonColors.tangerine()
  warningAmber: '#CC8500', // NoonColors.warningAmber()
  warningBorder: '#FEDBB4', // NoonColors.warningBorder()
  warningSurface: '#FFF1E0', // NoonColors.warningSurface()
  whiteAlpha0: 'rgba(255, 255, 255, 0)', // NoonTokens.colors.whiteAlpha(0)
  whiteAlpha8: 'rgba(255, 255, 255, 0.08)', // Origin colour/border/overlay
  whiteAlpha12: 'rgba(255, 255, 255, 0.12)', // NoonTokens.colors.whiteAlpha(0.12)
  whiteAlpha14: 'rgba(255, 255, 255, 0.14)', // NoonTokens.colors.whiteAlpha(0.14)
  whiteAlpha15: 'rgba(255, 255, 255, 0.15)', // NoonTokens.colors.whiteAlpha(0.15)
  whiteAlpha16: 'rgba(255, 255, 255, 0.16)', // NoonTokens.colors.whiteAlpha(0.16)
  whiteAlpha20: 'rgba(255, 255, 255, 0.2)', // NoonTokens.colors.whiteAlpha(0.2)
  whiteAlpha24: 'rgba(255, 255, 255, 0.24)', // NoonTokens.colors.whiteAlpha(0.24)
  whiteAlpha25: 'rgba(255, 255, 255, 0.25)', // NoonTokens.colors.whiteAlpha(0.25)
  whiteAlpha28: 'rgba(255, 255, 255, 0.28)', // NoonTokens.colors.whiteAlpha(0.28)
  whiteAlpha35: 'rgba(255, 255, 255, 0.35)', // NoonTokens.colors.whiteAlpha(0.35)
  whiteAlpha40: 'rgba(255, 255, 255, 0.4)', // NoonTokens.colors.whiteAlpha(0.4)
  whiteAlpha50: 'rgba(255, 255, 255, 0.5)', // NoonTokens.colors.whiteAlpha(0.5) (NoonProductBoxCollectionButton)
  whiteAlpha60: 'rgba(255, 255, 255, 0.6)', // NoonTokens.colors.whiteAlpha(0.6)
  whiteAlpha64: 'rgba(255, 255, 255, 0.64)', // NoonTokens.colors.whiteAlpha(0.64)
  whiteAlpha70: 'rgba(255, 255, 255, 0.7)', // NoonTokens.colors.whiteAlpha(0.7)
  whiteAlpha80: 'rgba(255, 255, 255, 0.8)', // NoonTokens.colors.whiteAlpha(0.8)
  whiteAlpha90: 'rgba(255, 255, 255, 0.9)', // NoonTokens.colors.whiteAlpha(0.9)
  whiteAlpha95: 'rgba(255, 255, 255, 0.95)', // NoonTokens.colors.whiteAlpha(0.95)
  whiteHex00: '#FFFFFF00', // white + alpha byte 00 (0)
  whiteHex99: '#FFFFFF99', // white + alpha byte 99 (0.6)
  whiteSmoke: '#F2F2F2', // NoonColors.whiteSmoke()
  // Kit-only colours with no bappzaar name: kit<Hue><HSL lightness %> (v2, v3… = same bucket, different value).
  kitAmber33: '#8C631C',
  kitAmber49: '#F8B200',
  kitAmber52: '#B08D57',
  kitAmber60: '#C9A86A',
  kitAmber69: '#EFCF73',
  kitAmber77: '#FDE68A',
  kitAmber82: '#FCE8A6',
  kitAmber90: '#F4ECD8',
  kitAmber95Alpha70: 'rgba(255, 245, 230, 0.7)', // kitAmber95 @ 0.7
  kitAmber96: '#FBF6EE',
  kitBlue3: '#04070D',
  kitBlue3v2: '#02040D',
  kitBlue18: '#0C2050',
  kitBlue27: '#1A3A70',
  kitBlue43: '#3454A8',
  kitBlue62: '#3D7BFF',
  kitBlue66: '#7394DE',
  kitBlue69Alpha12: 'rgba(120, 150, 230, 0.12)', // kitBlue69 @ 0.12
  kitBlue74: '#7CA8FF',
  kitBlue82Alpha30: 'rgba(186, 203, 230, 0.3)', // kitBlue82 @ 0.3
  kitBlue91: '#DAE3F6',
  kitBlue95: '#EEF2F8',
  kitBlue95v2: '#EDF0F7',
  kitBlue95v3: '#E9E8FC',
  kitBlue97: '#F1F6FF',
  kitBlue97v2: '#EFF3FF',
  kitBlue97v3: '#EEF4FF',
  kitBlue98: '#F5F7FF',
  kitCyan77: '#9EE9E4',
  kitGray7: '#111111',
  kitGray9Alpha8: 'rgba(22, 22, 22, 0.08)', // kitGray9 @ 0.08
  kitGray11: '#1D1D1B',
  kitGray12: '#1D1D1F',
  kitGray17: '#2B2B2E',
  kitGray24: '#3D3D3D',
  kitGray41Alpha0: 'rgba(104, 104, 104, 0)', // kitGray41 @ 0
  kitGray41Alpha14: 'rgba(104, 104, 104, 0.14)', // kitGray41 @ 0.14
  kitGray48: '#7A7A7A',
  kitGray57: '#919191',
  kitGray57v2: '#8E8E93',
  kitGray59Alpha75: 'rgba(150, 150, 150, 0.75)', // kitGray59 @ 0.75
  kitGray73: '#B5B7BD',
  kitGray76: '#C1C1C1',
  kitGray77: '#C4C4C6',
  kitGray78: '#C9C8C3',
  kitGray79: '#C7C7CD',
  kitGray87: '#E3E1DB',
  kitGray88: '#DEDFE2',
  kitGray91: '#ECEAE4',
  kitGray91v2: '#E7E7E7',
  kitGray92: '#EFEDE7',
  kitGray93: '#F2EFEA',
  kitGray94: '#F4F1EC',
  kitGray94v2: '#EEF0F3',
  kitGray95: '#F1F1F4',
  kitGray95v2: '#EEF5F1',
  kitGray95v3: '#F5F3EE',
  kitGray95v4: '#EFF1F5',
  kitGray95v5: '#EDEFF5',
  kitGray95v6: '#EEF6F4',
  kitGray95v7: '#EEF0F4',
  kitGray96: '#F5F5F7',
  kitGray97: '#F5F7FA',
  kitGray97v2: '#F6F7F9',
  kitGray97v3: '#F5F6F9',
  kitGray97v4: '#F6F7FA',
  kitGray98: '#F7FAFF',
  kitGray98v2: '#FBFBFB',
  kitGreen29: '#177D43',
  kitGreen36: '#3E7D3A',
  kitGreen79: '#C7D3C2',
  kitGreen79v2: '#BFE2B3',
  kitGreen84: '#CFE8C6',
  kitGreen94: '#E6F7EC',
  kitGreen97: '#F0FDF1',
  kitIndigo18: '#201549',
  kitIndigo30: '#3A2C6E',
  kitIndigo51: '#532ADC',
  kitIndigo62: '#7A3BFF',
  kitLime83: '#D3EFB6',
  kitOrange44: '#E04E00',
  kitOrange50: '#FE5000',
  kitOrange60Alpha75: 'rgba(255, 110, 50, 0.75)', // kitOrange60 @ 0.75
  kitOrange70: '#D9B48A',
  kitOrange74Alpha55: 'rgba(255, 190, 120, 0.55)', // kitOrange74 @ 0.55
  kitOrange92: '#FFEDD5',
  kitPink40: '#C30A42',
  kitPink50: '#E5195E',
  kitPink63: '#FB4689',
  kitPink95: '#FCE9EF',
  kitPink95v2: '#FFE3EE',
  kitPink98: '#FFF5F9',
  kitRed46: '#B23A3A',
  kitRed49: '#D12B28',
  kitRed57: '#E94B3C',
  kitRed82: '#FCA5A5',
  kitRed89: '#FECACA',
  kitRed90: '#F2D7D9',
  kitRed95: '#FAEDED',
  kitRed96: '#FBEEEE',
  kitRed97: '#FFF2F2',
  kitSand87: '#E2DFD8',
  kitSand88: '#E6E3DC',
  kitSand94: '#F3EEEA',
  kitSky24: '#1D3D5C',
  kitSky53: '#4A86C5',
  kitSky58: '#2A8DFF',
  kitSky59: '#6AA3C4',
  kitSky78: '#9CCBF2',
  kitSky79: '#A9D6EC',
  kitSky80: '#B3CCE6',
  kitSky81: '#AAD3F5',
  kitSky97: '#EEF9FF',
  kitSlate39: '#5F6368',
  kitSlate45: '#5C6D8A',
  kitSlate48Alpha12: 'rgba(118, 118, 128, 0.12)', // kitSlate48 @ 0.12
  kitSlate55: '#7F8599',
  kitSlate87: '#D7DAE3',
  kitTeal37: '#2F8E6D',
  kitTeal40: '#14B87F',
  kitTeal62: '#3BFFC1',
  kitViolet46: '#7B2CBF',
  kitViolet59: '#C04BE0',
  kitViolet93: '#F0DDFF',
  kitViolet96: '#F6EEFC',
  kitYellow51: '#FFED06',
  kitYellow82: '#FFF7A3',
  kitYellow83: '#FFF7A6',
  kitYellow91: '#FFFBD1',
  kitYellow91v2: '#FFFCCF',
  kitYellow95: '#FFFDE8',
  kitYellow96: '#FFFDEB',
  // Figma noon DS variables (Cart 2.0, BaWAAGW7zmdSTkXNXqPcAJ) — named after the Figma variable
  yellow200: '#FDF69B', // Yellow/200
  purple100: '#F9E9FE', // Purple/100
  purple200: '#EFC9FB', // Purple/200
  green200: '#BEEFCC', // Green/200
  persianBlue50: '#EDEDFD', // Persian-Blue/50
  persianBlue100: '#CECFF8', // Persian-Blue/100
  // Figma noon DS variables (Checkout 2.0, zURu7GI7sq77fjdXKrouvo)
  grayA1000: '#0E0E0EEB', // Alpha/GrayA/1000 (carousel active dot)
  // Figma noon DS variables / fills (Homepage Revamp 2025, iRE9RwO94eMAyW3j3XKNXW) — the "SKU" card
  homeGreen800: '#008200', // Green/800 in the Homepage Revamp 2025 file (SKU "% off"; the kit green800 is #329537)
  mintWhite97: '#F2F8F8', // SKU rating pill fill
  cobaltAlpha4: 'rgba(7, 47, 143, 0.04)', // SKU image box tint (over white)
  // Field Design System (@field-ds/tokens, the coded Origin DS) — colours with no earlier palette entry
  fieldYellowDark: '#A36200', // colour/text-n-icon/yellow-dark
  fieldYellowMild: '#FFF7C2', // colour/surface/yellow-mild, colour/border/yellow
  fieldYellowBold: '#F5C400', // colour/surface/yellow-bold (RatingInput star)
  fieldSuccessExtrabold: '#083F3B', // colour/surface/success-extrabold
  fieldBorderSupermall: '#C0C2F6', // colour/border/supermall
  fieldBorderSuccess: '#CBF6E5', // colour/border/success
  fieldPurple700: '#AD24DB', // base/colour/purple/700 (InfoBanner purple fg; bg purple/100 = lavenderMist)
  blackAlpha24: 'rgba(0, 0, 0, 0.24)', // colour/surface/overlay-subtle
} as const;

export type PaletteToken = keyof typeof palette;
