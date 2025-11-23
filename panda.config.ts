import { defineConfig } from '@pandacss/dev';
import { tokens } from './src/theme/tokens';
import { semanticTokens } from './src/theme/semantic-tokens';
import { textStyles } from './src/theme/textStyles';
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },
  globalFontface: {
    Pretendard: [
      {
        src: [
          'url(/fonts/Pretendard-Regular.woff2) format("woff2"), url(/fonts/Pretendard-Regular.woff) format("woff")',
        ],
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: ['url(/fonts/Pretendard-Medium.woff2) format("woff2"), url(/fonts/Pretendard-Medium.woff) format("woff")'],
        fontWeight: 500,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: [
          'url(/fonts/Pretendard-SemiBold.woff2) format("woff2"), url(/fonts/Pretendard-SemiBold.woff) format("woff")',
        ],
        fontWeight: 600,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: ['url(/fonts/Pretendard-Bold.woff2) format("woff2"), url(/fonts/Pretendard-Bold.woff) format("woff")'],
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
  },
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',
});
