import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";
import { ITabsProps } from ".";

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid ${colors.ref.palette.neutral.n40};
  padding: 0px 16px;

  & > div {
    width: fit-content;
    ${(props: ITabsProps) =>
      props.type === "select" &&
      `
        & > li > p {
          position: relative;
          top: 0.5rem;
        }
      `}
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
  padding: 4px 0px;
  & > svg {
    width: 24px;
    height: 24px;
    color: ${colors.sys.text.dark};
    cursor: pointer;
  }
`;

export { StyledTabs, StyledIconWrapper };
