import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

import { LabelProps } from "./interface.Label";

const getColor = (
  isDisabled: boolean,
  isFocused: boolean,
  isInvalid: boolean
): string => {
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

console.log();

const StyledLabel = styled.label`
  font-family: ${typography.sys.typescale.labelLarge.font};
  font-size: ${({ typo }: LabelProps) =>
    typo && typography.sys.typescale[typo].size};
  font-weight: ${({ typo }: LabelProps) =>
    typo && typography.sys.typescale[typo].weight};
  letter-spacing: ${({ typo }: LabelProps) =>
    typo && typography.sys.typescale[typo].tracking};
  line-height: ${({ typo }: LabelProps) =>
    typo && typography.sys.typescale[typo].lineHeight};
  color: ${({ isDisabled, isFocused, isInvalid }: LabelProps) =>
    isDisabled &&
    isFocused &&
    isInvalid &&
    getColor(isDisabled, isFocused, isInvalid)};
`;

export { StyledLabel };
