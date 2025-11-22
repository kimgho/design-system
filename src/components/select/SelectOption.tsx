import { cx } from '@styled-system/css';
import { css } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectOptionProps = Omit<ComponentProps<'li'>, 'value'> & {
  children: ReactNode;
  value: string;
  disabled?: boolean;
};

const optionStyles = css({
  px: '3',
  py: '2',
  cursor: 'pointer',
  fontSize: 'sm',
  color: 'gray.700',
  transition: 'all 0.15s',
  outline: 'none',
  _hover: {
    bg: 'gray.100',
  },
  _focus: {
    bg: 'gray.100',
  },
  '&[data-selected="true"]': {
    bg: 'primary.50',
    color: 'primary',
    fontWeight: 'medium',
  },
  '&[data-disabled="true"]': {
    opacity: 0.5,
    cursor: 'not-allowed',
    _hover: {
      bg: 'transparent',
    },
  },
});

export const SelectOption = ({ className, children, value: optionValue, disabled, ...props }: SelectOptionProps) => {
  const { value, onValueChange, onOpenChange } = useSelectContext();

  const isSelected = value === optionValue;

  const handleSelect = () => {
    if (disabled) return;
    onValueChange(optionValue);
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSelect();
        break;
      case 'Escape':
        onOpenChange(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        (e.currentTarget.nextElementSibling as HTMLElement)?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        (e.currentTarget.previousElementSibling as HTMLElement)?.focus();
        break;
    }
  };

  return (
    <li
      role="option"
      tabIndex={disabled ? -1 : 0}
      aria-selected={isSelected}
      aria-disabled={disabled}
      data-selected={isSelected}
      data-disabled={disabled}
      className={cx(optionStyles, className)}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </li>
  );
};
