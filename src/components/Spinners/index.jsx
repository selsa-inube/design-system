import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

const Spinner = (props) => {
  return (
    <StyledSpinner color={props.color} viewBox="0 0 50 50">
      <StyledCircle
        cx="25"
        cy="25"
        r={props.size}
        fill="none"
        thickness={props.thickness ? props.thickness : "4"}
      ></StyledCircle>
    </StyledSpinner>
  );
};

export { Spinner };
