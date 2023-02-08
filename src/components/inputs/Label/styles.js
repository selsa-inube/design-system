import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";

const stateColor = {
  default: `${colors.ref.palette.darkNeutral.dn500}`,
  disabled: `${colors.ref.palette.midNeutral.mn50}`,
  focus: `${colors.ref.palette.blue.b300}`,
  invalid: `${colors.ref.palette.red.r500}`,
};

const StyledLabel = styled.label`
  color: ${(props) => stateColor[props.state]};
  font-family: ${typography.ref.typeface.brand};
`;

export { StyledLabel };
