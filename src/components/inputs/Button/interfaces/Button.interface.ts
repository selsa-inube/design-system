import { Appearance, Spacing, Type, Variant } from "../props";

export interface IButtonProps {
  children: React.ReactNode;
  appearance?: Appearance;
  isLoading?: boolean;
  isDisabled?: boolean;
  isdisabled?: number;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: Type;
  spacing?: Spacing;
  variant?: Variant;
  isFullWidth?: boolean;
  handleClick?: (e?: Event) => void;
  path?: string;
}
