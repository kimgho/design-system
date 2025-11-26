import { createContext, useContext } from 'react';

export type RadioItemContextValue = {
  itemValue: string;
  isChecked: boolean;
  isDisabled?: boolean;
  isFocused: boolean;
  name: string;
  onFocus: () => void;
  onBlur: () => void;
};

export const RadioItemContext = createContext<RadioItemContextValue | null>(null);

export const useRadioItemContext = () => {
  const context = useContext(RadioItemContext);
  if (!context) {
    throw new Error('Radio 하위 컴포넌트는 Radio.Item 안에서 사용해야 합니다.');
  }
  return context;
};
