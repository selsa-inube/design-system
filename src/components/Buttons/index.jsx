import React from "react";
import { StyledButton } from "./styles";

const Button = ({ label, type = "button", href }) => {
  return (
    <StyledButton type={type} href={href}>
      {label}
    </StyledButton>
  );
};

export { Button };
