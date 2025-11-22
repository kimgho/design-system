import { cva } from '@styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    cursor: 'pointer',
    transition: 'colors 0.2s ease-in-out',

    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'blue.500',
      outlineOffset: '2px',
    },

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: 'primary',
        color: 'primary.fg',
        _hover: { bg: 'primary.hover' },
        _active: { bg: 'primary.active' },
      },

      secondary: {
        bg: 'secondary',
        color: 'secondary.fg',
        _hover: { bg: 'secondary.hover' },
        _active: { bg: 'secondary.active' },
      },

      outline: {
        border: '1px solid',
        borderColor: 'sky.200',
        bg: 'transparent',
        color: 'sky.600',
        _hover: { bg: 'sky.50', borderColor: 'sky.300' },
        _active: { bg: 'sky.100' },
      },
    },
    size: {
      sm: { h: '8', px: '3', fontSize: 'xs' },
      md: { h: '10', px: '4', fontSize: 'sm' },
      lg: { h: '12', px: '6', fontSize: 'md' },

      icon: { h: '10', w: '10', px: '0' },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
