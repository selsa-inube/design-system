import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITextProps } from ".";

const StyledText = styled.p`
  font-family: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type]?.[size]?.font ||
    inube.typography[type][size].font};
  line-height: ${({ type, size }: ITextProps) =>
    inube.typography[type][size].lineHeight};
  font-size: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type]?.[size].size ||
    inube.typography[type][size].size};
  letter-spacing: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type]?.[size]?.tracking ||
    inube.typography[type][size].tracking};
  font-weight: ${({ type, size, theme }: ITextProps) =>
    theme?.typography?.[type]?.[size]?.weight ||
    inube.typography[type][size].weight};
  margin: ${({ margin }: ITextProps) => margin};
  padding: ${({ padding }: ITextProps) => padding};
  text-align: ${({ textAlign }: ITextProps) => textAlign};
  color: ${({ appearance, disabled, theme }: ITextProps) => {
    if (!disabled) {
      return (
        theme?.color?.text?.[appearance]?.regular ||
        inube.color.text[appearance].regular
      );
    } else {
      return (
        theme?.color?.text?.[appearance]?.disabled ||
        inube.color.text[appearance].disabled
      );
    }
  }};

  ${({ ellipsis }: ITextProps) =>
    ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};

  ${({ cursorHover, appearance, disabled, theme }: ITextProps) =>
    cursorHover &&
    `
    cursor: pointer;
    &:hover {
      color: ${
        !disabled &&
        appearance &&
        (theme?.color?.text?.[appearance]?.hover ||
          inube.color.text[appearance].hover)
      };
    }
  `};

  ${({ parentHover, appearance, disabled, theme }: ITextProps) =>
    parentHover &&
    `cursor: pointer; color: ${
      !disabled &&
      appearance &&
      (theme?.color?.text?.[appearance]?.hover ||
        inube.color.text[appearance].hover)
    };`}
`;
export { StyledText };
