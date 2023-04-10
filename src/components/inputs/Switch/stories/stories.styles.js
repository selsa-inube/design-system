import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
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

export { StyledFlex, StyledGrid, StyledBoxSize };
