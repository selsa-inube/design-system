import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./styles";

const Label = (props) => {
  const { htmlFor, state = "default", children } = props;

  return (
    <StyledLabel as="label" htmlFor={htmlFor} state={state}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["default", "disabled", "focus", "invalid"]),
  children: PropTypes.string,
};

export default Label;
