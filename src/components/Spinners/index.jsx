import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

const Spinner = (props) => {
  const { colorToken, size } = props;

  return (
    <StyledSpinner colorToken={colorToken} size={size} viewBox="0 0 50 50">
      <StyledCircle cx="25" cy="25" r="16" fill="none" />
    </StyledSpinner>
  );
};

export { Spinner };
