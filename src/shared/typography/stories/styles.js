import styled from "styled-components";

import { typography } from "../typography";

/**
 * <div> container created with styled-components
 */
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  border: 2px solid #0052cc;
  padding-left: 15px;
  margin-top: 10px;
`;

const StyledSection = styled.section`
  overflow: hidden;
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
 * <li> itmens element list without list decoration
 */
const StyledItems = styled.li`
  list-style: none;
`;

export { StyledContainer, StyledRole, StyledItems, StyledSection };
