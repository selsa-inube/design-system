import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBreadcrumbMenu = styled.div`
  position: fixed;
  max-width: 160px;
  box-shadow: 0px 2px 4px ${colors.ref.palette.neutralAlpha.n50A};
  border-radius: 4px;
`;

export { StyledBreadcrumbMenu };
