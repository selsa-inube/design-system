import React from "react";
import PropTypes from "prop-types";
import { StyledSpinner } from "./styles";

const Spinner = (props) => {
  const { size, appearance, isTransparent } = props;

  return (
    <StyledSpinner
      appearance={appearance}
      size={size}
      isTransparent={isTransparent}
    ></StyledSpinner>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  appearance: PropTypes.string,
  isTransparent: PropTypes.bool,
};

export { Spinner };
