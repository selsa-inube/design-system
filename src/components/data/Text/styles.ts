import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITextProps } from ".";

const StyledText = styled.p`
  font-family: ${({ type, size }: ITextProps) =>
    (inube.typography as Record<string, any>)[type!][size!].font};
  line-height: ${({ type, size }: ITextProps) =>
    (inube.typography as Record<string, any>)[type!][size!].lineHeight};
  font-size: ${({ type, size }: ITextProps) =>
    (inube.typography as Record<string, any>)[type!][size!].size};
  letter-spacing: ${({ type, size }: ITextProps) =>
    (inube.typography as Record<string, any>)[type!][size!].tracking};
  font-weight: ${({ type, size }: ITextProps) =>
    (inube.typography as Record<string, any>)[type!][size!].weight};
  margin: ${({ margin }: ITextProps) => margin};
  padding: ${({ padding }: ITextProps) => padding};
  text-align: ${({ textAlign }: ITextProps) => textAlign};
  color: ${({ appearance, disabled }: ITextProps) =>
    !disabled
      ? (inube.color.text as Record<string, any>)[appearance!].regular
      : (inube.color.text as Record<string, any>)[appearance!].disabled};

  ${({ ellipsis }: ITextProps) =>
    ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};

  ${({ cursorHover, appearance, disabled }: ITextProps) =>
    cursorHover &&
    `
    cursor: pointer;
    &:hover {
      color: ${
        !disabled &&
        appearance &&
        (inube.color.text as Record<string, any>)[appearance].hover
      };
    }
  `};

  ${({ parentHover, appearance, disabled }: ITextProps) =>
    parentHover &&
    `cursor: pointer; color: ${
      !disabled &&
      appearance &&
      (inube.color.text as Record<string, any>)[appearance].hover
    };`}
`;
export { StyledText };
