import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";
import { Link } from "react-router-dom";

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) =>
    isActive ? colors.sys.text.dark : colors.sys.text.secondary};
  &:hover {
    color: ${colors.sys.text.secondary};
    text-decoration: underline;
    text-decoration-color: ${colors.sys.actions.secondary.stroke};
  }
`;

export { StyledBreadcrumbLink };
