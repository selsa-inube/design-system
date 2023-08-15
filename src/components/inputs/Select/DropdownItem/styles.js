import styled from "styled-components";

import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";

const getColor = (isDisabled, isSelected) => {
  if (isDisabled) {
    return colors.ref.palette.neutral.n70;
  }
  if (isSelected && !isDisabled) {
    return colors.sys.text.primary;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (isDisabled, isSelected) => {
  if (isSelected && !isDisabled) {
    return `5px solid ${colors.sys.actions.primary.filled}`;
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

const StyledDropdownItem = styled.li`
  display: flex;
  width: auto;
  height: 40px;
  padding: 4px 16px;
  user-select: none;
  list-style-type: none;
  align-items: center;
  text-decoration: none;
  font-family: ${typography.sys.typescale.bodyMedium.font};
  font-size: ${typography.sys.typescale.bodyMedium.size};
  font-weight: ${typography.sys.typescale.bodyMedium.weight};
  line-height: ${typography.sys.typescale.bodyMedium.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyMedium.tracking};
  color: ${({ isDisabled, isSelected }) => getColor(isDisabled, isSelected)};
  cursor: ${({ isDisabled }) => (!isDisabled ? "pointer" : "not-allowed")};
  border-left: ${({ isDisabled, isSelected }) =>
    getBorderLeft(isDisabled, isSelected)};
  background-color: ${({ isDisabled, isSelected }) =>
    getBackgroundColor(isDisabled, isSelected)};
  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledDropdownItem };
