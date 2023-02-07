import styled from "styled-components";

import { colors } from "../../colors";

const StyledGlobalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid ${colors.ref.palette.black.black};
  border-radius: 4px;
  width: 160px;
  overflow: hidden;
`;

const StyledColor = styled.div`
  background-color: ${(props) =>
    colors.ref.palette[props.colorGroupWrap][props.colorName]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.ref.palette.neutral.n0};
`;

const StyledDivGridBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;
`;

const StyledDivInfoCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 10px;
  align-items: center;
  row-gap: 10px;
`;

const StyledSpanColorName = styled.span`
  font-size: ${(props) => (props.colorName.at(-1) === "A" ? "11.5px" : "14px")};
`;
export {
  StyledGlobalFlex,
  StyledCard,
  StyledDivGridBottom,
  StyledDivInfoCard,
  StyledColor,
  StyledGrid,
  StyledSpanColorName,
};
