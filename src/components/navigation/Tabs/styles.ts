import styled from "styled-components";
import { ITabsProps } from ".";
import { inube } from "@shared/tokens";

import { Themed } from "@shared/types/types";

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

export { StyledTabs };
