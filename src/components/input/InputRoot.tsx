import { inputRecipe } from '@/theme/recipes/input';
import { cx } from '@styled-system/css';
import type { ComponentProps, RecipeVariantProps } from '@styled-system/types';
import { useId, type ReactNode } from 'react';
import { InputContext } from './InputContext';

type InputVariants = RecipeVariantProps<typeof inputRecipe>;

export type InputRootProps = Omit<ComponentProps<'div'>, 'children'> &
  InputVariants & {
    children: ReactNode;
    invalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    id?: string;
  };

export const InputRoot = ({ size, invalid, disabled, required, id, className, children, ...props }: InputRootProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const classes = inputRecipe({ size, invalid });

  return (
    <InputContext.Provider
      value={{
        classes,
        id: inputId,
        isInvalid: invalid,
        isRequired: required,
        isDisabled: disabled,
      }}
    >
      <div className={cx(classes.root, className)} {...props}>
        {children}
      </div>
    </InputContext.Provider>
  );
};
