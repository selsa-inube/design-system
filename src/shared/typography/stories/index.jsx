import React from "react";
import { typography } from "../typography";
import { StyledContainer, StyledDiv, StyledP } from "./styles";

/**
 * The Typography function is a React component that is responsible for displaying a list of all the properties and values of the typography object.
 * @returns cards with token information
 */
const Typography = () => {
  const createList = (obj, parentKey) => {
    return Object.entries(obj).map(([key, value]) => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === "object") {
        return createList(value, currentKey);
      }
      return (
        <StyledContainer>
          <StyledDiv>
            <StyledP key={currentKey}>{`${currentKey}: ${value}`}</StyledP>
          </StyledDiv>
        </StyledContainer>
      );
    });
  };
  return <StyledContainer>{createList(typography)}</StyledContainer>;
};

export { Typography };
