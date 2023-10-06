import styled from "styled-components";
import { Link } from "react-router-dom";

import { Themed } from "@shared/types/types";
import { inube } from "@shared/tokens";
import { INavLinkProps } from ".";

interface IStyledNavLinkProps extends INavLinkProps {
  theme?: Themed;
}

const StyledNavList = styled.li`
  list-style-type: none;
`;

const StyledNavLink = styled.div`
  display: grid;
  grid-template-columns: ${({ icon }: IStyledNavLinkProps) => {
    if (icon) {
      return "auto 1fr auto";
    }

    return "1fr auto";
  }};
  width: 100%;
  height: 40px;
  min-width: 180px;
  align-items: center;
  box-sizing: border-box;
  gap: ${({ theme }: IStyledNavLinkProps) =>
    theme?.spacing?.s300 || inube.spacing.s300};
  padding: ${({ theme }: IStyledNavLinkProps) =>
    `${theme?.spacing?.s0 || inube.spacing.s0} ${
      theme?.spacing?.s200 || inube.spacing.s200
    }`};
  border-left: ${({ disabled, selected, theme }: IStyledNavLinkProps) => {
    if (selected && !disabled) {
      return `5px solid ${
        theme?.color?.stroke?.dark?.regular || inube.color.stroke.dark.regular
      }`;
    }

    return `0px`;
  }};
  background-color: ${({ selected, disabled, theme }: IStyledNavLinkProps) => {
    if (disabled) {
      return (
        theme?.color?.surface?.navLink?.regular ||
        inube.color.surface.navLink.regular
      );
    }
    if (selected && !disabled) {
      return (
        theme?.color?.surface?.navLink?.selected ||
        inube.color.surface.navLink.selected
      );
    }
    return (
      theme?.color?.surface?.navLink?.regular ||
      inube.color.surface.navLink.regular
    );
  }};

  ${({ disabled, theme }: IStyledNavLinkProps) =>
    !disabled &&
    `
    cursor: pointer;
      &:hover {
        background-color: ${
          theme?.color?.surface?.navLink?.hover ||
          inube.color.surface.navLink.hover
        };
        
      }
  `};
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  cursor: not-allowed;
`;

export { StyledNavLink, StyledLink, StyledNavList };
