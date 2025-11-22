import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectDescriptionProps = ComponentProps<'span'> & {
  children: ReactNode;
};

export const SelectDescription = ({ className, children, ...props }: SelectDescriptionProps) => {
  const { classes, descriptionId } = useSelectContext();

  return (
    <span id={descriptionId} className={cx(classes.description, className)} {...props}>
      {children}
    </span>
  );
};
