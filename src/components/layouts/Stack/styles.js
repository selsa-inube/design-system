import styled from "styled-components";

import { colors } from "../../../shared/colors/colors";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;

export { StyledFlex };
