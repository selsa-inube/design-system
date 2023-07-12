import styled from "styled-components";
import { colors } from "../../../../shared/colors/colors";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${colors.ref.palette.neutral.n0};
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 24px;
  height: 24px;

  &:hover {
    background-color: ${colors.sys.actions.secondary.filled};
  }

  & svg {
    width: 16px;
    height: 16px;
    color: ${colors.sys.text.dark};
  }

  & svg:hover {
    color: ${colors.sys.text.information};
  }
`;

export { StyledButton };
