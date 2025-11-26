import { RadioControl } from './RadioControl';
import { RadioDescription } from './RadioDescription';
import { RadioIndicator } from './RadioIndicator';
import { RadioItem } from './RadioItem';
import { RadioLabel } from './RadioLabel';
import { RadioRoot } from './RadioRoot';
import { RadioText } from './RadioText';

export const Radio = {
  Root: RadioRoot,
  Label: RadioLabel,
  Item: RadioItem,
  Control: RadioControl,
  Indicator: RadioIndicator,
  Text: RadioText,
  Description: RadioDescription,
};

export type { RadioRootProps } from './RadioRoot';
export type { RadioLabelProps } from './RadioLabel';
export type { RadioItemProps } from './RadioItem';
export type { RadioControlProps } from './RadioControl';
export type { RadioIndicatorProps } from './RadioIndicator';
export type { RadioTextProps } from './RadioText';
export type { RadioDescriptionProps } from './RadioDescription';
