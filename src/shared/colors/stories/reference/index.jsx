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

/**
 * It returns a styled div with a styled div inside of it
 * @returns A styled component that is a card with a color and a token.
 */
const CardColor = (props) => {
  const { token, color } = props;

  return (
    <StyledCard key={token}>
      <StyledColor color={color} token={token}>
        Lorem Ipsum
      </StyledColor>
      <StyledDivGridBottom>
        <StyledDivInfoCard>
          <span>
            <strong>Name</strong>
          </span>
          <span>{token}</span>
        </StyledDivInfoCard>
        <StyledDivInfoCard>
          <span>
            <strong>Hex</strong>
          </span>
          <span>{colors.ref.palette[color][token]}</span>
        </StyledDivInfoCard>
      </StyledDivGridBottom>
    </StyledCard>
  );
};

/**
 * It takes a color as a prop, and returns a grid of cards with the color and token as props
 * @returns A styled grid with a card color
 */
const GridColor = (props) => {
  const { colorName, colorGroup } = props;

  return (
    <StyledGrid>
      {Object.keys(colorGroup).map((token) => (
        <CardColor key={token} color={colorName} token={token} />
      ))}
    </StyledGrid>
  );
};

/**
 * It takes in a data object, and returns a styled flexbox with a grid of colors
 * @returns A styled component that is a flexbox with a grid of colors.
 */
const ColorReference = (props) => {
  const { colors } = props;

  return (
    <StyledGlobalFlex>
      {Object.entries(colors.ref.palette).map(([colorName, colorGroup]) => (
        <GridColor
          key={colorName}
          colorName={colorName}
          colorGroup={colorGroup}
        />
      ))}
    </StyledGlobalFlex>
  );
};

export { ColorReference };
