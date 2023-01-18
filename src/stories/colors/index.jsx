import React from "react";
import {
  StyledGrid,
  StyledCard,
  StyledDivFlexInferior,
  StyledDivInfoCard,
  StyledGlobalGrid,
} from "./styles";
import { TinyColor } from "@ctrl/tinycolor";

const Colors = (dataColors) => {
  return (
    <StyledGlobalGrid>
      {Object.entries(dataColors.colors.ref.palette).map(([name, colors]) => (
        <div key={name}>
          <StyledGrid>
            {Object.entries(colors).map(([colorName, colorValue]) => (
              <StyledCard key={colorName}>
                <div
                  style={{
                    backgroundColor: colorValue,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    color: new TinyColor(colorValue).isDark()
                      ? "#FFFFFF"
                      : "#000000",
                  }}
                >
                  Lorem Ipsum
                </div>
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
            ))}
          </StyledGrid>
        </div>
      ))}
    </StyledGlobalGrid>
  );
};

export { Colors };
