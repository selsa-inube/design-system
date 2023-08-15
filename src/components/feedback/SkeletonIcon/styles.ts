import styled, { keyframes } from "styled-components";

import { ISkeletonIconProps } from "./index";
import { inube } from "@shared/tokens";

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
  width: ${({ size }: ISkeletonIconProps) => size};
  height: ${({ size }: ISkeletonIconProps) => size};
  background: ${({ theme }: ISkeletonIconProps) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${({ theme }: ISkeletonIconProps) => `linear-gradient(
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
    animation: ${({ animated }: ISkeletonIconProps) => animated && shimmer} 2s
      linear infinite;
  }
`;

export { StyledSkeletonIcon };
