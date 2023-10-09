import styled from "styled-components";
import { inube } from "@shared/tokens";
import { INavLinkProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledNavLinkProps extends INavLinkProps {
  theme?: Themed;
}

const StyledNav = styled.div`
  height: 100%;
  width: 248px;
  box-sizing: border-box;
  background-color: ${({ theme }: IStyledNavLinkProps) =>
    theme?.color?.surface?.nav?.regular || inube.color.surface.nav.regular};
  border-right: 1px solid
    ${({ theme }: IStyledNavLinkProps) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
`;

const StyledFooter = styled.footer`
  width: 100%;
`;

const SeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: ${({ theme }: IStyledNavLinkProps) =>
    `${theme?.spacing?.s100 || inube.spacing.s100} ${
      theme?.spacing?.s200 || inube.spacing.s200
    }`};
  height: 1px;
  padding: ${({ theme }: IStyledNavLinkProps) =>
    theme?.spacing?.s0 || inube.spacing.s0};
  background-color: ${({ theme }: IStyledNavLinkProps) =>
    theme?.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;

export { StyledNav, StyledFooter, SeparatorLine };
