import { SkeletonIcon, ISkeletonIconProps } from ".";

import { props, parameters } from "./props";

const story = {
  title: "feedback/SkeletonIcon",
  components: [SkeletonIcon],
  parameters,
  argTypes: props,
};

export const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  animated: false,
};

export default story;
