import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyleTab = styled.div`
  position: relative;
  display: inline-block;
  user-select: none;

  border-bottom: ${({ isSelected, isDisabled }) =>
    isSelected &&
    !isDisabled &&
    `2px solid ${colors.sys.actions.primary.filled}`};

  & > label {
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  }
`;

export { StyleTab };
