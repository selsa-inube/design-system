import styled from "styled-components";

import { ILabelProps } from "./index";
import { inube } from "@shared/tokens";
import { Themed } from "./props";

const getColor = (props: ILabelProps): string => {
  const { theme, disabled, focused, invalid } = props;
  let color =
    theme?.color?.text?.dark?.regular || inube.color.text.dark.regular;

  if (disabled) {
    color =
      theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled;
    return color;
  }

  if (invalid) {
    color =
      theme?.color?.text?.error?.regular || inube.color.text.error.regular;
    return color;
  }

  if (focused) {
    color =
      theme?.color?.text?.primary?.hover || inube.color.text.primary.hover;
    return color;
  }

  return color;
};

const StyledLabel = styled.label`
  font-family: ${({ theme }: Themed) => {
    return (
      theme?.typography?.label?.large?.font || inube.typography.label.large.font
    );
  }};
  font-size: ${({ size, theme }: ILabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.size ||
      inube.typography.label[size].size)};
  font-weight: ${({ size, theme }: ILabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.weight ||
      inube.typography.label[size].weight)};
  letter-spacing: ${({ size, theme }: ILabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.tracking ||
      inube.typography.label[size].tracking)};
  line-height: ${({ size, theme }: ILabelProps) =>
    size &&
    (theme?.typography?.label?.[size]?.lineHeight ||
      inube.typography.label[size].lineHeight)};
  color: ${(props: ILabelProps) => getColor(props)};
`;

export { StyledLabel };
