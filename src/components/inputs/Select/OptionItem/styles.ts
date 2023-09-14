import styled from "styled-components";

import { inube } from "@shared/tokens";
import { IOptionItemProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledOptionItemProps extends IOptionItemProps {
  theme?: Themed;
}

const StyledOptionItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: ${inube.spacing.s500};
  padding: ${() =>
    `${inube.spacing.s050} ${inube.spacing.s200} ${inube.spacing.s050} ${inube.spacing.s150}`};
  cursor: ${({ disabled }: IStyledOptionItemProps) =>
    !disabled ? "pointer" : "not-allowed"};

  border-left: ${inube.spacing.s050} solid
    ${({ theme, isFocused }: IStyledOptionItemProps) =>
      isFocused
        ? theme?.color?.stroke?.primary?.regular ||
          inube.color.stroke.primary.regular
        : "transparent"};

  p {
    color: ${({ theme, disabled, isFocused }: IStyledOptionItemProps) => {
      if (disabled) {
        return (
          theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled
        );
      }
      if (isFocused) {
        return (
          theme?.color?.text?.primary?.regular ||
          inube.color.text.primary.regular
        );
      }
      return theme?.color?.text?.dark?.regular || inube.color.text.dark.regular;
    }};
  }

  &:hover {
    border-left: ${inube.spacing.s050} solid
      ${({ theme, disabled }: IStyledOptionItemProps) =>
        disabled
          ? "none"
          : theme?.color?.stroke?.primary?.regular ||
            inube.color.stroke.primary.regular};

    background-color: ${({ theme }: IStyledOptionItemProps) =>
      theme?.color?.surface?.gray?.hover || inube.color.surface.gray.hover};

    p {
      color: ${({ theme, disabled }: IStyledOptionItemProps) =>
        disabled
          ? theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled
          : theme?.color?.text?.primary?.regular ||
            inube.color.text.primary.regular};
    }
  }
`;

export { StyledOptionItem };
