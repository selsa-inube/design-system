import React from "react";
import { Appearance } from "../types/Button.Appearances.type";
import { Type } from "../types/Button.Types.type";
import { Spacing } from "../types/Button.Spacings.type";
import { Variant } from "../types/Button.Variants.type";

export interface IButtonProps {
  children: React.ReactNode;
  appearance?: Appearance;
  isLoading?: boolean;
  isDisabled?: boolean;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: Type;
  spacing?: Spacing;
  variant?: Variant;
  isFullWidth?: boolean;
  handleClick?: () => void;
  path?: string;
}
