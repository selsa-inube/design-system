import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const getGrid = (icon) => {
  if (icon) {
    return "auto 1fr auto";
  }

  return "1fr auto";
};

const getColorLabel = (isDisabled) => {
  if (isDisabled) {
    return colors.sys.text.disabled;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (isDisabled, isSelected) => {
  if (isSelected && !isDisabled) {
    return `5px solid ${colors.ref.palette.neutral.n900}`;
  }

  return `0px`;
};

const getBackgroundColor = (isDisabled, isSelected) => {
  let color = "transparent";
  if (isDisabled) {
    return color;
  }
  if (isSelected && !isDisabled) {
    color = colors.ref.palette.neutral.n30;
    return color;
  }

  return color;
};

const getColorIcon = (isDisabled, isSelected) => {
  if (isDisabled) {
    return colors.ref.palette.neutral.n70;
  }

  if (isSelected && !isDisabled) {
    return colors.sys.actions.primary.filled;
  }

  return colors.ref.palette.neutral.n900;
};

const stilesIcons = css`
  width: 24px;
  height: 24px;
`;

const StyledMenuLink = styled.li`
  display: grid;
  grid-template-columns: ${({ icon, isSelected }) => getGrid(icon, isSelected)};
  width: 100%;
  height: 100%;
  min-height: 40px;
  min-width: 180px;
  align-items: center;
  box-sizing: border-box;
  list-style-type: none;
  border-left: ${({ isDisabled, isSelected }) =>
    getBorderLeft(isDisabled, isSelected)};
  background-color: ${({ isDisabled, isSelected }) =>
    getBackgroundColor(isDisabled, isSelected)};
  background-size: cover;
  gap: 24px;
  padding: 0px 16px;
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n70};
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};

  & > svg:last-child {
    ${stilesIcons};
    color: ${colors.ref.palette.neutral.n900};
    display: ${({ isDisabled, isSelected }) =>
      (isDisabled || !isSelected) && "none"};
  }

  & > svg:first-child {
    ${stilesIcons};
    color: ${({ isDisabled, isSelected }) =>
      getColorIcon(isDisabled, isSelected)};
  }

  ${({ isDisabled }) =>
    !isDisabled &&
    `
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
  font-family: ${typography.ref.typeface};
  text-decoration: none;
  font-family: ${typography.ref.typeface.brand};
  color: ${({ isdisabled }) => getColorLabel(isdisabled)};
  width: 100%;
`;

export { StyledMenuLink, StyledLink };
