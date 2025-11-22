import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useInputContext } from './InputContext';

export type InputLabelProps = Omit<ComponentProps<'label'>, 'htmlFor'> & {
  children: ReactNode;
};

export const InputLabel = ({ className, children, ...props }: InputLabelProps) => {
  const { classes, id, isRequired } = useInputContext();

  return (
    <label htmlFor={id} className={cx(classes.label, className)} {...props}>
      {children}
      {isRequired && <span className={classes.requiredIndicator}>*</span>}
    </label>
  );
};
