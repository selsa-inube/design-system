import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

const getColorByState = (isDisabled, isFocused, isInvalid) => {
  let color = colors.sys.text.dark;

  if (isDisabled) {
    color = colors.sys.text.disabled;
    return color;
  }

  if (isInvalid) {
    color = colors.sys.text.error;
    return color;
  }

  if (isFocused) {
    color = colors.sys.text.primary;
    return color;
  }

  return color;
};

const StyledLabel = styled.label`
  font-family: ${typography.sys.typescale.labelLarge.font};
  font-size: ${({ typo }) => typography.sys.typescale[typo].size};
  font-weight: ${({ typo }) => typography.sys.typescale[typo].weight};
  letter-spacing: ${({ typo }) => typography.sys.typescale[typo].tracking};
  line-height: ${({ typo }) => typography.sys.typescale[typo].lineHeight};
  color: ${({ isDisabled, isFocused, isInvalid }) =>
    getColorByState(isDisabled, isFocused, isInvalid)};
`;

export { StyledLabel };
