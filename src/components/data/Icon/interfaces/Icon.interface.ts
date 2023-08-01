import { Appearance } from "@src/shared/types/Appearance.type";

import { Themed, Shape, Spacing, Variant } from "../props";

export interface IIconProps extends Themed {
  appearance: Appearance;
  cursorHover?: boolean;
  parentHover?: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
  spacing?: Spacing;
  variant?: Variant;
  shape?: Shape;
  size?: string;
  onClick?: () => void;
}
