import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { IBreadcrumbEllipsisProps } from ".";
import { inube } from "@shared/tokens";

interface IStyledBreadcrumbEllipsisProps extends IBreadcrumbEllipsisProps {
  theme?: Themed;
}

const StyledContainerEllipsis = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbEllipsis = styled.span`
  user-select: none;
  text-decoration: none;
  color: ${({ theme }: IStyledBreadcrumbEllipsisProps) =>
    theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${({ theme }: IStyledBreadcrumbEllipsisProps) =>
      theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
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
