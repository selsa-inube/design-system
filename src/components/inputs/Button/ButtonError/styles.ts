import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { IButtonProps } from "../interfaces/Button.interface";

import { typography } from "@src/shared/typography/typography";
import { colors } from "@src/shared/colors/colors";

function getBackgroundColor(props: IButtonProps) {
  const { isDisabled, variant } = props;

  if (isDisabled) {
    return colors.sys.actions.disabled.filled;
  }

  if (variant !== "filled" && !isDisabled) {
    return colors.ref.palette.neutral.n10;
  }
  return colors.sys.actions.remove.filled;
}

function getColor(props: IButtonProps) {
  const { isDisabled, variant } = props;

  if (isDisabled) {
    return colors.sys.text.disabled;
  }

  if (variant !== "filled" && !isDisabled) {
    return colors.sys.text.error;
  }
  return colors.ref.palette.neutral.n10;
}

function getWidth(props: IButtonProps) {
  const { isFullWidth } = props;
  if (isFullWidth) {
    return "100%";
  }

  return "fit-content";
}

const getSpacing = (props: IButtonProps) => {
  const { spacing } = props;
  if (spacing === "compact") {
    return "28px; min-width: 93px;";
  }
  return "36px; min-width: 101px;";
};

const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  text-decoration: none;
  font-family: ${typography.ref.typeface.brand};
  font-size: ${typography.sys.typescale.labelLarge.size};
  font-weight: ${typography.sys.typescale.labelLarge.weight};
  line-height: ${typography.sys.typescale.labelLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.labelLarge.tracking};
`;

const StyledErrorButton = styled.button`
  padding: 0px 16px;
  background-color: ${(props: IButtonProps) => getBackgroundColor(props)};
  ${(props: IButtonProps) => console.log(props)}
  color: ${(props: IButtonProps) => getColor(props)};
  ${containerStyles}
  width: ${(props: IButtonProps) => getWidth(props)};
  height: ${(props: IButtonProps) => getSpacing(props)};
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: ${(props: IButtonProps) => getWidth(props)};
  height: ${(props: IButtonProps) => getSpacing(props)};
  ${containerStyles};
`;

export { StyledErrorButton, StyledIcon, StyledSpan, StyledLink };
