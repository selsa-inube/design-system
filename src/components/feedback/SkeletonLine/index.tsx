import { Themed } from "./props";
import { StyledSkeletonLine } from "./styles";

export interface ISkeletonLineProps extends Themed {
  width?: string;
  isAnimated?: boolean;
}

const SkeletonLine = (props: ISkeletonLineProps) => {
  const { width = "100%", isAnimated = false } = props;

  const transformedIsAnimated =
    typeof isAnimated === "boolean" ? isAnimated : false;

  return (
    <StyledSkeletonLine width={width} isAnimated={transformedIsAnimated} />
  );
};

export { SkeletonLine };
