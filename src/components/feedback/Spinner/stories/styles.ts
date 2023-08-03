import styled from "styled-components";
import { colors } from "@shared/colors/colors";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 8rem;
  justify-content: space-between;
`;

const StyledFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 148px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 25px;
  box-sizing: border-box;
  &:last-child {
    background-color: ${colors.ref.palette.neutral.n400};
  }
`;

export { StyledFlex, StyledFlexColumn, StyledFlexBetween, StyledGrid };
