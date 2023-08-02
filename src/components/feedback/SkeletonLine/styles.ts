import styled, { keyframes } from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { ISkeletonLineProps } from "./index";

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
  background: ${colors.sys.actions.secondary.filled};
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
      ${colors.ref.palette.neutralAlpha.n0A} 20%,
      ${colors.ref.palette.neutralAlpha.n20A} 50%,
      ${colors.ref.palette.neutralAlpha.n0A} 80%
    );
    animation: ${({ isAnimated }: ISkeletonLineProps) => isAnimated && shimmer}
      2s linear infinite;
  }
`;

export { StyledSkeletonLine };
