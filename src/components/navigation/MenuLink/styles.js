import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const getGrid = (icon, isSelected) => {
  if (icon && isSelected) {
    return "auto 1fr auto";
  }

  if (icon && !isSelected) {
    return "auto 1fr";
  }

  if (!icon && isSelected) {
    return "1fr auto";
  }

  return "1fr";
};

const getColor = (isDisabled) => {
  if (isDisabled) {
    return colors.sys.text.disabled;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (isSelected) => {
  if (isSelected === true) {
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
  align-items: center;
  box-sizing: border-box;
  list-style-type: none;
  border-left: ${({ isSelected }) => getBorderLeft(isSelected)};
  background-color: ${colors.ref.palette.neutral.n30};
  gap: 24px;
  padding: 0px 16px;

  > svg {
    width: 24px;
    height: 24px;
    color: ${({ isDisabled }) => getColor(isDisabled)};
  }
`;

const StyledLink = styled(Link)`
  font-family: ${typography.ref.typeface};
  text-decoration: none;
  font-family: ${typography.ref.typeface.brand};
  color: ${({ isDisabled }) => getColor(isDisabled)};
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledMenuLink, StyledLink, StyledIcon };
