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

  const defaultIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : false;
  const defaultIsFocused = typeof isFocused === "boolean" ? isFocused : false;
  const defaultState = states.includes(state) ? state : "default";

  return (
    <StyledLabel
      isDisabled={defaultIsDisabled}
      isFocused={defaultIsFocused}
      htmlFor={htmlFor}
      state={defaultState}
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
