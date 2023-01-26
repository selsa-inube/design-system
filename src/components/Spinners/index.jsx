import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

/**
 * This is a functional component that renders a spinner.
 * It takes in props such as colorToken, thickness, classes, and size.
 * It returns a StyledSpinner component with the props colorToken and
 * style set to the props passed in, and size set to the size prop passed in.
 * It also includes a StyledCircle component which has cx, cy, r, fill
 * and thickness set to the props passed in. If no thickness prop is passed in,
 * it defaults to 4
 * @param {*} props
 * @returns
 */
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
