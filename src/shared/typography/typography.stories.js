import React from "react";

import { typography } from "./typography";
import styled from "styled-components";

const story = {
  title: "typography",
  components: [typography],
};

/**
 * div contenedor creado con styled-components
 */
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
`;

const Div = styled.div`
  border: 2px solid;
  margin: 9px;
  padding-left: 10px;
`;

const P = styled.p`
  font-family: "${typography.ref.typeface.brand}", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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
