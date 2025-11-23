import { colorTokens } from './colors';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './typography';
import { defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  colors: colorTokens,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
});
