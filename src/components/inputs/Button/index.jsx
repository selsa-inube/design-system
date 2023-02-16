import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

const Button = (props) => {
  const {
    children,
    appearance = "primary",
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
      appearance={appearance}
      isLoading={isLoading}
      isDisabled={isDisabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      type={type}
      spacing={spacing}
      variant={variant}
      isFullWidth={isFullWidth}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(["primary", "secondary"]),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  type: PropTypes.oneOf(["text", "submit", "reset"]),
  spacing: PropTypes.oneOf([
    "wide",
    "compact",
    "none",
    "small",
    "medium",
    "large",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined", "none"]),
  isFullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
};

export { Button };
