import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";

const stateColor = {
  default: "091E42",
  disabled: "#B3BAC5",
  focus: "#0065FF",
  invalid: "#BF2600",
};

const StyledLabel = styled.label`
  color: ${(props) => stateColor[props.state]};
  font-family: ${typography.ref.typeface.brand};
`;

export { StyledLabel };
