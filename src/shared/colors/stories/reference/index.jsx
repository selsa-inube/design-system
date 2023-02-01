import React from "react";
import {
  StyledGlobalFlex,
  StyledCard,
  StyledDivGridBottom,
  StyledDivInfoCard,
  StyledColor,
  StyledGrid,
} from "./styles";

import { colors } from "../../colors";

const CardColor = (props) => {
  const { colorGroupWrap, colorName } = props;
  const colorCodeHex = colors.ref.palette[colorGroupWrap][colorName];

  return (
    <StyledCard>
      <StyledColor colorGroupWrap={colorGroupWrap} colorName={colorName}>
        Lorem Ipsum
      </StyledColor>
      <StyledDivGridBottom>
        <StyledDivInfoCard>
          <span>
            <strong>Name</strong>
          </span>
          <span>{colorName}</span>
        </StyledDivInfoCard>
        <StyledDivInfoCard>
          <span>
            <strong>Hex</strong>
          </span>
          <span>{colorCodeHex}</span>
        </StyledDivInfoCard>
      </StyledDivGridBottom>
    </StyledCard>
  );
};

const GridColor = (props) => {
  const { colorGroupWrap } = props;
  const colorListNames = Object.keys(colors.ref.palette[colorGroupWrap]);

  return (
    <StyledGrid>
      {colorListNames.map((colorName) => (
        <CardColor
          key={colorName}
          colorGroupWrap={colorGroupWrap}
          colorName={colorName}
        />
      ))}
    </StyledGrid>
  );
};

const ColorReference = () => {
  const colorPalette = Object.keys(colors.ref.palette);

  return (
    <StyledGlobalFlex>
      {colorPalette.map((colorGroupWrap) => (
        <GridColor key={colorGroupWrap} colorGroupWrap={colorGroupWrap} />
      ))}
    </StyledGlobalFlex>
  );
};

export { ColorReference };
