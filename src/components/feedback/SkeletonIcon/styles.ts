import styled, { keyframes } from "styled-components";

import { ISkeletonIconProps } from "./index";
import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";
import { css } from "styled-components";

interface IStyledSkeletonIconProps extends ISkeletonIconProps {
  theme?: Themed;
}

const shimmer = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const StyledSkeletonIcon = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  width: ${({ size }: IStyledSkeletonIconProps) => size};
  height: ${({ size }: IStyledSkeletonIconProps) => size};
  background: ${({ theme }: IStyledSkeletonIconProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};

  ${({ animated }: IStyledSkeletonIconProps) =>
    animated &&
    css`
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${({ theme }: IStyledSkeletonIconProps) => `linear-gradient(
      100deg,
      ${
        theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear
      } 20%,
      ${
        theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear
      } 50%,
      ${
        theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear
      } 80%
    );`};
        animation: ${({ animated }: IStyledSkeletonIconProps) =>
            animated && shimmer}
          2s linear infinite;
      }
    `}
`;

export { StyledSkeletonIcon };
