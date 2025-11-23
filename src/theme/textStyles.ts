import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    xs: { value: { fontSize: '{fontSizes.xs}', lineHeight: '1.125rem' } },
    sm: { value: { fontSize: '{fontSizes.sm}', lineHeight: '1.25rem' } },
    md: { value: { fontSize: '{fontSizes.md}', lineHeight: '1.5rem' } },
    lg: { value: { fontSize: '{fontSizes.lg}', lineHeight: '1.75rem' } },
    xl: { value: { fontSize: '{fontSizes.xl}', lineHeight: '1.875rem' } },
  },

  heading: {
    xs: { value: { fontSize: '{fontSizes.xs}', lineHeight: '1.125rem', fontWeight: '{fontWeights.semibold}' } },
    sm: { value: { fontSize: '{fontSizes.sm}', lineHeight: '1.25rem', fontWeight: '{fontWeights.semibold}' } },
    md: { value: { fontSize: '{fontSizes.md}', lineHeight: '1.5rem', fontWeight: '{fontWeights.bold}' } },
    lg: { value: { fontSize: '{fontSizes.lg}', lineHeight: '1.75rem', fontWeight: '{fontWeights.bold}' } },
    xl: { value: { fontSize: '{fontSizes.xl}', lineHeight: '1.875rem', fontWeight: '{fontWeights.bold}' } },
    '2xl': {
      value: {
        fontSize: '{fontSizes.2xl}',
        lineHeight: '2rem',
        fontWeight: '{fontWeights.bold}',
        letterSpacing: '-0.02em',
      },
    },
    '3xl': {
      value: {
        fontSize: '{fontSizes.3xl}',
        lineHeight: '2.25rem',
        fontWeight: '{fontWeights.bold}',
        letterSpacing: '-0.02em',
      },
    },
  },
});
