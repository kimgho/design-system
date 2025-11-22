import { createContext, useContext } from 'react';

export type InputContextValue = {
  classes: Record<string, string>;
  id: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const InputContext = createContext<InputContextValue | null>(null);

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('Input 컴포넌트는 Input.Root 안에서 사용해야 합니다.');
  }
  return context;
};
