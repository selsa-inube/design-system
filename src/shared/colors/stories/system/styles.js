import styled from "styled-components";

import { colors } from "../../colors";

const StyledTitleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 170px;
  border-radius: 8px;
  border: 1px solid ${colors.ref.palette.neutral.n60};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom: none;
  background-color: ${colors.ref.palette.blue.b50};
  color: ${colors.ref.palette.neutral.n500};
`;

const StyledGridField = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: 8px 5px 8px 5px;
  margin: 2px;
  border-bottom: 1px solid ${colors.ref.palette.neutral.n60};
  &:last-child {
    border-bottom: none;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  column-gap: 10px;
  align-items: center;
  width: -webkit-fill-available;
  border: 1px solid ${colors.ref.palette.neutral.n60};
  margin: 0.5px 0 20px 0;
  border-radius: 4px;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledColor = styled.div`
  background-color: ${(props) =>
    colors.sys[props.role][props.systemToken][props.refToken]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.ref.palette.neutral.n0};
  width: 93px;
  border-radius: 4px;
  border: ${(props) =>
    props.systemToken === "light" ? "1px solid black" : "0px"};
`;

export {
  StyledTitleCard,
  StyledGridField,
  StyledColor,
  StyledContainer,
  StyledSpan,
};
