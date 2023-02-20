import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./styles";

const states = ["default", "invalid"];

const defaultIsDisabled = false;
const defaultIsFocused = false;
const defaultState = "default";

const Label = (props) => {
  const {
    isDisabled = false,
    isFocused = false,
    htmlFor,
    state = "default",
    children,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;
  const transformedIsFocused =
    typeof isFocused === "boolean" ? isFocused : defaultIsFocused;
  const transformedState = states.includes(state) ? state : defaultState;

  return (
    <StyledLabel
      isDisabled={transformedIsDisabled}
      isFocused={transformedIsFocused}
      htmlFor={htmlFor}
      state={transformedState}
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
