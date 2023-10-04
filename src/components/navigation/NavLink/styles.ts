import { INavLinkProps } from ".";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";
import { inube } from "@src/shared/tokens";

const getGrid = (props: INavLinkProps) => {
  const { icon } = props;
  if (icon) {
    return "auto 1fr auto";
  }

  return "1fr auto";
};

const getColorLabel = (props: INavLinkProps) => {
  const { disabled } = props;
  if (disabled) {
    return colors.sys.text.disabled;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (props: INavLinkProps) => {
  const { disabled, isSelected } = props;
  if (isSelected && !disabled) {
    return `5px solid ${colors.ref.palette.neutral.n900}`;
  }

  return `0px`;
};

const getColorIcon = (props: INavLinkProps) => {
  const { disabled, isSelected } = props;
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }

  if (isSelected && !disabled) {
    return colors.sys.actions.primary.filled;
  }

  return colors.ref.palette.neutral.n900;
};

const iconStyles = css`
  width: 24px;
  height: 24px;
`;

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
  background-color: ${({ isSelected, disabled }: INavLinkProps) => {
    if (disabled) {
      return "transparent";
    }
    if (isSelected && !disabled) {
      return inube?.color?.surface?.navLink?.selected;
    }
  }};

  & > svg:last-child {
    ${iconStyles};
    color: ${colors.ref.palette.neutral.n900};
    display: ${({ disabled, isSelected }: INavLinkProps) =>
      (disabled || !isSelected) && "none"};
  }

  & > svg:first-child {
    ${iconStyles};
    color: ${(props: INavLinkProps) => getColorIcon(props)};
  }

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

  font-size: ${typography.sys.typescale.bodyMedium.size};
  font-family: ${typography.sys.typescale.bodyMedium.font};
  font-size: ${typography.sys.typescale.bodyMedium.size};
  line-height: ${typography.sys.typescale.bodyMedium.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyMedium.tracking};
  font-weight: ${typography.sys.typescale.bodyMedium.weight};
  color: ${(props: INavLinkProps) => getColorLabel(props)};

  cursor: not-allowed;
`;

export { StyledNavLink, StyledLink, StyledNavList };
