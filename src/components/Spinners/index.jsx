import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

const Spinner = (props) => {
  const { colorToken, thickness, classes, size } = props;
  return (
    <StyledSpinner
      colorToken={colorToken}
      style={classes}
      size={size}
      viewBox="0 0 50 50"
    >
      <StyledCircle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        thickness={thickness ? thickness : "4"}
      ></StyledCircle>
    </StyledSpinner>
  );
};

export { Spinner };
