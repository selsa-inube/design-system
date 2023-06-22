import styled from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

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

const StyledDropDownItem = styled.li`
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
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n70};
  cursor: ${({ isDisabled }) => (!isDisabled ? "pointer" : "not-allowed")};
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};
  border-left: ${({ isDisabled, isSelected }) =>
    getBorderLeft(isDisabled, isSelected)};
  background-color: ${({ isDisabled, isSelected }) =>
    getBackgroundColor(isDisabled, isSelected)};

  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledDropDownItem };
