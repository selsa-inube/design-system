import styled, { keyframes } from "styled-components";
import { ISkeletonLineProps } from "./index";
import { inube } from "@shared/tokens";

const shimmer = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StyledSkeletonLine = styled.div`
  position: relative;
  background: ${({ theme }: ISkeletonLineProps) => {
    return theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear;
  }};
  height: 16px;
  width: ${({ width }: ISkeletonLineProps) => width};
  border-radius: 6px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      100deg,
      ${({ theme }: ISkeletonLineProps) =>
          theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear}
        20%,
      ${({ theme }: ISkeletonLineProps) =>
          theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear}
        50%,
      ${({ theme }: ISkeletonLineProps) =>
          theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear}
        80%
    );
    animation: ${({ animated }: ISkeletonLineProps) => animated && shimmer} 2s
      linear infinite;
  }
`;

export { StyledSkeletonLine };
