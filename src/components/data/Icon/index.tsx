import { Appearance } from "@src/shared/types/Appearance.type";
import { Spacing } from "./types/Icon.Spacing.type";
import { Variant } from "./types/Icon.Variant.type";
import { Shape } from "./types/Icon.Shape.type";
import { StyledIcon } from "./styles";
import { Themed } from "./types/Icon.Theme";

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
    onClick,
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
      onClick={onClick}
    >
      {icon}
    </StyledIcon>
  );
};

export { Icon };
