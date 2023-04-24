import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBlanket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  background-color: ${colors.ref.palette.neutralAlpha.n100A};
  border: none;
`;

export { StyledBlanket };
