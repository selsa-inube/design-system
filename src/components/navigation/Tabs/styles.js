import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid ${colors.ref.palette.neutral.n40};

  & > div {
    width: fit-content;
  }
`;

export { StyledTabs };
