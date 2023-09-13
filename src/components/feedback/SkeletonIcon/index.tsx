import { StyledSkeletonIcon } from "./styles";

export interface ISkeletonIconProps {
  size?: string;
  animated?: boolean;
}

const SkeletonIcon = (props: ISkeletonIconProps) => {
  const { size = "24px", animated = false } = props;

  return <StyledSkeletonIcon size={size} animated={animated} />;
};

export { SkeletonIcon };
