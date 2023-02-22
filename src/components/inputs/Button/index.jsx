import React from "react";
import PropTypes from "prop-types";
import {
  StyledButton,
  StyledSpan,
  StyledIcon,
  StyledSpanContainer,
} from "./styles";
import { Spinner } from "./../../feedback/Spinner";
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
export const types = ["text", "submit", "reset"];
export const spacings = ["wide", "compact"];
export const variants = ["filled", "outlined", "none"];
const defaultAppearance = "primary";
const defaultType = "text";
const defaultSpacing = "wide";
const defaultVariant = "filled";

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
  const spinnerColor = isDisabled
    ? colorHomologationSpinner.secondary
    : variant !== "filled"
    ? colorHomologationSpinner[appearance]
    : colorHomologationSpinner.secondary;

  return (
    <StyledButton
      appearance={
        appearances.includes(appearance) ? appearance : defaultAppearance
      }
      isLoading={isLoading}
      isDisabled={isDisabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={types.includes(type) ? type : defaultType}
      spacing={spacings.includes(spacing) ? spacing : defaultSpacing}
      variant={variants.includes(variant) ? variant : defaultVariant}
      isFullWidth={isFullWidth}
      onClick={handleClick}
    >
      {isLoading ? (
        <Spinner
          appearance={spinnerColor}
          isTransparent={variant !== "filled" ? false : true}
          size={spacing === "wide" ? "medium" : "small"}
        />
      ) : (
        <StyledSpanContainer>
          <StyledSpan
            isDisabled={isDisabled}
            variant={variants.includes(variant) ? variant : defaultVariant}
          >
            <StyledIcon id="mdIcon">{iconBefore}</StyledIcon>
            {children}
            <StyledIcon id="mdIcon">{iconAfter}</StyledIcon>
          </StyledSpan>
        </StyledSpanContainer>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(appearances).isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  type: PropTypes.oneOf(types).isRequired,
  spacing: PropTypes.oneOf(spacings).isRequired,
  variant: PropTypes.oneOf(variants).isRequired,
  isFullWidth: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
