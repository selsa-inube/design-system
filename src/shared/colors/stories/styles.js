import styled from "styled-components";
import { TinyColor } from "@ctrl/tinycolor";

const StyledGlobalGridTokens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 1130px) {
    margin-left: 8rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 2fr;
  }
`;

const StyledGlobalGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  @media (min-width: 2560px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 38px;
  }
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

const StyledColor = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
     color: ${
       new TinyColor((props) => props.color).isDark() ? "#FFFFFF" : "#000000"
     }
   }}
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

const StyledTable = styled.table`
  width: 100%;
  background-color: #ffffff;
  overflow-x: auto;
  border-collapse: collapse;
  border-width: 1px;
  border-color: #b3bac5;
  border-style: solid;
  color: #000000;
  border-radius: 10px;
`;
const StyledHeader = styled.header`
  background-color: #deebff;
  margin: -1rem -1rem 1rem -1rem;
  display: flex;
  flex-direction: column;
  h1,
  p {
    padding: 2px 2px 2px 20px;
  }
  @media (max-width: 768px) {
    margin: -1rem -3.2rem 1rem -1rem;
  }
  @media (max-width: 425px) {
    margin: -1rem -25rem 1rem -1rem;
  }
  @media (max-width: 375px) {
    margin: -1rem -28rem 1rem -1rem;
  }
  @media (max-width: 320px) {
    margin: -1rem -31.5rem 1rem -1rem;
  }
`;
const StyledTableHead = styled.thead`
  background-color: #deebff;
  border-radius: 1em;
`;
const StyledTableTh = styled.th`
  border-width: 1px;
  border-color: #b3bac5;
  border-style: solid;
  padding: 5px;
  color: #42526e;
`;
const StyledTableTd = styled.td`
  border-width: 1px;
  border-color: #b3bac5;
  border-style: solid;
  padding: 5px;
`;

const StyledTableSubTd = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-color: #b3bac5;
  border-bottom: 0.5px solid #b3bac5;
  padding: 5px;
  height: 8rem;
  align-items: center;
  justify-content: center;
  &: last-child {
    border-bottom: none;
  }
  @media (min-width: 2560px) {
    width: 405px;
    height: 52px;
  }
`;

export {
  StyledGrid,
  StyledCard,
  StyledDivFlexInferior,
  StyledDivInfoCard,
  StyledGlobalGrid,
  StyledColor,
  StyledGlobalGridTokens,
  StyledTable,
  StyledTableHead,
  StyledTableTh,
  StyledTableTd,
  StyledTableSubTd,
  StyledHeader,
};
