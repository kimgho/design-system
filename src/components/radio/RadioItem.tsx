import { RadioItemContext } from '@/components/radio/RadioItemContext';
import { useRadioContext } from '@/components/radio/RadioContext';
import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import { useState, type ReactNode } from 'react';

export type RadioItemProps = ComponentProps<'label'> & {
  value: string;
  children: ReactNode;
  disabled?: boolean;
};

export const RadioItem = ({ value: itemValue, disabled, className, children, ...props }: RadioItemProps) => {
  const { classes, value, isDisabled: groupDisabled, name } = useRadioContext();
  const [isFocused, setIsFocused] = useState(false);

  const isDisabled = disabled || groupDisabled;
  const isChecked = value === itemValue;

  return (
    <RadioItemContext.Provider
      value={{
        itemValue,
        isChecked,
        isDisabled,
        isFocused,
        name,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
      }}
    >
      <label
        data-disabled={isDisabled ? 'true' : undefined}
        data-state={isChecked ? 'checked' : 'unchecked'}
        className={cx(classes.item, className)}
        {...props}
      >
        {children}
      </label>
    </RadioItemContext.Provider>
  );
};
