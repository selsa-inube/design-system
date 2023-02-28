import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledSpan, StyledIcon } from "./styles";
import {
  Spinner,
  appearances as SpinnerAppearances,
} from "./../../feedback/Spinner";
import { colors } from "../../../shared/colors/colors";

export const appearances = Object.keys(colors.sys.actions);
const colorHomologationSpinner = {
  primary: "blue",
  secondary: "white",
  confirm: "green",
  warning: "yellow",
  remove: "red",
  help: "purple",
};

const getSpinnerColor = (isDisabled, variant, appearance) => {
  const homologationSpinnerColor = colorHomologationSpinner.secondary;
  const isDarkSpinnerAppearance = SpinnerAppearances.includes("dark");

  if (isDisabled) {
    return homologationSpinnerColor;
  }

  if (variant === "filled") {
    if (appearance !== "secondary" && appearance !== "warning") {
      return homologationSpinnerColor;
    }
  } else if (appearance !== "secondary") {
    return colorHomologationSpinner[appearance];
  }

  return isDarkSpinnerAppearance
    ? "dark"
    : colorHomologationSpinner[appearance];
};

export const types = ["text", "submit", "reset"];
export const spacings = ["wide", "compact"];
export const variants = ["filled", "outlined", "none"];
const defaultAppearance = "primary";
const defaultType = "text";
const defaultSpacing = "wide";
const defaultVariant = "filled";
const defaultSpinnerSize = "small";

const Button = (props) => {
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
      onClick={handleClick}
    >
      {isLoading ? (
        <Spinner
          appearance={getSpinnerColor(
            isDisabled,
            transformedVariant,
            transformedAppearance
          )}
          isTransparent={transformedTransparentSpinner}
          size={defaultSpinnerSize}
        />
      ) : (
        <StyledSpan isDisabled={isDisabled} variant={transformedVariant}>
          <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>
          {children}
          <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>
        </StyledSpan>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(appearances),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  type: PropTypes.oneOf(types),
  spacing: PropTypes.oneOf(spacings),
  variant: PropTypes.oneOf(variants),
  isFullWidth: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
