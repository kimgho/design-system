import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectLabelProps = Omit<ComponentProps<'label'>, 'htmlFor'> & {
  children: ReactNode;
};

export const SelectLabel = ({ className, children, ...props }: SelectLabelProps) => {
  const { classes, id, isRequired } = useSelectContext();

  return (
    <label htmlFor={id} className={cx(classes.label, className)} {...props}>
      {children}
      {isRequired && <span className={classes.requiredIndicator}>*</span>}
    </label>
  );
};
