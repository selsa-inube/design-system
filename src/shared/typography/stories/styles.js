import styled from "styled-components";

import { typography } from "../typography";

/**
 * <div> container created with styled-components
 */
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
`;

/**
 * <div> card created with styled-components
 */
const StyledDiv = styled.div`
  border: 2px solid;
  margin: 9px;
  padding-left: 10px;
`;

/**
 * element <p> created with styled-components to display the tokens
 */
const StyledP = styled.p`
  font-family: "${typography.ref.typeface.brand}", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledRole = styled.p`
  font-family: ${typography.ref.typeface.brand}, sans-serif;
  line-height: ${(props) => typography.sys.typescale[props.role].lineHeight};
  font-size: ${(props) => typography.sys.typescale[props.role].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.role].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.role].weight};
`;

export { StyledContainer, StyledDiv, StyledP, StyledRole };
