import { StyledButton, StyledSpan, StyledIcon, StyledLink } from "./styles";
import { Spinner } from "../../feedback/Spinner";
import { colors } from "../../../shared/colors/colors";
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
  isLoading?: boolean;
  isDisabled?: boolean;
  isdisabled?: number;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: Type;
  spacing?: Spacing;
  variant?: Variant;
  isFullWidth?: boolean;
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

  const transformedTransparentSpinner = transformedVariant === "filled";

  const transformedHandleClick = isDisabled ? null : handleClick;

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    const transformedLinkHandleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (isDisabled) {
        event.preventDefault();
      } else {
        handleClick && handleClick();
      }
    };

    return (
      <StyledLink
        to={path}
        isdisabled={+isDisabled}
        variant={transformedVariant}
        appearance={transformedAppearance}
        isfullwidth={+isFullWidth}
        onClick={transformedLinkHandleClick}
      >
        <StyledButton
          appearance={transformedAppearance}
          isDisabled={isDisabled}
          spacing={transformedSpacing}
          variant={transformedVariant}
          isFullWidth={isFullWidth}
        >
          <StyledSpan isDisabled={isDisabled} variant={transformedVariant}>
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
      isLoading={isLoading}
      isDisabled={isDisabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={transformedType}
      spacing={transformedSpacing}
      variant={transformedVariant}
      isFullWidth={isFullWidth}
      onClick={transformedHandleClick}
    >
      {isLoading && !isDisabled ? (
        <Spinner
          appearance={getSpinnerColor(
            transformedVariant,
            transformedAppearance
          )}
          isTransparent={transformedTransparentSpinner}
          size={defaultSpinnerSize}
        />
      ) : (
        <StyledSpan isDisabled={isDisabled} variant={transformedVariant}>
          {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
          {children}
          {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

export { Button };
