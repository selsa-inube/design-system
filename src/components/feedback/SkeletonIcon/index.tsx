import { ISkeletonIconProps } from "./interfaces/SkeletonIcon.interface";
import { StyledSkeletonIcon } from "./styles";

const defaultSize = "24px";

const SkeletonIcon = (props: ISkeletonIconProps) => {
  const { size = defaultSize, isAnimated = false } = props;

  return <StyledSkeletonIcon size={size} isAnimated={isAnimated} />;
};

export { SkeletonIcon };
