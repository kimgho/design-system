import { sva } from '@styled-system/css';

export const inputRecipe = sva({
  slots: ['root', 'label', 'input', 'description', 'requiredIndicator'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      width: '100%',
    },
    label: {
      fontWeight: 'medium',
      color: 'gray.700',
      _peerDisabled: { opacity: 0.7 },
    },
    input: {
      appearance: 'none',
      width: '100%',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'gray.300',
      bg: 'white',
      color: 'gray.900',
      outline: 'none',
      transition: 'all 0.2s',

      _placeholder: { color: 'gray.400' },

      _focusVisible: {
        borderColor: 'primary',

        boxShadow: '0 0 0 1px {colors.primary.DEFAULT}',
      },

      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        bg: 'gray.50',
      },
    },
    description: {
      color: 'gray.500',
    },
    requiredIndicator: {
      color: 'blue.500',
      ml: '1',
      mt: '0.5',
    },
  },
  variants: {
    size: {
      sm: {
        root: { gap: '1' },
        input: { h: '8', px: '2.5', fontSize: 'xs' },
        label: { fontSize: 'xs' },
        description: { fontSize: 'xs' },
      },
      md: {
        root: { gap: '1.5' },
        input: { h: '10', px: '3', fontSize: 'sm' },
        label: { fontSize: 'sm' },
        description: { fontSize: 'xs' },
      },
      lg: {
        root: { gap: '2' },
        input: { h: '12', px: '4', fontSize: 'md' },
        label: { fontSize: 'md' },
        description: { fontSize: 'sm' },
      },
    },
    invalid: {
      true: {
        input: {
          borderColor: 'danger',
          color: 'danger',
          _focusVisible: {
            borderColor: 'danger',
            boxShadow: '0 0 0 1px {colors.danger.DEFAULT}',
          },
        },
        label: { color: 'danger' },
        description: { color: 'danger' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
