import styled from "styled-components";

import { Inube } from "@src/shared/tokens";
import { ITextProps } from "./interfaces/Text.interface";

const StyledText = styled.p`
  font-family: ${({ type, size }: ITextProps) =>
    (Inube.typography as Record<string, any>)[type!][size!].font};
  line-height: ${({ type, size }: ITextProps) =>
    (Inube.typography as Record<string, any>)[type!][size!].lineHeight};
  font-size: ${({ type, size }: ITextProps) =>
    (Inube.typography as Record<string, any>)[type!][size!].size};
  letter-spacing: ${({ type, size }: ITextProps) =>
    (Inube.typography as Record<string, any>)[type!][size!].tracking};
  font-weight: ${({ type, size }: ITextProps) =>
    (Inube.typography as Record<string, any>)[type!][size!].weight};
  margin: ${({ margin }: ITextProps) => margin};
  padding: ${({ padding }: ITextProps) => padding};
  text-align: ${({ textAlign }: ITextProps) => textAlign};
  color: ${({ appearance, isDisabled }: ITextProps) =>
    !isDisabled
      ? (Inube.Color.Text as Record<string, any>)[appearance!].regular
      : (Inube.Color.Text as Record<string, any>)[appearance!].disabled};

  ${({ ellipsis }: ITextProps) =>
    ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};

  ${({ cursorHover, appearance, isDisabled }: ITextProps) =>
    cursorHover &&
    `
    cursor: pointer;
    &:hover {
      color: ${
        !isDisabled &&
        appearance &&
        (Inube.Color.Text as Record<string, any>)[appearance].hover
      };
    }
  `};
`;
export { StyledText };
