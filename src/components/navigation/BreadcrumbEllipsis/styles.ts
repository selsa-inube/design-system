import styled from "styled-components";
import { colors } from "@shared/colors/colors";

const StyledContainerEllipsis = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbEllipsis = styled.span`
  user-select: none;
  text-decoration: none;
  color: ${colors.sys.text.secondary};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${colors.sys.actions.secondary.stroke};
  }
`;

const StyledRelativeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
};
