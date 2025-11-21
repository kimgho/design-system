import { selectRecipe } from '@/theme/recipes/select';
import { cx } from '@styled-system/css';
import type { ComponentProps, RecipeVariantProps } from '@styled-system/types';
import { useId, type ReactNode } from 'react';

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

type selectVariants = RecipeVariantProps<typeof selectRecipe>;

export type SelectProps = Omit<ComponentProps<'select'>, 'size'> &
  selectVariants & {
    label?: ReactNode;
    description?: ReactNode;
    errorText?: ReactNode;
    placeholder?: string;
  };

export const Select = ({
  size = 'md',
  label,
  description,
  errorText,
  id,
  className,
  disabled,
  required,
  children,
  placeholder,
  ...props
}: SelectProps) => {
  const generateId = useId();
  const selectId = id || generateId;
  const descriptionId = description || errorText ? `${selectId}-description` : undefined;
  const isInvalid = !!errorText;

  const classes = selectRecipe({ size, invalid: isInvalid });

  return (
    <div className={cx(classes.root, className)}>
      {label && (
        <label htmlFor={selectId} className={classes.label}>
          {label}
          {required && <span className={classes.requiredIndicator}>*</span>}
        </label>
      )}
      <div className={classes.control}>
        <select
          id={selectId}
          disabled={disabled}
          className={classes.select}
          aria-invalid={isInvalid}
          aria-describedby={descriptionId}
          required={required}
          defaultValue={placeholder ? '' : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <ChevronDownIcon className={classes.icon} />
      </div>
      {errorText ? (
        <span id={descriptionId} className={classes.description} role="alert">
          {errorText}
        </span>
      ) : description ? (
        <span id={descriptionId} className={classes.description}>
          {description}
        </span>
      ) : null}
    </div>
  );
};
