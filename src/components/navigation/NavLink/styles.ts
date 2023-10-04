import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const { disabled, isSelected } = props;
  if (isSelected && !disabled) {
    return `5px solid ${colors.ref.palette.neutral.n900}`;
  }

  return `0px`;
};

const getBackgroundColor = (props: INavLinkProps) => {
  const { disabled, isSelected } = props;
  let color = "transparent";
  if (disabled) {
    return color;
  }
  if (isSelected && !disabled) {
    color = colors.ref.palette.neutral.n30;
    return color;
  }

  return color;
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
  gap: 24px;
  padding: 0px 16px;
  border-left: ${(props: INavLinkProps) => getBorderLeft(props)};
  background-color: ${(props: INavLinkProps) => getBackgroundColor(props)};
  color: ${({ disabled }: INavLinkProps) =>
    disabled && colors.ref.palette.neutral.n70};

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
