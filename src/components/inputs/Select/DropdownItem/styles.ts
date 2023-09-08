import styled from "styled-components";

import { IDropdownItemProps } from ".";
import { inube } from "@shared/tokens";

const StyledDropdownItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: ${inube.spacing.s500};
  padding: ${() =>
    `${inube.spacing.s050} ${inube.spacing.s200} ${inube.spacing.s050} ${inube.spacing.s150}`};
  cursor: ${({ disabled }: IDropdownItemProps) =>
    !disabled ? "pointer" : "not-allowed"};

  border-left: ${inube.spacing.s050} solid
    ${({ theme, isFocused }: IDropdownItemProps) =>
      isFocused
        ? theme?.color?.stroke?.primary?.regular ||
          inube.color.stroke.primary.regular
        : "transparent"};

  p {
    color: ${({ theme, disabled, isFocused }: IDropdownItemProps) => {
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
      ${({ theme, disabled }: IDropdownItemProps) =>
        disabled
          ? "none"
          : theme?.color?.stroke?.primary?.regular ||
            inube.color.stroke.primary.regular};

    background-color: ${({ theme }: IDropdownItemProps) =>
      theme?.color?.surface?.gray?.hover || inube.color.surface.gray.hover};

    p {
      color: ${({ theme, disabled }: IDropdownItemProps) =>
        disabled
          ? theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled
          : theme?.color?.text?.primary?.regular ||
            inube.color.text.primary.regular};
    }
  }
`;

export { StyledDropdownItem };
