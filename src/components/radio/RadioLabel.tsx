import { useRadioContext } from '@/components/radio/RadioContext';
import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';

export type RadioLabelProps = Omit<ComponentProps<'label'>, 'htmlFor'> & {
  children: ReactNode;
};

export const RadioLabel = ({ className, children, ...props }: RadioLabelProps) => {
  const { classes, labelId, isRequired } = useRadioContext();

  return (
    <label id={labelId} className={cx(classes.label, className)} {...props}>
      {children}
      {isRequired && <span className={classes.requiredIndicator}>*</span>}
    </label>
  );
};
