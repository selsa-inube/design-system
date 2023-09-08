import styled from "styled-components";

import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";

const getColor = (disabled, selected) => {
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }
  if (selected && !disabled) {
    return colors.sys.text.primary;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (disabled, selected) => {
  if (selected && !disabled) {
    return `5px solid ${colors.sys.actions.primary.filled}`;
  }

  return `0px`;
};

const getBackgroundColor = (disabled, selected) => {
  let color = "transparent";
  if (disabled) {
    return color;
  }
  if (selected && !disabled) {
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
  color: ${({ disabled, selected }) => getColor(disabled, selected)};
  cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
  border-left: ${({ disabled, selected }) => getBorderLeft(disabled, selected)};
  background-color: ${({ disabled, selected }) =>
    getBackgroundColor(disabled, selected)};
  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledDropdownItem };
