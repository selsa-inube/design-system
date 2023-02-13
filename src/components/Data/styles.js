import styled from "styled-components";
import { typography } from "../../shared/typography/typography";
import { colors } from "../../shared/colors/colors";

const StylesText = styled.p`
  font-family: ${typography.ref.typeface.brand};
  color: ${(props) => colors.sys.text[props.appearance]};
  text-align: ${(props) => props.align};
  font-size: ${(props) => typography.sys.typescale[props.typo].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.typo].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.typo].weight};
`;

export { StylesText };
