import { useRadioContext } from '@/components/radio/RadioContext';
import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';

export type RadioTextProps = ComponentProps<'span'> & {
  children: ReactNode;
};

export const RadioText = ({ className, children, ...props }: RadioTextProps) => {
  const { classes } = useRadioContext();

  return (
    <span className={cx(classes.text, className)} {...props}>
      {children}
    </span>
  );
};
