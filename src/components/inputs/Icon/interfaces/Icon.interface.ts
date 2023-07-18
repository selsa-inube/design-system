import { Shape } from "../types/Icon.Shape.type";
import { Spacing } from "../types/Icon.Spacing.type";
import { Variant } from "../types/Icon.Variant.type";

export interface IIconProps {
  appearance?: string;
  cursorHover?: boolean;
  parentHover?: boolean;
  children: React.ReactNode;
  isDisabled?: boolean;
  spacing?: Spacing;
  variant?: Variant;
  shape?: Shape;
  size?: Spacing;
  handleClick?: () => void;
}
