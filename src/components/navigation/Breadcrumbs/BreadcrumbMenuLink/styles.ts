import styled from "styled-components";
import { colors } from "@shared/colors/colors";
import { Link } from "react-router-dom";

const StyledContainerLink = styled.li`
  display: inline-block;
  > * {
    height: 32px;
    > label {
      color: ${colors.sys.text.secondary};
      cursor: pointer;
      padding: 8px 12px 8px 12px;
    }
  }
`;

const StyledBreadcrumbMenuLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.secondary};
`;

export { StyledContainerLink, StyledBreadcrumbMenuLink };
