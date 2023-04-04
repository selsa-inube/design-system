import styled from "styled-components";
import { colors } from "../../../../shared/colors/colors";

const StyledDiv = styled.div`
  background-color: ${colors.ref.palette.neutral.n80};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 70px;
`;

const StyledContainer = styled.div`
  border: 1px solid ${colors.ref.palette.neutral.n80};
  width: 100%;
  height: 100%;
  margin: 5px;
`;

export { StyledDiv, StyledContainer };
