import styled from "styled-components";

import { inube } from "@shared/tokens";
import { ILabelProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledLabelProps extends ILabelProps {
  theme?: Themed;
}

const StyledLabel = styled.label`
  font-family: ${({ theme }: IStyledLabelProps) => {
    return (
      theme?.typography?.label?.large?.font || inube.typography.label.large.font
    );
  }};
  font-size: ${({ size, theme }: IStyledLabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.size ||
      inube.typography.label[size].size)};
  font-weight: ${({ size, theme }: IStyledLabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.weight ||
      inube.typography.label[size].weight)};
  letter-spacing: ${({ size, theme }: IStyledLabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.tracking ||
      inube.typography.label[size].tracking)};
  line-height: ${({ size, theme }: IStyledLabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.lineHeight ||
      inube.typography.label[size].lineHeight)};
  margin: ${({ margin }: IStyledLabelProps) => margin};
  padding: ${({ padding }: IStyledLabelProps) => padding};
  color: ${({ theme, disabled, focused, invalid }: IStyledLabelProps) => {
    if (disabled) {
      return (
        theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled
      );
    }

    if (invalid) {
      return (
        theme?.color?.text?.error?.regular || inube.color.text.error.regular
      );
    }

    if (focused) {
      return (
        theme?.color?.text?.primary?.hover || inube.color.text.primary.hover
      );
    }

    return theme?.color?.text?.dark?.regular || inube.color.text.dark.regular;
  }};
`;

export { StyledLabel };
