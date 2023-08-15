import { Themed } from "./props";
import { StyledSkeletonIcon } from "./styles";

export interface ISkeletonIconProps extends Themed {
  size?: string;
  animated?: boolean;
}

const SkeletonIcon = (props: ISkeletonIconProps) => {
  const { size = "24px", animated = false } = props;

  return <StyledSkeletonIcon size={size} animated={animated} />;
};

export { SkeletonIcon };
