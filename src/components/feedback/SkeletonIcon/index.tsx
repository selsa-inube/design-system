import { Themed } from "./props";
import { StyledSkeletonIcon } from "./styles";

export interface ISkeletonIconProps extends Themed {
  size?: string;
  isAnimated?: boolean;
}

const SkeletonIcon = (props: ISkeletonIconProps) => {
  const { size = "24px", isAnimated = false } = props;

  return <StyledSkeletonIcon size={size} isAnimated={isAnimated} />;
};

export { SkeletonIcon };
