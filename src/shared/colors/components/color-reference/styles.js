import styled from "styled-components";

const StyledGlobalGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 768px) {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
  // grid-template-columns: repeat(auto-fill, minmax(2fr));
  @media (min-width: 2560px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 38px;
  }
`;

export { StyledGlobalGrid };
