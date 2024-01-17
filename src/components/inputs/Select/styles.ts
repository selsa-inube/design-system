import styled from "styled-components";

import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";
//import { typography } from "@shared/typography/typography";
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
  position: relative;
  cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
    disabled && "not-allowed"};
  width: ${({ fullwidth }: IStyledSelectInterfaceProps) =>
    fullwidth ? "100%" : "300px"};

  & > label {
    cursor: ${({ disabled }: IStyledSelectInterfaceProps) =>
      disabled && "not-allowed"};
  }
`;
const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme, readonly }: IStyledSelectInterfaceProps) =>
    readonly &&
    (theme?.color?.surface?.light?.clear || inube.color.surface.light.clear)};
  border-color: ${({
    theme,
    disabled,
    readonly,
    status,
    focused,
  }: IStyledSelectInterfaceProps) => {
    if (disabled) {
      return (
        (theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled) +
        "; pointer-events: none; opacity: 0.5;"
      );
    }
    if (focused && !readonly) {
      return (
        theme?.color?.text?.primary?.hover || inube.color.text.primary.hover
      );
    }
    if (status === "invalid" && !readonly) {
      return (
        theme?.color?.text?.error?.regular || inube.color.text.error.regular
      );
    }
    return (
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular
    );
  }};

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
  font-family: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  font-weight: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.weight};
  line-height: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }: IStyledSelectInterfaceProps) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
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
export { StyledContainer, StyledInputContainer, StyledInput };
