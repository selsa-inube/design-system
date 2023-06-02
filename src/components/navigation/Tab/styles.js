import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ isSelected, isDisabled }) =>
    isSelected &&
    !isDisabled &&
    `4px solid ${colors.sys.actions.primary.filled}`};

  & > label {
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  }
`;

export { StyledTab };
