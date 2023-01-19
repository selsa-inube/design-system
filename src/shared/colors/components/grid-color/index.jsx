import React from "react";
import { StyledGrid } from "./styles";
import { CardColor } from "../card-color";

const GridColor = ({ colors }) => {
  return (
    <StyledGrid>
      {Object.entries(colors).map(([colorName, colorValue]) => (
        <CardColor colorName={colorName} colorValue={colorValue}></CardColor>
      ))}
    </StyledGrid>
  );
};

export { GridColor };
