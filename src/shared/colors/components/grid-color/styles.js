import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  max-width: 200px;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  align-items: center;
`;

export { StyledGrid };
