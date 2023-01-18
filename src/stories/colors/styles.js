import styled from "styled-components";

const StyledGlobalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 38px;
`;

const StyledGrid = styled.div`
  display: grid;
  max-width: 200px;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  align-items: center;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.2rem;
  border: 1px solid #000000;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 0 10px 0;
`;

const StyledDivFlexInferior = styled.div`
  background-color: #ffffff;
  color: black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0.8rem;
  padding: 5px;
`;

const StyledDivInfoCard = styled.div`
  background-color: #ffffff;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export {
  StyledGrid,
  StyledCard,
  StyledDivFlexInferior,
  StyledDivInfoCard,
  StyledGlobalGrid,
};
