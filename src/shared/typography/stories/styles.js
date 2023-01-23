import styled from "styled-components";

import { typography } from "../typography";

/**
 * <div> container created with styled-components
 */
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  border: 2px solid #0052cc;
  padding-left: 15px;
`;

/**
 * <p> paragraph element that with token styles
 */
const StyledRole = styled.p`
  font-family: ${typography.ref.typeface.brand}, sans-serif;
  line-height: ${(props) => typography.sys.typescale[props.role].lineHeight};
  font-size: ${(props) => typography.sys.typescale[props.role].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.role].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.role].weight};
`;

/**
 * <lu> list element without list decoration
 */
const StyledList = styled.li`
  list-style: none;
`;

export { StyledContainer, StyledRole, StyledList };
