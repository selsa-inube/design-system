import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  background-color: ${colors.sys.actions.primary.filled};

  & > svg {
    color: ${colors.ref.palette.neutral.n0};
  }
`;

export { StyledAvatar };
