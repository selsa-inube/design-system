import styled, { keyframes } from "styled-components";

import { ISkeletonIconProps } from "./index";
import { inube } from "@src/shared/tokens";

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
  background: ${inube.color.surface.dark.clear};

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      ${inube.color.palette.neutral.N30} 20%,
      ${inube.color.palette.neutral.N20} 50%,
      ${inube.color.palette.neutral.N30} 80%
    );
    animation: ${({ isAnimated }: ISkeletonIconProps) => isAnimated && shimmer}
      2s linear infinite;
  }
`;

export { StyledSkeletonIcon };
