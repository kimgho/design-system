import { RadioContext } from '@/components/radio/RadioContext';
import { radioRecipe } from '@/theme/recipes/radio';
import { cx } from '@styled-system/css';
import type { ComponentProps, RecipeVariantProps } from '@styled-system/types';
import { useId, type ReactNode } from 'react';

type RadioVariants = RecipeVariantProps<typeof radioRecipe>;

export type RadioRootProps = Omit<ComponentProps<'div'>, 'children' | 'onChange'> &
  RadioVariants & {
    children: ReactNode;
    value?: string;
    name?: string;
    disabled?: boolean;
    invalid?: boolean;
    required?: boolean;
    onValueChange?: (value: string) => void;
  };

export const RadioRoot = (props: RadioRootProps) => {
  const {
    size,
    orientation,
    invalid,
    disabled,
    required,
    value,
    name,
    onValueChange,
    id,
    className,
    children,
    ...restProps
  } = props;

  const generateId = useId();
  const radioId = id || generateId;
  const labelId = `${radioId}-label`;
  const descriptionId = `${radioId}-description`;
  const classes = radioRecipe({ size, orientation, invalid });

  return (
    <RadioContext.Provider
      value={{
        classes,
        name: name || radioId,
        value: value || '',
        onValueChange: onValueChange || (() => {}),
        isDisabled: disabled,
        isRequired: required,
        isInvalid: invalid,
        labelId,
        descriptionId: descriptionId,
      }}
    >
      <div
        role="radiogroup"
        id={radioId}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        data-orientation={orientation}
        data-disabled={disabled ? 'true' : undefined}
        data-invalid={invalid ? 'true' : undefined}
        className={cx(classes.root, className)}
        {...restProps}
      >
        {children}
      </div>
    </RadioContext.Provider>
  );
};
