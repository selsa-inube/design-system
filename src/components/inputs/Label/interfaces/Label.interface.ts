import { TypographyLabel } from "../props";

export interface ILabelProps {
  isDisabled?: boolean;
  isFocused?: boolean;
  htmlFor: string;
  isInvalid?: boolean;
  typo?: TypographyLabel;
  children?: React.ReactNode;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
