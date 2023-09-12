import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITabProps } from ".";
import { Themed } from "@shared/Types/Types";

interface IStyledTabProps extends ITabProps {
  theme?: Themed;
}
const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ selected, disabled, theme }: IStyledTabProps) =>
    selected &&
    !disabled &&
    `4px solid ${
      theme?.color?.stroke?.primary?.regular ||
      inube.color.stroke.primary.regular
    }`};

  & > p {
    cursor: ${({ disabled }: IStyledTabProps) =>
      disabled ? "not-allowed" : "pointer"};
  }
`;

export { StyledTab };
