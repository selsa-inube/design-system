import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

const stateColor = {
  isDisabled: `${colors.ref.palette.neutral.n60}`,
  invalid: `${colors.ref.palette.red.r500}`,
};

const sysTokensColor = {
  isFocused: `${colors.sys.text.link}`,
  default: `${colors.sys.text.primary}`,
};

const StyledLabel = styled.label`
  font-family: ${typography.sys.typescale.labelLarge.font};
  color: ${(props) =>
    props.isFocused
      ? sysTokensColor.isFocused
      : props.isDisabled
      ? stateColor.isDisabled
      : stateColor[props.state] || sysTokensColor.default};
  letter-spacing: ${typography.sys.typescale.labelLarge.tracking};
`;

export { StyledLabel };
