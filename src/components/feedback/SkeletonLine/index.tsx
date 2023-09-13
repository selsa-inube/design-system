import { StyledSkeletonLine } from "./styles";

export interface ISkeletonLineProps {
  width?: string;
  animated?: boolean;
}

const SkeletonLine = (props: ISkeletonLineProps) => {
  const { width = "100%", animated = false } = props;

  return <StyledSkeletonLine width={width} animated={animated} />;
};

export { SkeletonLine };
