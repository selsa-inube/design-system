import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";
import { Link } from "react-router-dom";

const StyledContainerLink = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: ${({ "data-is-active": isActive }) =>
    isActive ? colors.sys.text.dark : colors.sys.text.secondary};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.sys.actions.secondary.stroke};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
