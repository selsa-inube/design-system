import styled from "styled-components";

import { typography } from "../typography";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  border: 2px solid #0052cc;
  padding-left: 15px;
  margin-top: 10px;
`;

const StyledRole = styled.p`
  font-family: ${typography.ref.typeface.brand}, sans-serif;
  line-height: ${(props) => typography.sys.typescale[props.role].lineHeight};
  font-size: ${(props) => typography.sys.typescale[props.role].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.role].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.role].weight};
  overflow: hidden;
`;

const StyledItems = styled.li`
  list-style: none;
`;

const StyledTextP = styled(StyledRole)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledContainer, StyledRole, StyledItems, StyledTextP };
