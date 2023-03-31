import styled from "styled-components";
import { colors } from "../../../../shared/colors/colors";

const StyledDiv = styled.div`
  background-color: ${colors.ref.palette.neutral.n80};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 70px;
`;

const StyledContainer = styled.div`
  // padding: 32px 64px;
  div > div:last-of-type > div:nth-of-type(2) {
    gap: 8px;
  }
  div > div:last-of-type > div:nth-of-type(2) > div {
    max-width: 280px;
  }
  div:last-of-type > div:nth-of-type(2) > svg {
    display: none;
  }
  @media screen and (max-width: 580px) {
    padding: 16px;
    button {
      display: none;
    }
    div:last-of-type > div:last-of-type > svg {
      display: flex;
    }
  }
`;
export { StyledDiv, StyledContainer };
