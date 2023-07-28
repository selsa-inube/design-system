import { Appearance } from "@src/shared/types/Appearance.type";
import { Shape } from "../types/Icon.Shape.type";
import { Spacing } from "../types/Icon.Spacing.type";
import { Variant } from "../types/Icon.Variant.type";

export interface IIconProps {
  appearance: Appearance;
  cursorHover?: boolean;
  parentHover?: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
  spacing?: Spacing;
  variant?: Variant;
  shape?: Shape;
  size?: string;
  handleClick?: () => void;
}
