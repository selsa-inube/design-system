import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

/* const getGrid = (icon, isSelected) => {
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
}; */

const getGrid = (icon) => {
  if (icon) {
    return "auto 1fr auto";
  }

  return "1fr auto";
};

const getColorLabel = (isdisabled) => {
  if (isdisabled) {
    return colors.sys.text.disabled;
  }
  return colors.sys.text.dark;
};

const getBorderLeft = (isdisabled, isSelected) => {
  if (isSelected && !isdisabled) {
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
  border-left: ${({ isdisabled, isSelected }) =>
    getBorderLeft(isdisabled, isSelected)};
  background-color: ${({ isdisabled, isSelected }) =>
    (!isdisabled || isSelected) && colors.ref.palette.neutral.n30};
  background-size: cover;
  gap: 24px;
  padding: 0px 16px;
  color: ${({ isdisabled }) => isdisabled && colors.ref.palette.neutral.n70};
  pointer-events: ${({ isdisabled }) => isdisabled && "none"};

  & > svg:last-child path {
    color: ${colors.ref.palette.neutral.n900};
    display: ${({ isdisabled, isSelected }) =>
      (isdisabled || !isSelected) && "none"};
  }

  ${({ isdisabled }) =>
    !isdisabled &&
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

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

export { StyledMenuLink, StyledLink, StyledIcon };
