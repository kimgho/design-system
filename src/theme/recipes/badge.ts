import { cva } from '@styled-system/css';

export const badgeRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'full',
    px: '3',
    py: '1',
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
  },
  variants: {
    variant: {
      primary: {
        bg: 'primary',
        color: 'primary.fg',
        border: '1px solid',
        borderColor: 'transparent',
      },
      secondary: {
        bg: 'secondary',
        color: 'secondary.fg',
        border: '1px solid',
        borderColor: 'transparent',
      },
      destructive: {
        bg: 'danger',
        color: 'white',
        border: '1px solid',
        borderColor: 'transparent',
      },
      outline: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'sky.300',
        color: 'black',
      },
    },
    selected: {
      true: {
        opacity: 0.7,
        cursor: 'pointer',
      },
      false: {
        border: '1px solid',
        cursor: 'pointer',
      },
      null: {
        cursor: 'default',
      },
    },

    size: {
      sm: { h: '7', px: '2.5', fontSize: 'xs' },
      md: { h: '8', px: '3.5', fontSize: 'sm' },
      lg: { h: '10', px: '5', fontSize: 'md' },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    selected: false,
  },
});
