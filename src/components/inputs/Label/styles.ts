import styled from "styled-components";

import { ILabelProps } from "./index";
import { inube } from "@shared/tokens";
import { Themed } from "./props";

const getColor = (props: ILabelProps): string => {
  const { theme, isDisabled, isFocused, isInvalid } = props;
  let color =
    theme?.color?.text?.dark?.regular || inube.color.text.dark.regular;

  if (isDisabled) {
    color =
      theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled;
    return color;
  }

  if (isInvalid) {
    color =
      theme?.color?.text?.error?.regular || inube.color.text.error.regular;
    return color;
  }

  if (isFocused) {
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
  font-size: ${({ typo, theme }: ILabelProps) =>
    typo &&
    (theme?.typography?.label?.[typo]?.size ||
      inube.typography.label[typo].size)};
  font-weight: ${({ typo, theme }: ILabelProps) =>
    typo &&
    (theme?.typography?.label?.[typo]?.weight ||
      inube.typography.label[typo].weight)};
  letter-spacing: ${({ typo, theme }: ILabelProps) =>
    typo &&
    (theme?.typography?.label?.[typo]?.tracking ||
      inube.typography.label[typo].tracking)};
  line-height: ${({ typo, theme }: ILabelProps) =>
    typo &&
    (theme?.typography?.label?.[typo]?.lineHeight ||
      inube.typography.label[typo].lineHeight)};
  color: ${(props: ILabelProps) => getColor(props)};
`;

export { StyledLabel };
