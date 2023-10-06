import styled from "styled-components";
import { inube } from "@shared/tokens";

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${inube.color.surface.gray.regular};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 100%;
  color: ${inube.color.text.light.regular};
`;

export { StyledSquare };
