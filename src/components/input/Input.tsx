import { InputDescription } from './InputDescription';
import { InputErrorText } from './InputErrorText';
import { InputField } from './InputField';
import { InputLabel } from './InputLabel';
import { InputRoot } from './InputRoot';

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Field: InputField,
  Description: InputDescription,
  ErrorText: InputErrorText,
};

export type { InputRootProps } from './InputRoot';
export type { InputLabelProps } from './InputLabel';
export type { InputFieldProps } from './InputField';
export type { InputDescriptionProps } from './InputDescription';
export type { InputErrorTextProps } from './InputErrorText';
