import { StyledSkeletonLine } from "./styles";

export interface ISkeletonLineProps {
  width?: string;
  isAnimated?: boolean;
}

const SkeletonLine = (props: ISkeletonLineProps) => {
  const { width = "100%", isAnimated = false } = props;

  return <StyledSkeletonLine width={width} isAnimated={isAnimated} />;
};

export { SkeletonLine };
