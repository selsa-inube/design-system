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
    fullwidth ? "100%" : "300px"};
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
  background-color: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  grid-template-columns: 1fr auto;
  border-width: 1px;
  border-style: solid;
  border-color: ${({
    theme,
    disabled,
    status,
    focused,
  }: IStyledSelectInterfaceProps) => {
    if (disabled) {
      return (
        (theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled) +
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
  pointer-events: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled ? "none" : "auto"};
  opacity: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled ? "0.5" : "none"};
  cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled ? "not-allowed" : "pointer"};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  padding: 0px 12px 0px 16px;
  border-width: none;
  border-style: none;
  border-color: none;
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
  background-color: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled ? "not-allowed" : "pointer"};

  ${({ size }: IStyledSelectInterfaceProps) => sizeOptions[size!]};

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

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
};
