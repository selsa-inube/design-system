import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBreadcrumbMenu = styled.div`
  max-width: 160px;
  box-shadow: 0px 2px 4px ${colors.ref.palette.neutralAlpha.n50A};
  border-radius: 5px;
`;

const StyledBox = styled.div`
  > * {
    height: 32px;
    > * label {
      padding: 8px 12px 8px 12px;
    }
  }
`;

export { StyledBreadcrumbMenu, StyledBox };
