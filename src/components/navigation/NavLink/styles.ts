import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@shared/tokens";
import { colors } from "@shared/colors/colors";
import { INavLinkProps } from ".";

const getGrid = (props: INavLinkProps) => {
  const { icon } = props;
  if (icon) {
    return "auto 1fr auto";
  }

  return "1fr auto";
};

const getBorderLeft = (props: INavLinkProps) => {
  const { disabled, selected } = props;
  if (selected && !disabled) {
    return `5px solid ${colors.ref.palette.neutral.n900}`;
  }

  return `0px`;
};

const StyledNavList = styled.li`
  list-style-type: none;
`;

const StyledNavLink = styled.div`
  display: grid;
  grid-template-columns: ${(props: INavLinkProps) => getGrid(props)};
  width: 100%;
  height: 40px;
  min-width: 180px;
  align-items: center;
  box-sizing: border-box;
  background-size: cover;
  gap: ${inube?.spacing?.s300};
  padding: ${inube?.spacing?.s0} ${inube?.spacing?.s200};
  border-left: ${(props: INavLinkProps) => getBorderLeft(props)};
  background-color: ${({ selected, disabled }: INavLinkProps) => {
    if (disabled) {
      return "transparent";
    }
    if (selected && !disabled) {
      return inube?.color?.surface?.navLink?.selected;
    }
  }};

  ${({ disabled }: INavLinkProps) =>
    !disabled &&
    `
    cursor: pointer;
      &:hover {
        background-color: ${colors.ref.palette.neutral.n30};
        
      }

      &:hover  > svg:first-child {
        color: ${colors.sys.actions.primary.filled};
         
      }
  `};
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  cursor: not-allowed;
`;

export { StyledNavLink, StyledLink, StyledNavList };
