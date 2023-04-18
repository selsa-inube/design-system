import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledContainerEllipsis = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbEllipsis = styled.div`
  text-decoration: none;
  color: ${({ "data-is-active": isActive }) =>
    isActive ? colors.sys.text.dark : colors.sys.text.secondary};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.sys.actions.secondary.stroke};
  }
`;

export { StyledContainerEllipsis, StyledBreadcrumbEllipsis };
