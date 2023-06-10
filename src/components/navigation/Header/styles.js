import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledHeader = styled.div`
  & > div > div > div {
    position: unset;
    display: flex;
    align-items: center;
  }

  box-shadow: 0px 1px 2px ${colors.ref.palette.neutral.n10},
    0px 1px 3px 1px ${colors.ref.palette.neutral.n20};
  & > div > div:last-child {
    padding: 0px 10px;
    border-left: 1px solid ${colors.ref.palette.neutral.n20};
  }
`;

export { StyledHeader };
