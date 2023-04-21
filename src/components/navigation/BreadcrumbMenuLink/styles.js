import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";
import { Link } from "react-router-dom";

const StyledContainerLink = styled.li`
  display: inline-block;
  > * {
    height: 32px;
    > label {
      cursor: pointer;
      padding: 8px 12px 8px 12px;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

const StyledBreadcrumbMenuLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.secondary};
`;

export { StyledContainerLink, StyledBreadcrumbMenuLink };
