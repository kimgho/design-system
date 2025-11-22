import { cx } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import { useInputContext } from './InputContext';

export type InputFieldProps = Omit<ComponentProps<'input'>, 'id' | 'disabled' | 'required'>;

export const InputField = ({ className, ref, ...props }: InputFieldProps) => {
  const { classes, id, isInvalid, isDisabled, isRequired } = useInputContext();

  return (
    <input
      id={id}
      ref={ref}
      disabled={isDisabled}
      required={isRequired}
      aria-invalid={isInvalid}
      className={cx(classes.input, className)}
      {...props}
    />
  );
};
