import { SelectContent } from './SelectContent';
import { SelectControl } from './SelectControl';
import { SelectDescription } from './SelectDescription';
import { SelectErrorText } from './SelectErrorText';
import { SelectIcon } from './SelectIcon';
import { SelectLabel } from './SelectLabel';
import { SelectOption } from './SelectOption';
import { SelectRoot } from './SelectRoot';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Control: SelectControl,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Content: SelectContent,
  Option: SelectOption,
  Description: SelectDescription,
  ErrorText: SelectErrorText,
};

export type { SelectRootProps } from './SelectRoot';
export type { SelectLabelProps } from './SelectLabel';
export type { SelectControlProps } from './SelectControl';
export type { SelectTriggerProps } from './SelectTrigger';
export type { SelectValueProps } from './SelectValue';
export type { SelectIconProps } from './SelectIcon';
export type { SelectContentProps } from './SelectContent';
export type { SelectOptionProps } from './SelectOption';
export type { SelectDescriptionProps } from './SelectDescription';
export type { SelectErrorTextProps } from './SelectErrorText';
