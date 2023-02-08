import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBlanket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: ${colors.ref.palette.neutralAlpha.n100A};
  border: none;
  pointer-events: none;
`;

export { StyledBlanket };
