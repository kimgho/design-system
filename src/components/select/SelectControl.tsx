import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectControlProps = ComponentProps<'div'> & {
  children: ReactNode;
};

export const SelectControl = ({ className, children, ...props }: SelectControlProps) => {
  const { classes } = useSelectContext();

  return (
    <div className={cx(classes.control, className)} {...props}>
      {children}
    </div>
  );
};
