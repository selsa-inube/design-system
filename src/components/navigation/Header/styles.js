import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px 1px ${colors.ref.palette.neutral.n40},
    0px 1px 2px 0px ${colors.ref.palette.neutral.n10};

  & > div > div {
    position: unset;
    display: flex;
    align-items: center;
  }

  & > div:first-child {
    padding-left: 10px;
  }
  & > div:last-child {
    padding: 10px;
    border-left: 1px solid ${colors.ref.palette.neutral.n20};
  }
`;

export { StyledHeader };
