import type { ComponentProps } from '@styled-system/types';
import { useSelectContext } from './SelectContext';

export type SelectValueProps = ComponentProps<'span'> & {
  placeholder?: string;
};

export const SelectValue = ({ className, placeholder, ...props }: SelectValueProps) => {
  const { value, placeholder: contextPlaceholder } = useSelectContext();

  const displayPlaceholder = placeholder || contextPlaceholder;

  return (
    <span className={className} {...props}>
      {value || displayPlaceholder || '선택하세요'}
    </span>
  );
};
