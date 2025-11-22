import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useInputContext } from './InputContext';

export type InputErrorTextProps = ComponentProps<'span'> & {
  children: ReactNode;
};

export const InputErrorText = ({ className, children, ...props }: InputErrorTextProps) => {
  const { classes } = useInputContext();

  if (!children) return null;

  return (
    <span className={cx(classes.description, className)} {...props}>
      {children}
    </span>
  );
};
