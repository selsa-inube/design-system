import { IButtonProps } from "./interfaces/Button.interface";
import { Appearance, appearances } from "./types/Button.Appearances.type";
import { Type, types } from "./types/Button.Types.type";
import { Spacing, spacings } from "./types/Button.Spacings.type";
import { Variant, variants } from "./types/Button.Variants.type";
import { ButtonUI } from "./interfaz";

const defaultAppearance: Appearance = "primary";
const defaultType: Type = "button";
const defaultSpacing: Spacing = "wide";
const defaultVariant: Variant = "filled";

const Button = (props: IButtonProps) => {
  const {
    children,
    appearance = defaultAppearance,
    isLoading = false,
    isDisabled = false,
    iconBefore,
    iconAfter,
    type = defaultType,
    spacing = defaultSpacing,
    variant = defaultVariant,
    isFullWidth = false,
    handleClick,
    path,
  } = props;

  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;

  const transformedType = types.includes(type) ? type : defaultType;

  const transformedSpacing = spacings.includes(spacing)
    ? spacing
    : defaultSpacing;

  const transformedVariant = variants.includes(variant)
    ? variant
    : defaultVariant;

  const transformedHandleClick = isDisabled ? null : handleClick;

  return (
    <ButtonUI
      appearance={transformedAppearance}
      isLoading={isLoading}
      isDisabled={isDisabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={transformedType}
      spacing={transformedSpacing}
      variant={transformedVariant}
      isFullWidth={isFullWidth}
      handleClick={transformedHandleClick!}
      path={path}
    >
      {children}
    </ButtonUI>
  );
};

export { Button };
