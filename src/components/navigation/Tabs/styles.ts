import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid ${colors.ref.palette.neutral.n40};
  padding: 0px 16px;

  & > div {
    width: fit-content;
  }
  & > div > ul {
    position: absolute;
    z-index: 1;
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    width: 24px;
    height: 24px;
    color: ${colors.sys.text.dark};
    cursor: pointer;
  }
`;

export { StyledTabs, StyledIconWrapper };
