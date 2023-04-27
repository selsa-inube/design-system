import styled from "styled-components";
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

const StyledMenuLink = styled.li`
  display: grid;
  grid-template-columns: ${({ $icon, isSelected }) =>
    getGrid($icon, isSelected)};
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
    (!isDisabled || isSelected) && colors.ref.palette.neutral.n30};
  background-size: cover;
  gap: 24px;
  padding: 0px 16px;
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n70};
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};

  & > div:first-child svg {
    width: 24px;
    height: 24px;
  }

  & > svg:last-child {
    width: 24px;
    height: 24px;
    color: ${colors.ref.palette.neutral.n900};
    display: ${({ isDisabled, isSelected }) =>
      (isDisabled || !isSelected) && "none"};
  }

  ${({ isDisabled }) =>
    !isDisabled &&
    `
      &:hover {
        color: ${colors.sys.actions.primary.filled};
        background-color: ${colors.ref.palette.neutral.n30};   
      }
  `}
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
