import styled, { keyframes, css } from "styled-components";
import { ISkeletonLineProps } from "./index";
import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";

interface IStyledSkeletonLineProps extends ISkeletonLineProps {
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

const StyledSkeletonLine = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 16px;
  width: ${({ width }: IStyledSkeletonLineProps) => width};
  background: ${({ theme }: IStyledSkeletonLineProps) => {
    return theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear;
  }};

  ${({ animated }: IStyledSkeletonLineProps) =>
    animated &&
    css`
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${({ theme }: IStyledSkeletonLineProps) => `linear-gradient(
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
        animation: ${({ animated }: IStyledSkeletonLineProps) =>
            animated && shimmer}
          2s linear infinite;
      }
    `}
`;

export { StyledSkeletonLine };
