import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITextProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledTextProps extends ITextProps {
  theme?: Themed;
}

const StyledText = styled.p`
  font-family: ${({ type, size, theme }: IStyledTextProps) =>
    theme?.typography?.[type!]?.[size!]?.font ||
    inube.typography[type!][size!].font};
  line-height: ${({ type, size }: IStyledTextProps) =>
    inube.typography[type!][size!].lineHeight};
  font-size: ${({ type, size, theme }: IStyledTextProps) =>
    theme?.typography?.[type!]?.[size!]?.size ||
    inube.typography[type!][size!].size};
  letter-spacing: ${({ type, size, theme }: IStyledTextProps) =>
    theme?.typography?.[type!]?.[size!]?.tracking ||
    inube.typography[type!][size!].tracking};
  font-weight: ${({ type, size, theme }: IStyledTextProps) =>
    theme?.typography?.[type!]?.[size!]?.weight ||
    inube.typography[type!][size!].weight};
  margin: ${({ margin }: IStyledTextProps) => margin};
  padding: ${({ padding }: IStyledTextProps) => padding};
  text-align: ${({ textAlign }: IStyledTextProps) => textAlign};
  color: ${({ appearance, disabled, parentHover, theme }: IStyledTextProps) => {
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

  white-space: ${({ ellipsis }: IStyledTextProps) => ellipsis && "nowrap"};
  overflow: ${({ ellipsis }: IStyledTextProps) => ellipsis && "hidden"};
  text-overflow: ${({ ellipsis }: IStyledTextProps) => ellipsis && "ellipsis"};
  cursor: ${({ cursorHover, parentHover }: IStyledTextProps) =>
    (cursorHover || parentHover) && "pointer"};

  &:hover {
    color: ${({ appearance, disabled, cursorHover, theme }: IStyledTextProps) =>
      !disabled &&
      cursorHover &&
      (theme?.color?.text?.[appearance!]?.hover ||
        inube.color.text[appearance!].hover)};
  }
`;

export { StyledText };
