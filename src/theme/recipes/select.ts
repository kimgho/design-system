import { sva } from '@styled-system/css';

export const selectRecipe = sva({
  slots: ['root', 'label', 'control', 'select', 'icon', 'description', 'requiredIndicator'],
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
    control: {
      position: 'relative',
      width: '100%',
    },
    select: {
      appearance: 'none',
      width: '100%',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'gray.300',
      bg: 'white',
      color: 'gray.700',
      outline: 'none',
      transition: 'all 0.2s',
      paddingRight: '8',

      _placeholder: {
        color: 'gray.300',
      },

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
    icon: {
      position: 'absolute',
      top: '50%',
      right: '3',
      transform: 'translateY(-50%)',
      color: 'gray.500',
      width: '4',
      height: '4',
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
        select: { h: '8', pl: '2.5', fontSize: 'sm' },
        label: { fontSize: 'sm' },
        description: { fontSize: 'xs' },
        icon: { width: '3.5', height: '3.5' },
      },
      md: {
        root: { gap: '1.5' },
        select: { h: '10', pl: '3', fontSize: 'md' },
        label: { fontSize: 'md' },
        description: { fontSize: 'xs' },
      },
      lg: {
        root: { gap: '2' },
        select: { h: '12', pl: '4', fontSize: 'lg' },
        label: { fontSize: 'lg' },
        description: { fontSize: 'xs' },
      },
    },
    invalid: {
      true: {
        select: {
          borderColor: 'danger',
          color: 'danger',
          _focusVisible: {
            borderColor: 'danger',
            boxShadow: '0 0 0 1px {colors.danger.DEFAULT}',
          },
        },
        label: { color: 'danger' },
        description: { color: 'danger' },
        icon: { color: 'danger' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
