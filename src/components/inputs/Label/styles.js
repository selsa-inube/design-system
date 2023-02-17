import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

const stateColor = {
  isDisabled: `${colors.ref.palette.neutral.n60}`,
  invalid: `${colors.ref.palette.red.r500}`,
};

const sysTokensColor = {
  isFocused: `${colors.sys.text.primary}`,
  default: `${colors.sys.text.dark}`,
};

const getColorByState = (isDisabled, isFocused, state) => {
  const color =
    state === "default" ? sysTokensColor.default : stateColor.invalid;

  if (isFocused) {
    return sysTokensColor.isFocused;
  }
  if (isDisabled) {
    return stateColor.isDisabled;
  }
  return color;
};

const StyledLabel = styled.label`
  font-family: ${typography.sys.typescale.labelLarge.font};
  color: ${({ isDisabled, isFocused, state }) =>
    getColorByState(isDisabled, isFocused, state)};
  letter-spacing: ${typography.sys.typescale.labelLarge.tracking};
`;

export { StyledLabel };
