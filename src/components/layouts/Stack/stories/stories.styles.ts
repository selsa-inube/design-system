import styled from "styled-components";
import { colors } from "../../../../shared/colors/colors";

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.ref.palette.neutral.n80};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 70px;
`;

export { StyledSquare };
