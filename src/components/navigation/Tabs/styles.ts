import styled from "styled-components";
import { ITabsProps } from ".";
import { inube } from "@shared/tokens";

import { Themed } from "@shared/Types/Types";

interface IStyledTabsProps extends ITabsProps {
  theme?: Themed;
}

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme }: IStyledTabsProps) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  padding: ${inube.spacing.s0} ${inube.spacing.s200};

  & > div {
    width: fit-content;
    ${(props: IStyledTabsProps) =>
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
  padding: ${inube.spacing.s050} ${inube.spacing.s0};
  & > svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }: IStyledTabsProps) =>
      theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
    cursor: pointer;
  }
`;

export { StyledTabs, StyledIconWrapper };
