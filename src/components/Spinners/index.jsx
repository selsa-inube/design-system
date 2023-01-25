import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

const Spinner = (props) => {
  const { colorToken, thickness, size } = props;
  return (
    <StyledSpinner colorToken={colorToken} viewBox="0 0 50 50">
      <StyledCircle
        cx="25"
        cy="25"
        r={size}
        fill="none"
        thickness={thickness ? thickness : "4"}
      ></StyledCircle>
    </StyledSpinner>
  );
};

export { Spinner };
