import React from "react";
import styled from "styled-components";

import { typography } from "./typography";

/**
 * history of typography tokens (system and reference)
 */
const story = {
  title: "typography",
  components: [typography],
};

/**
 * div container created with styled-components
 */
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
`;

/**
 * div card created with styled-components
 */
const Div = styled.div`
  border: 2px solid;
  margin: 9px;
  padding-left: 10px;
`;

/**
 * element <p> created with styled-components to display the tokens
 */
const P = styled.p`
  font-family: "${typography.ref.typeface.brand}", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 * The TypographyRef function is a React component that is responsible for displaying a list of all the properties and values of the typography object.
 * @returns cards with token information
 */
const TypographyRef = () => {
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

export default story;
export { TypographyRef };
