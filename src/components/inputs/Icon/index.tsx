import { IIconProps } from "./interfaces/Icon.interface";
import { StyledIcon } from "./styles";

const Icon = (props: IIconProps) => {
  const {
    appearance = "black",
    cursorHover = false,
    parentHover = false,
    children,
    isDisabled = false,
    spacing = "wide",
    variant = "filled",
    shape = "circle",
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
      onClick={handleClick}
    >
      {children}
    </StyledIcon>
  );
};

export { Icon };
