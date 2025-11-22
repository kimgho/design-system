import { createContext, useContext } from 'react';

export type SelectContextValue = {
  classes: Record<string, string>;
  id: string;
  descriptionId?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isOpen: boolean;
  value: string;
  onValueChange: (value: string) => void;
  onOpenChange: (open: boolean) => void;
  placeholder?: string;
};

export const SelectContext = createContext<SelectContextValue | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select 컴포넌트는 Select.Root 안에서 사용해야 합니다.');
  }
  return context;
};
