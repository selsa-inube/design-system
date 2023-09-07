import styled from "styled-components";

import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";

const getColor = (disabled, isSelected) => {
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }
  if (isSelected && !disabled) {
    return colors.sys.text.primary;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (disabled, isSelected) => {
  if (isSelected && !disabled) {
    return `5px solid ${colors.sys.actions.primary.filled}`;
  }

  return `0px`;
};

const getBackgroundColor = (disabled, isSelected) => {
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
  color: ${({ disabled, isSelected }) => getColor(disabled, isSelected)};
  cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
  border-left: ${({ disabled, isSelected }) =>
    getBorderLeft(disabled, isSelected)};
  background-color: ${({ disabled, isSelected }) =>
    getBackgroundColor(disabled, isSelected)};
  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledDropdownItem };
