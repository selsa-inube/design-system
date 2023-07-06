import styled from "styled-components";
import { colors } from "../../../../shared/colors/colors";

const StyledContainerActions = styled.div`
  > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  & :hover {
    color: ${colors.sys.actions.secondary.filled};
  }
`;

export { StyledContainerActions };
