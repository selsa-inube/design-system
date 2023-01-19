import React from "react";
import { StyledGlobalGrid } from "./styles";
import { GridColor } from "../grid-color";

const ColorReference = (dataColors) => {
  return (
    <StyledGlobalGrid>
      {Object.entries(dataColors.colors.ref.palette).map(([name, colors]) => (
        <>
          <GridColor colors={colors}></GridColor>
        </>
      ))}
    </StyledGlobalGrid>
  );
};

export { ColorReference };
