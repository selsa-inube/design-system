import { TypographyLabel } from "../types/type.Label";

export interface LabelProps {
  isDisabled: boolean;
  isFocused: boolean;
  htmlFor: string;
  isInvalid: boolean;
  typo?: TypographyLabel;
  children: React.ReactNode;
}
