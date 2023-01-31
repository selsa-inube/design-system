import styled from "styled-components";

import { colors } from "../../colors";

const StyledTitleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 170px;
  border-radius: 8px;
  border: 1px solid ${colors.ref.palette.midNeutral.mn50};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom: none;
  background-color: ${colors.ref.palette.blue.b50};
  color: ${colors.ref.palette.midNeutral.mn300};
`;

const StyledFlexField = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  border-bottom: 1px solid ${colors.ref.palette.midNeutral.mn50};
  justify-content: space-around;
  &:last-child {
    border-bottom: none;
  }
`;
const StyledContainer = styled.div`
  width: -webkit-fill-available;
  border: 1px solid ${colors.ref.palette.midNeutral.mn50};
  margin: 0.5px 0 20px 0;
  border-radius: 4px;
`;

const StyledColor = styled.div`
  background-color: ${(props) => colors.sys[props.role][props.systemToken]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.ref.palette.lightNeutral.ln50};
  width: 93px;
  border-radius: 4px;
`;

export { StyledTitleCard, StyledFlexField, StyledColor, StyledContainer };
