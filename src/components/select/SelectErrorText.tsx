import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectErrorTextProps = ComponentProps<'span'> & {
  children: ReactNode;
};

export const SelectErrorText = ({ className, children, ...props }: SelectErrorTextProps) => {
  const { classes, descriptionId } = useSelectContext();

  if (!children) return null;

  return (
    <span id={descriptionId} className={cx(classes.description, className)} role="alert" {...props}>
      {children}
    </span>
  );
};
