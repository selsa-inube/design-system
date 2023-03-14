import styled from "styled-components";

import { css } from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledProgressSkeleton = styled.div`
  background-color: ${colors.sys.actions.secondary.filled};
  height: 16px;
  width: ${({ width }) => width};
  border-radius: 6px;
  box-shadow: none;
`;

const Skeleton = css`
  background: linear-gradient(
    to right,
    ${colors.ref.palette.neutralAlpha.n50A},
    ${colors.ref.palette.neutralAlpha.n40A},
    ${colors.ref.palette.neutralAlpha.n50A}
  );

  animation: shimmer 2s linear infinite;
  @keyframes shimmer {
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
  }
`;

const StyledSkeletonLine = styled(StyledProgressSkeleton)`
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      ${Skeleton}
    `}
`;

export { StyledSkeletonLine };
