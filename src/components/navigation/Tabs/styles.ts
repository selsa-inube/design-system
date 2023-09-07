import styled from "styled-components";
import { ITabsProps } from ".";
import { inube } from "@shared/tokens";

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme }: ITabsProps) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
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
    color: ${({ theme }: ITabsProps) =>
      theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
    cursor: pointer;
  }
`;

export { StyledTabs, StyledIconWrapper };
