import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

const getColorByState = (isDisabled, isFocused, state) => {
  let color = colors.sys.text.dark;

  if (isFocused) {
    color = colors.sys.text.primary;
    return color;
  }
  if (isDisabled) {
    color = colors.sys.text.disabled;
    return color;
  }

  if (state === "invalid") {
    color = colors.sys.text.error;
    return color;
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
