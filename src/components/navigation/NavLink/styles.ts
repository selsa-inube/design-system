import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@shared/tokens";
import { INavLinkProps } from ".";

const StyledNavList = styled.li`
  list-style-type: none;
`;

const StyledNavLink = styled.div`
  display: grid;
  grid-template-columns: ${({ icon }: INavLinkProps) => {
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
  background-size: cover;
  gap: ${inube?.spacing?.s300};
  padding: ${inube?.spacing?.s0} ${inube?.spacing?.s200};
  border-left: ${({ disabled, selected }: INavLinkProps) => {
    if (selected && !disabled) {
      return `5px solid ${inube?.color?.stroke?.dark.regular}`;
    }

    return `0px`;
  }};
  background-color: ${({ selected, disabled }: INavLinkProps) => {
    if (disabled) {
      return inube?.color?.surface?.navLink?.regular;
    }
    if (selected && !disabled) {
      return inube?.color?.surface?.navLink?.selected;
    }
    return inube?.color?.surface?.navLink?.regular;
  }};

  ${({ disabled }: INavLinkProps) =>
    !disabled &&
    `
    cursor: pointer;
      &:hover {
        background-color: ${inube?.color?.surface?.navLink?.hover};
        
      }
  `};
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  cursor: not-allowed;
`;

export { StyledNavLink, StyledLink, StyledNavList };
