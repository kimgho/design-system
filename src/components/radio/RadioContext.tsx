import { createContext, useContext } from 'react';

export type RadioContextValue = {
  classes: Record<string, string>;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  labelId: string;
  descriptionId: string;
};

export const RadioContext = createContext<RadioContextValue | null>(null);

export const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('Radio 컴포넌트는 Radio.Root 안에서 사용해야 합니다.');
  }
  return context;
};
