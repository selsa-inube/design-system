import styled from "styled-components";

import { colors } from "../../colors";

const StyledTitleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 170px;
  border-radius: 8px;
  border: 1px solid #b3bac5;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom: none;
  background-color: #deebff;
  color: #556580;
`;

const StyledFlexField = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  border-bottom: 1px solid #b3bac5;
  justify-content: space-around;
  &: last-child {
    border-bottom: none;
  }
`;
const StyledContainer = styled.div`
  width: -webkit-fill-available;
  border: 1px solid #b3bac5;
  margin: 0.5px 0 20px 0;
  border-radius: 4px;
`;

const StyledColor = styled.div`
  background-color: ${(props) => colors.sys[props.role][props.systemToken]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 93px;
  border-radius: 4px;
`;

export { StyledTitleCard, StyledFlexField, StyledColor, StyledContainer };
