import { StyledButton, StyledSpan, StyledIcon, StyledLink } from "./styles";
import { Spinner } from "@feedback/Spinner";
import { colors } from "@shared/colors/colors";
import {
  Appearance,
  Type,
  Spacing,
  Variant,
  SpinnerColorHomologation,
  SpinnerColor,
  appearances,
  types,
  spacings,
  variants,
} from "./props";

export interface IButtonProps {
  children: React.ReactNode;
  appearance?: Appearance;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: Type;
  spacing?: Spacing;
  variant?: Variant;
  fullwidth?: boolean;
  handleClick?: (e?: Event) => void;
  path?: string;
}

const fixedColors: { [key: string]: any } = Object.assign(
  {},
  colors.sys.actions
);
delete fixedColors.disabled;

const spinnerColorHomologation: SpinnerColorHomologation = {
  filled: {
    primary: "white",
    secondary: "dark",
    confirm: "white",
    warning: "dark",
    remove: "white",
    help: "white",
  },
  outlined: {
    primary: "blue",
    secondary: "dark",
    confirm: "green",
    warning: "yellow",
    remove: "red",
    help: "purple",
  },
  none: {
    primary: "blue",
    secondary: "dark",
    confirm: "green",
    warning: "yellow",
    remove: "red",
    help: "purple",
  },
};

const getSpinnerColor = (
  variant: Variant,
  appearance: Appearance
): SpinnerColor => {
  return spinnerColorHomologation[variant][appearance] as SpinnerColor;
};

const defaultAppearance: Appearance = "primary";
const defaultType: Type = "button";
const defaultSpacing: Spacing = "wide";
const defaultVariant: Variant = "filled";
const defaultSpinnerSize = "small";

const Button = (props: IButtonProps) => {
  const {
    children,
    appearance = defaultAppearance,
    loading = false,
    disabled = false,
    iconBefore,
    iconAfter,
    type = defaultType,
    spacing = defaultSpacing,
    variant = defaultVariant,
    fullwidth = false,
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

  const transformedTransparentSpinner = transformedVariant === "filled";

  const transformedHandleClick = disabled ? null : handleClick;

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    const transformedLinkHandleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (disabled) {
        event.preventDefault();
      } else {
        handleClick && handleClick();
      }
    };

    return (
      <StyledLink
        to={path}
        disabled={+disabled}
        variant={transformedVariant}
        appearance={transformedAppearance}
        fullwidth={+fullwidth}
        onClick={transformedLinkHandleClick}
      >
        <StyledButton
          appearance={transformedAppearance}
          disabled={disabled}
          spacing={transformedSpacing}
          variant={transformedVariant}
          fullwidth={fullwidth}
        >
          <StyledSpan disabled={disabled} variant={transformedVariant}>
            {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
            {children}
            {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
          </StyledSpan>
        </StyledButton>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      appearance={transformedAppearance}
      loading={loading}
      disabled={disabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={transformedType}
      spacing={transformedSpacing}
      variant={transformedVariant}
      fullwidth={fullwidth}
      onClick={transformedHandleClick}
    >
      {loading && !disabled ? (
        <Spinner
          appearance={getSpinnerColor(
            transformedVariant,
            transformedAppearance
          )}
          transparent={transformedTransparentSpinner}
          size={defaultSpinnerSize}
        />
      ) : (
        <StyledSpan disabled={disabled} variant={transformedVariant}>
          {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
          {children}
          {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

export { Button };
