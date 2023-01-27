import React from "react";
import { StyledSpinner, StyledCircle, StyledText } from "./styles";

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
  const { colorToken, thickness, classes, size, progressValue } = props;

  return (
    <StyledSpinner
      colorToken={colorToken}
      classes={classes}
      size={size}
      progressValue={progressValue}
      viewBox="0 0 50 50"
    >
      <StyledCircle
        cx="25"
        cy="25"
        r="16"
        fill="none"
        thickness={thickness || "3"}
        progressValue={progressValue}
      />
      {progressValue ? (
        <StyledText x="50%" y="-50%" textAnchor="middle" dy=".3em">
          {progressValue}%
        </StyledText>
      ) : null}
    </StyledSpinner>
  );
};

export { Spinner };
