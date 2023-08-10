import { SkeletonIcon, ISkeletonIconProps } from ".";

import { props } from "./props";

const story = {
  title: "feedback/SkeletonIcon",
  components: [SkeletonIcon],
  argTypes: props,
};

export const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  isAnimated: false,
};

export default story;
