import styled from "styled-components";

import { typography } from "../typography";

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

export { Container, Div, P };
