import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./styles";

const states = ["default", "invalid"];

const typos = ["labelLarge", "labelMedium", "labelSmall"];

const defaultIsDisabled = false;
const defaultIsFocused = false;
const defaultState = "default";
const defaultTypo = "labelLarge";

const Label = (props) => {
  const {
    isDisabled = false,
    isFocused = false,
    htmlFor,
    state = "default",
    typo = "labelLarge",
    children,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedIsFocused =
    typeof isFocused === "boolean" ? isFocused : defaultIsFocused;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledLabel
      isDisabled={transformedIsDisabled}
      isFocused={transformedIsFocused}
      htmlFor={htmlFor}
      state={transformedState}
      typo={transformedTypo}
    >
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  state: PropTypes.oneOf(states),
  typo: PropTypes.oneOf(typos),
  children: PropTypes.node,
};

export { Label, states, typos };
