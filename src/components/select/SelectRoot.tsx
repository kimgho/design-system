import { selectRecipe } from '@/theme/recipes/select';
import { cx } from '@styled-system/css';
import type { ComponentProps, RecipeVariantProps } from '@styled-system/types';
import { useId, useState, type ReactNode } from 'react';
import { SelectContext } from './SelectContext';

type SelectVariants = RecipeVariantProps<typeof selectRecipe>;

export type SelectRootProps = Omit<ComponentProps<'div'>, 'children' | 'onChange'> &
  SelectVariants & {
    children: ReactNode;
    invalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    id?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placeholder?: string;
  };

export const SelectRoot = ({
  size,
  invalid,
  disabled,
  required,
  id,
  className,
  children,
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  placeholder,
  ...props
}: SelectRootProps) => {
  const generatedId = useId();
  const selectId = id || generatedId;
  const descriptionId = `${selectId}-description`;
  const classes = selectRecipe({ size, invalid });

  const [internalValue, setInternalValue] = useState(defaultValue);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlledValue = controlledValue !== undefined;
  const isControlledOpen = controlledOpen !== undefined;

  const value = isControlledValue ? controlledValue : internalValue;
  const isOpen = isControlledOpen ? controlledOpen : internalOpen;

  const handleValueChange = (newValue: string) => {
    if (!isControlledValue) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (disabled) return;
    if (!isControlledOpen) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <SelectContext.Provider
      value={{
        classes,
        id: selectId,
        descriptionId,
        isInvalid: invalid,
        isRequired: required,
        isDisabled: disabled,
        isOpen,
        value,
        onValueChange: handleValueChange,
        onOpenChange: handleOpenChange,
        placeholder,
      }}
    >
      <div className={cx(classes.root, className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};
