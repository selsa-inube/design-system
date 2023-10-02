import styled from "styled-components";

import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";
import { typography } from "@shared/typography/typography";
import { ISelectInterfaceProps } from "./interface";

interface IStyledSelectInterfaceProps extends ISelectInterfaceProps {
  theme?: Themed;
}

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

const StyledContainer = styled.div`
  cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled && "not-allowed"};
  width: ${({ fullwidth }: IStyledSelectInterfaceProps) =>
    fullwidth ? "100%" : "fit-content"};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding-left: 16px;
  pointer-events: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled && "none"};

  & label {
    margin-right: 5px;
  }
`;

const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  background: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  grid-template-columns: 1fr auto;
  border: 1px solid
    ${({ theme, disabled, status, focused }: IStyledSelectInterfaceProps) => {
      if (disabled) {
        return (
          (theme?.color?.text?.dark?.disabled ||
            inube.color.text.dark.disabled) +
          "; pointer-events: none; opacity: 0.5;"
        );
      }
      if (focused) {
        return (
          theme?.color?.text?.primary?.hover || inube.color.text.primary.hover
        );
      }
      if (status === "invalid") {
        return (
          theme?.color?.text?.error?.regular || inube.color.text.error.regular
        );
      }
      return (
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular
      );
    }};
  ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled && "pointer-events: none; opacity: 0.5;"}
  cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled ? "not-allowed" : "pointer"};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  padding: 0px 12px 0px 16px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.tracking};
  color: ${({ theme, disabled }: IStyledSelectInterfaceProps) => {
    if (disabled) {
      return (
        theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled
      );
    }
    return theme?.color?.text?.dark?.regular || inube.color.text.dark.regular;
  }};
  background: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled ? "not-allowed" : "pointer"};
  width: ${({ fullwidth }: IStyledSelectInterfaceProps) =>
    fullwidth ? "252px" : "calc(100% - 32px)"};
  ${({ size }: IStyledSelectInterfaceProps) => sizeOptions[size!]};

  border: none;

  ::placeholder {
    color: ${({ theme }: IStyledSelectInterfaceProps) =>
      theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${inube.spacing.s200};
  pointer-events: none;
  color: ${({ disabled, status, theme }: IStyledSelectInterfaceProps) => {
    if (disabled) {
      return (
        theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      );
    }

    if (status === "valid") {
      return (
        theme?.color?.text?.success?.regular || inube.color.text.success.regular
      );
    }

    if (status === "invalid") {
      return (
        theme?.color?.text?.error?.regular || inube.color.text.error.regular
      );
    }
  }};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: ${inube.spacing.s100};
  }
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
};
