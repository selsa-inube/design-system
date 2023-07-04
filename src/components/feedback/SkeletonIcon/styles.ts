import styled, { keyframes } from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { ISkeletonIconProps } from "./interfaces/SkeletonIcon.interface";

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
  background: ${colors.sys.actions.secondary.filled};

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      100deg,
      ${colors.ref.palette.neutralAlpha.n0A} 20%,
      ${colors.ref.palette.neutralAlpha.n20A} 50%,
      ${colors.ref.palette.neutralAlpha.n0A} 80%
    );
    animation: ${({ isAnimated }: ISkeletonIconProps) => isAnimated && shimmer}
      2s linear infinite;
  }
`;

export { StyledSkeletonIcon };
