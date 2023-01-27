import React from "react";
import { StyledSpinner, StyledCircle, StyledText } from "./styles";

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
