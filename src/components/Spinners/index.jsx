import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

const Spinner = (props) => {
  return (
    <StyledSpinner color={props.color}>
      <StyledCircle
        cx="25"
        cy="25"
        r={props.size}
        fill="none"
        thickness={props.thickness}
      ></StyledCircle>
    </StyledSpinner>
  );
};

export { Spinner };
