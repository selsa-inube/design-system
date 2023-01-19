import React from "react";
import {
  StyledCard,
  StyledDivFlexInferior,
  StyledDivInfoCard,
  StyledColor,
} from "./styles";

const CardColor = ({ colorName, colorValue }) => {
  return (
    <StyledCard key={colorName}>
      <StyledColor color={colorValue}>Lorem Ipsum</StyledColor>
      <StyledDivFlexInferior>
        <StyledDivInfoCard>
          <label htmlFor="name">Name</label>
          <span id="name">{colorName}</span>
        </StyledDivInfoCard>
        <StyledDivInfoCard>
          <label htmlFor="hex">Hex</label>
          <span id="hex">{colorValue}</span>
        </StyledDivInfoCard>
      </StyledDivFlexInferior>
    </StyledCard>
  );
};

export { CardColor };
