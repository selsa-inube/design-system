import { SkeletonIcon } from "../index";
import { ISkeletonIconProps } from "../interfaces/SkeletonIcon.interface";

import { parameters, size, isAnimated } from "./props";

const story = {
  title: "feedback/SkeletonIcon/Default",
  components: [SkeletonIcon],
  parameters,
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
Default.argTypes = {
  size,
  isAnimated,
};

export default story;
