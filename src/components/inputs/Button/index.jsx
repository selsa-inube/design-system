import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledSpan, StyledIcon, StyledLink } from "./styles";
import { Spinner } from "./../../feedback/Spinner";
import { colors } from "../../../shared/colors/colors";

const fixedColors = Object.assign({}, colors.sys.actions);
delete fixedColors.disabled;
export const appearances = Object.keys(fixedColors);

const spinnerColorHomologation = {
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

const getSpinnerColor = (variant, appearance) => {
  return spinnerColorHomologation[variant][appearance];
};

export const types = ["text", "submit", "reset", "link"];
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
    isdisabled = false,
    iconBefore,
    iconAfter,
    type = defaultType,
    spacing = defaultSpacing,
    variant = defaultVariant,
    isfullwidth = false,
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

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    return (
      <StyledLink to={path}>
        <StyledButton
          appearance={transformedAppearance}
          isdisabled={isdisabled}
          spacing={transformedSpacing}
          variant={transformedVariant}
          isfullwidth={isfullwidth}
          onClick={handleClick}
        >
          <StyledSpan isdisabled={isdisabled} variant={transformedVariant}>
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
      isdisabled={isdisabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={transformedType}
      spacing={transformedSpacing}
      variant={transformedVariant}
      isfullwidth={isfullwidth}
      onClick={handleClick}
    >
      {isLoading && !isdisabled ? (
        <Spinner
          appearance={getSpinnerColor(
            transformedVariant,
            transformedAppearance
          )}
          isTransparent={transformedTransparentSpinner}
          size={defaultSpinnerSize}
        />
      ) : (
        <StyledSpan isdisabled={isdisabled} variant={transformedVariant}>
          {iconBefore && <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>}
          {children}
          {iconAfter && <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>}
        </StyledSpan>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(appearances),
  isLoading: PropTypes.bool,
  isdisabled: PropTypes.bool,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  type: PropTypes.oneOf(types),
  spacing: PropTypes.oneOf(spacings),
  variant: PropTypes.oneOf(variants),
  isfullwidth: PropTypes.bool,
  handleClick: PropTypes.func,
  path: PropTypes.string,
};

export { Button };
