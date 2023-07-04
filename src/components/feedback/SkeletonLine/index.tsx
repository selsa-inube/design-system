import { StyledSkeletonLine } from "./styles";
import { ISkeletonLineProps } from "./interfaces/SkeletonLine.interface";

const SkeletonLine = (props: ISkeletonLineProps) => {
  const { width = "100%", isAnimated = false } = props;

  const transformedIsAnimated =
    typeof isAnimated === "boolean" ? isAnimated : false;

  return (
    <StyledSkeletonLine width={width} isAnimated={transformedIsAnimated} />
  );
};

export { SkeletonLine };
