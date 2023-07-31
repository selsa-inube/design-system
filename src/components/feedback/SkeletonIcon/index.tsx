import { StyledSkeletonIcon } from "./styles";

export interface ISkeletonIconProps {
  size?: string;
  isAnimated?: boolean;
}

const defaultSize = "24px";

const SkeletonIcon = (props: ISkeletonIconProps) => {
  const { size = defaultSize, isAnimated = false } = props;

  return <StyledSkeletonIcon size={size} isAnimated={isAnimated} />;
};

export { SkeletonIcon };
