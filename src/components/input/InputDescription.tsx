import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useInputContext } from './InputContext';

export type InputDescriptionProps = ComponentProps<'span'> & {
  children: ReactNode;
};

export const InputDescription = ({ className, children, ...props }: InputDescriptionProps) => {
  const { classes } = useInputContext();

  return (
    <span className={cx(classes.description, className)} {...props}>
      {children}
    </span>
  );
};
