import { IIconProps } from "./interfaces/Icon.interface";
import { StyledIcon } from "./styles";

const Icon = (props: IIconProps) => {
  const {
    appearance,
    cursorHover,
    parentHover,
    children,
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
      {children}
    </StyledIcon>
  );
};

export { Icon };
