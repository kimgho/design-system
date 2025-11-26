import { useRadioItemContext } from '@/components/radio/RadioItemContext';
import { useRadioContext } from '@/components/radio/RadioContext';
import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';

export type RadioIndicatorProps = ComponentProps<'span'>;

export const RadioIndicator = ({ className, ...props }: RadioIndicatorProps) => {
  const { classes } = useRadioContext();
  const { isChecked, isDisabled, isFocused } = useRadioItemContext();

  return (
    <span
      data-state={isChecked ? 'checked' : 'unchecked'}
      data-disabled={isDisabled ? 'true' : undefined}
      data-focus={isFocused ? 'true' : undefined}
      className={cx(classes.indicator, className)}
      {...props}
    />
  );
};
