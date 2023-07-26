import { IIconProps } from "./interfaces/Icon.interface";
import { StyledIcon } from "./styles";

const Icon = (props: IIconProps) => {
  const {
    appearance = "primary",
    cursorHover = false,
    parentHover = false,
    icon,
    isDisabled = false,
    spacing = "wide",
    variant,
    shape = "rectangle",
    size = "24px",
    handleClick,
  } = props;

  return (
    <StyledIcon
      appearance={appearance}
      cursorHover={cursorHover}
      parentHover={parentHover}
      isDisabled={isDisabled}
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
