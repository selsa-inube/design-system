import React from "react";
import { StyledSpinner, StyledCircle } from "./styles";

const Spinner = (props) => {
  const { size, appearance, isTransparent } = props;

  return (
    <StyledSpinner appearance={appearance} size={size} viewBox="0 0 50 50">
      <StyledCircle cx="25" cy="25" r="16" fill="none" />
    </StyledSpinner>
  );
};

export { Spinner };
