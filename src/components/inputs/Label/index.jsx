import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./styles";

const Label = (props) => {
  const { htmlFor, state, children } = props;

  return (
    <StyledLabel htmlFor={htmlFor} state={state}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["default", "disabled", "focus", "invalid"])
    .isRequired,
  children: PropTypes.node,
};

Label.defaultProps = {
  state: "default",
};
export default Label;
