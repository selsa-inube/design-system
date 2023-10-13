import { Themed } from "@shared/types/types";
import styled from "styled-components";
import { IBreadcrumbsProps } from ".";
import { inube } from "@shared/tokens";

interface IStyledBreadcrumbsProps extends IBreadcrumbsProps {
  theme?: Themed;
}

const StyledBreadcrumbs = styled.ul`
  padding: ${({ theme }: IStyledBreadcrumbsProps) =>
    `${theme?.spacing?.s0 || inube.spacing.s0} `};
  margin: ${({ theme }: IStyledBreadcrumbsProps) =>
    `${theme?.spacing?.s0 || inube.spacing.s0} `};
  & > li {
    display: inline-flex;
  }
  & > li:not(:last-child)::after,
  & > div:not(:last-child)::after {
    pointer-events: none;
    content: "/";
    margin: ${({ theme }: IStyledBreadcrumbsProps) =>
      `${theme?.spacing?.s0 || inube.spacing.s0} ${
        theme?.spacing?.s100 || inube.spacing.s100
      }`};
  }
  & li > p {
    display: inherit;
  }
`;

export { StyledBreadcrumbs };
