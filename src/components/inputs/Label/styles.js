import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

const stateColor = {
  default: `${colors.sys.text.primary}`,
  disabled: `${colors.ref.palette.neutral.n60}`,
  focus: `${colors.ref.palette.blue.b300}`,
  invalid: `${colors.ref.palette.red.r500}`,
};

const StyledLabel = styled.label`
  color: ${(props) => stateColor[props.state]};
  font-family: ${typography.sys.typescale.labelLarge.font};
  letter-spacing: ${typography.sys.typescale.labelLarge.tracking};
`;

export { StyledLabel };
