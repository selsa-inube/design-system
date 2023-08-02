import styled from "styled-components";

import { ITabProps } from ".";
import { colors } from "../../../shared/colors/colors";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ isSelected, isDisabled }: ITabProps) =>
    isSelected &&
    !isDisabled &&
    `4px solid ${colors.sys.actions.primary.filled}`};

  & > p {
    cursor: ${({ isDisabled }: ITabProps) =>
      isDisabled ? "not-allowed" : "pointer"};
  }
`;

export { StyledTab };
