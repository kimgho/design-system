import { colorTokens } from './colors';
import { fontSizes, fontWeights } from './typography';
import { defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  colors: colorTokens,
  fontSizes,
  fontWeights,
});
