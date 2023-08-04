import styled from "styled-components";
import { colors } from "@shared/colors/colors";

const StyledBreadcrumbMenu = styled.div`
  position: absolute;
  width: fit-content;
  max-width: 160px;
  min-width: 100px;
  box-shadow: 0px 2px 4px ${colors.ref.palette.neutralAlpha.n50A};
  background-color: ${colors.ref.palette.neutral.n0};
  border-radius: 4px;
  a {
    &:hover {
      cursor: pointer;
      background-color: ${colors.ref.palette.neutral.n30};
    }
  }
`;

export { StyledBreadcrumbMenu };
