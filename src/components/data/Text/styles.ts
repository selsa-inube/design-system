import styled from "styled-components";
import { typography } from "../../../shared/typography/typography";
import { colors } from "../../../shared/colors/colors";
import { ITextProps } from "./interfaces/TextProps.interface";

const StyledText = styled.p`
  display: ${({ as }: ITextProps) => (as === "span" ? "inline" : "block")};
  font-family: ${typography.ref.typeface.brand};
  color: ${({ appearance }: ITextProps) =>
    (colors.sys.text as Record<string, string>)[appearance!]};
  margin: ${({ margin }: ITextProps) => margin};
  padding: ${({ padding }: ITextProps) => padding};
  text-align: ${({ align }: ITextProps) => align};
  font-size: ${({ typo }: ITextProps) =>
    (typography.sys.typescale as Record<string, any>)[typo!].size};
  letter-spacing: ${({ typo }: ITextProps) =>
    (typography.sys.typescale as Record<string, any>)[typo!].tracking};
  line-height: ${({ typo }: ITextProps) =>
    (typography.sys.typescale as Record<string, any>)[typo!].lineHeight};
  font-weight: ${({ typo }: ITextProps) =>
    (typography.sys.typescale as Record<string, any>)[typo!].weight};
`;

export { StyledText };
