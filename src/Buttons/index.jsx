import React from "react";
import { StyledButton } from "./styles";

const Button = ({ label, type = "button" }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export { Button };
