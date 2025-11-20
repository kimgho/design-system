import { semanticColors } from './semanticColors';
import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: semanticColors,
});
