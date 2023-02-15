import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./styles";

const states = ["default", "invalid"];

const Label = (props) => {
  const {
    isDisabled = false,
    isFocused = false,
    htmlFor,
    state = "default",
    children,
  } = props;

  return (
    <StyledLabel
      isDisabled={isDisabled}
      isFocused={isFocused}
      htmlFor={htmlFor}
      state={state}
    >
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  state: PropTypes.oneOf(states).isRequired,
  children: PropTypes.node,
};

export default Label;
export { states };
