import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledSpan, StyledIcon } from "./styles";
import { Spinner } from "./../../feedback/Spinner";
import { colors } from "../../../shared/colors/colors";

export const appearances = Object.keys(colors.sys.actions);
const colorHomologation = {
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
    type = "text",
    spacing,
    variant,
    isFullWidth,
    handleClick,
  } = props;

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
          appearance={
            isDisabled
              ? colorHomologation.secondary
              : variant !== "filled"
              ? colorHomologation[appearance]
              : colorHomologation.secondary
          }
          isTransparent={variant !== "filled" ? false : true}
          size={"medium"}
        />
      ) : (
        <StyledSpan
          isDisabled={isDisabled}
          variant={variants.includes(variant) ? variant : defaultVariant}
        >
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
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  type: PropTypes.oneOf(types),
  spacing: PropTypes.oneOf(spacings),
  variant: PropTypes.oneOf(variants),
  isFullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
};

export { Button };
