import styled from "styled-components";

import { TabProps } from "./interfaces/interface.Tab";
import { colors } from "../../../shared/colors/colors";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ isSelected, isDisabled }: TabProps) =>
    isSelected &&
    !isDisabled &&
    `4px solid ${colors.sys.actions.primary.filled}`};

  & > p {
    cursor: ${({ isDisabled }: TabProps) =>
      isDisabled ? "not-allowed" : "pointer"};
  }
`;

export { StyledTab };
