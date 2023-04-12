import styled from "styled-components";

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

export { StyledGrid, StyledBoxSize };
