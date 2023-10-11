import styled from "styled-components";
import { colors } from "@shared/colors/colors";
import { Link } from "react-router-dom";

const StyledContainerLink = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.dark};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.sys.actions.secondary.stroke};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
