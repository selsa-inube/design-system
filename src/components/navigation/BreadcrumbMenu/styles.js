import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBreadcrumbMenu = styled.div`
  max-width: 160px;
  box-shadow: 0px 2px 4px ${colors.ref.palette.neutralAlpha.n50A};
  border-radius: 5px;
`;

const StyledBox = styled.div`
  height: 32px;
  transition: background-color 0.3s ease-in-out;

  > * label {
    padding: 8px 12px;
  }

  &:hover {
    border-radius: 5px;
    background-color: ${colors.ref.palette.neutralAlpha.n20A};
  }
`;

export { StyledBreadcrumbMenu, StyledBox };
