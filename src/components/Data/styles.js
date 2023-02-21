import styled from "styled-components";
import { typography } from "../../shared/typography/typography";
import { colors } from "../../shared/colors/colors";

const StylesText = styled.p`
  font-family: ${typography.ref.typeface.brand};
  color: ${({ appearance }) => colors.sys.text[appearance]};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ align }) => align};
  font-size: ${({ typo }) => typography.sys.typescale[typo].size};
  letter-spacing: ${({ typo }) => typography.sys.typescale[typo].tracking};
  line-height: ${({ typo }) => typography.sys.typescale[typo].lineHeight};
  font-weight: ${({ typo }) => typography.sys.typescale[typo].weight};
`;

export { StylesText };
