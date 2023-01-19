import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.2rem;
  border: 1px solid #000000;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 0 10px 0;
`;

const StyledColor = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #ffffff;
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

export { StyledCard, StyledDivFlexInferior, StyledDivInfoCard, StyledColor };
