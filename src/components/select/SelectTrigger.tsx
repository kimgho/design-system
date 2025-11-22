import { cx } from '@styled-system/css';
import { css } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectTriggerProps = Omit<ComponentProps<'button'>, 'onClick'> & {
  children: ReactNode;
};

const triggerStyles = css({
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const SelectTrigger = ({ className, children, ...props }: SelectTriggerProps) => {
  const { classes, id, isOpen, isDisabled, onOpenChange } = useSelectContext();

  return (
    <button
      type="button"
      id={id}
      className={cx(classes.select, triggerStyles, className)}
      onClick={() => onOpenChange(!isOpen)}
      disabled={isDisabled}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </button>
  );
};
