import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ITextProps } from ".";

const StyledText = styled.p`
  font-family: ${({ type, size }: ITextProps) =>
    inube.typography[type][size].font};
  line-height: ${({ type, size }: ITextProps) =>
    inube.typography[type][size].lineHeight};
  font-size: ${({ type, size }: ITextProps) =>
    inube.typography[type][size].size};
  letter-spacing: ${({ type, size }: ITextProps) =>
    inube.typography[type][size].tracking};
  font-weight: ${({ type, size }: ITextProps) =>
    inube.typography[type][size].weight};
  margin: ${({ margin }: ITextProps) => margin};
  padding: ${({ padding }: ITextProps) => padding};
  text-align: ${({ textAlign }: ITextProps) => textAlign};
  color: ${({ appearance, disabled }: ITextProps) =>
    !disabled
      ? inube.color.text[appearance].regular
      : inube.color.text[appearance].disabled};

  white-space: ${({ ellipsis }: ITextProps) => ellipsis && "nowrap"};
  overflow: ${({ ellipsis }: ITextProps) => ellipsis && "hidden"};
  text-overflow: ${({ ellipsis }: ITextProps) => ellipsis && "ellipsis"};

  cursor: ${({ cursorHover, parentHover }: ITextProps) =>
    (cursorHover || parentHover) && "pointer"};
  &:hover {
    color: ${({ cursorHover, appearance, disabled }: ITextProps) =>
      cursorHover &&
      !disabled &&
      appearance &&
      inube.color.text[appearance].hover};
  }

  color: ${({ parentHover, appearance, disabled }: ITextProps) =>
    parentHover &&
    !disabled &&
    appearance &&
    inube.color.text[appearance].hover};
`;

export { StyledText };
