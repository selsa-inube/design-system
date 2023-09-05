import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITabProps } from ".";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ isSelected, isDisabled, theme }: ITabProps) =>
    isSelected &&
    !isDisabled &&
    `4px solid ${
      theme?.color.stroke.primary.regular || inube.color.stroke.primary.regular
    }`};

  & > p {
    cursor: ${({ isDisabled }: ITabProps) =>
      isDisabled ? "not-allowed" : "pointer"};
  }
`;

export { StyledTab };
