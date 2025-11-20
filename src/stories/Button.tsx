import { cva, type RecipeVariantProps } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

const buttonStyle = cva({
  base: {
    display: 'flex',
    textAlign: 'center',
    bgColor: 'black',
    color: 'white',
    borderRadius: 'md',
  },
  variants: {
    visual: {
      solid: { bg: 'red.200', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.200' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

export const Button = styled('button', buttonStyle);
