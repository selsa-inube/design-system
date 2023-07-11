import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBlanket = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.ref.palette.neutralAlpha.n100A};
  border: none;
  z-index: 1;
  overflow-y: auto;
`;

export { StyledBlanket };
