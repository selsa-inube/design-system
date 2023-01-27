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
  const { colorGroup } = props;
  const colorGroupWrap = colorGroup[0];
  const colorListNames = Object.keys(colorGroup[1]);

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

const ColorReference = (props) => {
  const { colors } = props;
  const colorPalette = Object.entries(colors.ref.palette);

  return (
    <StyledGlobalFlex>
      {colorPalette.map((colorGroup) => (
        <GridColor key={colorGroup} colorGroup={colorGroup} />
      ))}
    </StyledGlobalFlex>
  );
};

export { ColorReference };
