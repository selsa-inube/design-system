import styled from "styled-components";
import { IIconProps } from "./interfaces/Icon.interface";
import { inube } from "../../../shared/tokens";
import { Variant } from "./types/Icon.Variant.type";
import { Appearance } from "./types/Icon.Appearance.type";

const getColor = (
  theme: any,
  isDisabled: boolean | undefined,
  variant: Variant,
  appearance: Appearance,
  isHover: boolean = false
) => {
  // if (isHover) {
  //   return inube.color.text[appearance].hover;
  // }
  return 0;
};

const StyledIcon = styled.div`
  display: inline-block
  cursor: ${(props: IIconProps) => (props.cursorHover ? "pointer" : "default")};
  opacity: ${(props: IIconProps) => (props.parentHover ? 1 : 0.5)};
  pointer-events: ${(props: IIconProps) =>
    props.isDisabled ? "none" : "auto"};

  border-style: ${(props: IIconProps) =>
    props.variant === "filled" ? "none" : "solid"};
  border-radius: ${(props: IIconProps) =>
    props.shape === "circle" ? "50%" : "0"};
  border-color: ${({ theme }: any, props: IIconProps) =>
    inube.color.text.primary.regular}
  & > svg {
    ${({ theme, isDisabled, variant, appearance }: any) =>
      getColor(theme, isDisabled, variant, appearance)};
    padding: ${({ spacing }: IIconProps) => {
      if (spacing === "large") {
        return inube.spacing.s100;
      }

      if (spacing === "medium") {
        return inube.spacing.s050;
      }

      return inube.spacing.s025;
    }};

    width: ${({ size }: IIconProps) => {
      if (size === "large") {
        return "40px";
      }

      if (size === "medium") {
        return "32px";
      }

      return "24px";
    }};
  
    height: ${({ size }: IIconProps) => {
      if (size === "large") {
        return "40px";
      }

      if (size === "medium") {
        return "32px";
      }

      return "24px";
    }};
  }

`;

export { StyledIcon };
