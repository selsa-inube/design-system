import styled from "styled-components";

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
  align-items: center;
  max-width: 148px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  column-gap: 32px;
  box-sizing: border-box;
`;

const StyledBoxSize = styled.div`
  width: 6rem;
`;

const StyledMargin = styled.div`
  margin-right: 30px;
`;

export {
  StyledFlex,
  StyledFlexColumn,
  StyledFlexBetween,
  StyledGrid,
  StyledBoxSize,
  StyledMargin,
};
