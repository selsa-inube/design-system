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
        theme?.color?.palette?.neutral?.N30 || inube.color.palette.neutral.N30
      } 20%,
      ${
        theme?.color?.palette?.neutral?.N20 || inube.color.palette.neutral.N0
      } 50%,
      ${
        theme?.color?.palette?.neutral?.N30 || inube.color.palette.neutral.N30
      } 80%
    );`};
    animation: ${({ animated }: ISkeletonIconProps) => animated && shimmer} 2s
      linear infinite;
  }
`;

export { StyledSkeletonIcon };
