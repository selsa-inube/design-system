import styled from "styled-components";

const StyledColor = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #ffffff;
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
  h1 {
    display: flex;
    justify-content: center;
  }
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
  StyledColor,
  StyledTable,
  StyledTableHead,
  StyledTableTh,
  StyledTableTd,
  StyledTableSubTd,
  StyledHeader,
};
