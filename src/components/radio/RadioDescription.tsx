import { useRadioContext } from '@/components/radio/RadioContext';
import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';

export type RadioDescriptionProps = ComponentProps<'span'> & {
  children: ReactNode;
};

export const RadioDescription = ({ className, children, ...props }: RadioDescriptionProps) => {
  const { classes, descriptionId } = useRadioContext();

  return (
    <span id={descriptionId} className={cx(classes.description, className)} {...props}>
      {children}
    </span>
  );
};
