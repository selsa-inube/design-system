//import { IIconProps } from "./interfaces/Icon.interface";
import { Appearance } from "@src/shared/types/Appearance.type";
import { StyledIcon } from "./styles";
import { Spacing } from "./types/Icon.Spacing.type";
import { Variant } from "./types/Icon.Variant.type";
import { Shape } from "./types/Icon.Shape.type";
import { inube } from "@src/shared/tokens";

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

const Icon = (props: IIconProps) => {
  const {
    appearance,
    cursorHover,
    parentHover,
    icon,
    disabled,
    spacing,
    variant,
    shape,
    size,
    handleClick,
  } = props;

  return (
    <StyledIcon
      appearance={appearance}
      cursorHover={cursorHover}
      parentHover={parentHover}
      disabled={disabled}
      spacing={spacing}
      variant={variant}
      shape={shape}
      size={size}
      onClick={handleClick}
    >
      {icon}
    </StyledIcon>
  );
};

export { Icon };
