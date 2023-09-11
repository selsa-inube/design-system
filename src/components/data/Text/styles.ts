import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITextProps } from ".";

const StyledText = styled.p`
  font-family: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type!]?.[size!]?.font ||
    inube.typography[type!][size!].font};
  line-height: ${({ type, size }: ITextProps) =>
    inube.typography[type!][size!].lineHeight};
  font-size: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type!]?.[size!].size ||
    inube.typography[type!][size!].size};
  letter-spacing: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type!]?.[size!]?.tracking ||
    inube.typography[type!][size!].tracking};
  font-weight: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type!]?.[size!]?.weight ||
    inube.typography[type!][size!].weight};
  margin: ${({ margin }: ITextProps) => margin};
  padding: ${({ padding }: ITextProps) => padding};
  text-align: ${({ textAlign }: ITextProps) => textAlign};
  color: ${({ appearance, disabled, parentHover, theme }: ITextProps) => {
    if (disabled) {
      return (
        theme?.color?.text?.[appearance!]?.disabled ||
        inube.color.text[appearance!].disabled
      );
    }
    if (parentHover) {
      return (
        theme?.color?.text?.[appearance!]?.hover ||
        inube.color.text[appearance!].hover
      );
    }
    return (
      theme?.color?.text?.[appearance!]?.regular ||
      inube.color.text[appearance!].regular
    );
  }};

  white-space: ${({ ellipsis }: ITextProps) => ellipsis && "nowrap"};
  overflow: ${({ ellipsis }: ITextProps) => ellipsis && "hidden"};
  text-overflow: ${({ ellipsis }: ITextProps) => ellipsis && "ellipsis"};
  cursor: ${({ cursorHover, parentHover }: ITextProps) =>
    (cursorHover || parentHover) && "pointer"};

  &:hover {
    color: ${({ appearance, disabled, cursorHover, theme }: ITextProps) =>
      !disabled &&
      cursorHover &&
      (theme?.color?.text?.[appearance!]?.hover ||
        inube.color.text[appearance!].hover)};
  }
`;

export { StyledText };
