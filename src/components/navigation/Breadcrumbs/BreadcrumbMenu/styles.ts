import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { inube } from "@shared/tokens";
import { IBreadcrumbsRoutes } from "../props";

interface IStyledBreadcrumbMenuProps extends IBreadcrumbsRoutes {
  theme?: Themed;
}

const StyledBreadcrumbMenu = styled.div`
  position: absolute;
  width: fit-content;
  max-width: 160px;
  min-width: 100px;
  box-shadow: 0px 2px 4px
    ${({ theme }: IStyledBreadcrumbMenuProps) =>
      theme?.color?.stroke?.light?.disabled ||
      inube.color.stroke.light.disabled};
  background-color: ${({ theme }: IStyledBreadcrumbMenuProps) =>
    theme?.color?.stroke?.light?.hover || inube.color.stroke.light.hover};
  border-radius: 4px;
  a {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }: IStyledBreadcrumbMenuProps) =>
        theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
    }
  }
`;

export { StyledBreadcrumbMenu };
