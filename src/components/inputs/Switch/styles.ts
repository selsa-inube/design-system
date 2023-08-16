import styled, { css } from "styled-components";

import { colors } from "@shared/colors/colors";
import { inube } from "@shared/tokens";
import { ISwitchProps } from ".";

const sizes: any = {
  large: {
    width: "40px",
    height: "20px",
  },
  small: {
    width: "32px",
    height: "16px",
  },
};

const StyledSpan = styled.span`
  position: absolute;
  top: ${inube.spacing.s0};
  left: ${inube.spacing.s0};
  right: ${inube.spacing.s0};
  bottom: ${inube.spacing.s0};
  transition: 0.1s;
  border-radius: 30px;
  cursor: ${(props: ISwitchProps) =>
    props.disabled ? "not-allowed" : "pointer"};
  background: ${(props: ISwitchProps) =>
    props.disabled
      ? colors.ref.palette.neutral.n40
      : colors.ref.palette.neutral.n200};

  &:hover {
    background-color: ${(props: ISwitchProps) =>
      props.disabled
        ? colors.ref.palette.neutral.n40
        : colors.ref.palette.neutral.n70};
  }

  &:before {
    position: absolute;
    content: "";
    left: ${inube.spacing.s025};
    border-radius: 50%;
    transition: 0.3s;
    background-color: ${colors.ref.palette.neutral.n0};
    ${(props: ISwitchProps) =>
      props.size === "small"
        ? css`
            width: 12px;
            height: 12px;
            bottom: calc((${inube.spacing.s200} - ${inube.spacing.s150}) / 2);
          `
        : css`
            width: 16px;
            height: 16px;
            bottom: calc((${inube.spacing.s250} - ${inube.spacing.s200}) / 2);
          `};
  }
`;

const StyledContainer = styled.label`
  position: relative;
  display: inline-block;
  ${(props: ISwitchProps) => props.size && sizes[props.size]};
  ${(props: ISwitchProps) => console.log(props.margin, "props.margin")};
  margin: ${({ margin }: ISwitchProps) => inube.spacing[margin]};
  padding: ${({ padding }: ISwitchProps) => inube.spacing[padding]};
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${(props: ISwitchProps) =>
      props.disabled
        ? colors.ref.palette.green.g75
        : colors.ref.palette.green.g400};

    &:hover {
      background-color: ${(props: ISwitchProps) =>
        props.disabled
          ? colors.ref.palette.green.g75
          : colors.ref.palette.green.g300};
    }
  }

  &:checked + span:before {
    ${(props: ISwitchProps) =>
      props.size === "small"
        ? "transform: translateX(16px);"
        : "transform: translateX(20px);"};
  }
`;

const StyledIcon = styled.div`
  & > #mdIcon {
    position: absolute;
    color: ${colors.ref.palette.neutral.n0};
    ${(props: ISwitchProps) =>
      props.size === "small"
        ? css`
            width: 10px;
            height: 10px;
            top: 3px;
            left: ${(props: ISwitchProps) => (props.checked ? "5px" : "17px")};
          `
        : css`
            width: 14px;
            height: 14px;
            top: 3px;
            left: ${(props: ISwitchProps) => (props.checked ? "5px" : "22px")};
          `};
  }
`;

export { StyledContainer, StyledInput, StyledSpan, StyledIcon };
