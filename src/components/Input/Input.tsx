import { inputRecipe } from '@/theme/recipes/input';
import { cx } from '@styled-system/css';
import type { ComponentProps, RecipeVariantProps } from '@styled-system/types';
import { useId, type ReactNode } from 'react';

type InputVariants = RecipeVariantProps<typeof inputRecipe>;

export type InputProps = Omit<ComponentProps<'input'>, 'size'> &
  InputVariants & {
    label?: ReactNode;
    description?: ReactNode;
    errorText?: ReactNode;
  };

export const Input = ({
  size,
  label,
  description,
  errorText,
  id,
  className,
  disabled,
  required,
  ref,
  ...props
}: InputProps) => {
  const generateId = useId();
  const inputId = id || generateId;
  const isInvalid = !!errorText;

  const classes = inputRecipe({ size, invalid: isInvalid });

  return (
    <div className={cx(classes.root, className)}>
      {label && (
        <label htmlFor={inputId} className={classes.label}>
          {label}
          {required && <span className={classes.requiredIndicator}>*</span>}
        </label>
      )}
      <input id={inputId} ref={ref} disabled={disabled} className={classes.input} aria-invalid={isInvalid} {...props} />
      {errorText ? (
        <span className={classes.description}>{errorText}</span>
      ) : description ? (
        <span className={classes.description}>{description}</span>
      ) : null}
    </div>
  );
};
