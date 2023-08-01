import { SkeletonIcon } from "../index";
import { ISkeletonIconProps } from "../interfaces/SkeletonIcon.interface";

import { props } from "../props";

const story = {
  title: "feedback/SkeletonIcon",
  components: [SkeletonIcon],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  isAnimated: false,
};

export default story;
