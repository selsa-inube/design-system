import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITabProps } from ".";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ selected, disabled, theme }: ITabProps) =>
    selected &&
    !disabled &&
    `4px solid ${
      theme?.color?.stroke?.primary?.regular ||
      inube.color.stroke.primary.regular
    }`};

  & > p {
    cursor: ${({ disabled }: ITabProps) =>
      disabled ? "not-allowed" : "pointer"};
  }
`;

export { StyledTab };
