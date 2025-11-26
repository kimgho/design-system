import { useRadioItemContext } from '@/components/radio/RadioItemContext';
import { useRadioContext } from '@/components/radio/RadioContext';
import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ChangeEvent } from 'react';

export type RadioControlProps = Omit<ComponentProps<'input'>, 'type' | 'name' | 'value' | 'checked' | 'disabled'>;

export const RadioControl = ({ className, onChange, ...props }: RadioControlProps) => {
  const { classes, onValueChange, value } = useRadioContext();
  const { itemValue, isChecked, isDisabled, name, onFocus, onBlur } = useRadioItemContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      onValueChange(itemValue);
      onChange?.(e);
    }
  };

  const tabIndex = isChecked || (!value && itemValue) ? 0 : -1;

  return (
    <input
      type="radio"
      name={name}
      value={itemValue}
      checked={isChecked}
      disabled={isDisabled}
      tabIndex={tabIndex}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={cx(classes.control, className)}
      {...props}
    />
  );
};
