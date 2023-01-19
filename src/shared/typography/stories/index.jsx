import React from "react";
import { typography } from "../typography";
import { Container, Div, P } from "./styles";

/**
 * The TypographyRef function is a React component that is responsible for displaying a list of all the properties and values of the typography object.
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
        <Container>
          <Div>
            <P key={currentKey}>{`${currentKey}: ${value}`}</P>
          </Div>
        </Container>
      );
    });
  };

  return <Container>{createList(typography)}</Container>;
};

export { Typography };
