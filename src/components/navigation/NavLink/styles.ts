import styled from "styled-components";
import { Link } from "react-router-dom";

import { Themed } from "@shared/types/types";
import { inube } from "@shared/tokens";
import { INavLinkProps } from ".";

interface IStyledNavLinkProps extends INavLinkProps {
  theme?: Themed;
}

const StyledNavList = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  width: 100%;
  min-width: 180px;
  min-height: 40px;
  box-sizing: border-box;
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
  width: 100%;
  cursor: ${({ disabled }: IStyledNavLinkProps) => disabled && "not-allowed"};
`;

export { StyledLink, StyledNavList };
