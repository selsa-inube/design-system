import { Appearance } from "@src/shared/types/Appearance.type";

import { inube } from "@src/shared/tokens";
import { Shape, Spacing, Variant } from "../props";

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
  theme?: typeof inube;
  handleClick?: () => void;
}
