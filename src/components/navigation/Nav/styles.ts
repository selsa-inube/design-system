import styled from "styled-components";
import { inube } from "@shared/tokens";
import { INavLinkProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledNavLinkProps extends INavLinkProps {
  theme?: Themed;
}

const StyledNav = styled.div`
  box-sizing: border-box;
  width: 248px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin: ${inube.spacing.s100} ${inube.spacing.s200};
  height: 1px;
  padding: ${inube.spacing.s0} ${inube.spacing.s0};
  background-color: ${({ theme }: IStyledNavLinkProps) =>
    theme?.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;

export { StyledNav, StyledFooter, SeparatorLine };
