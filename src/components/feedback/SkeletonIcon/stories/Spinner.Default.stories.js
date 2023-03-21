import React from "react";
import { SkeletonIcon } from "./../index";

import { size, isAnimated } from "./props";

const story = {
  title: "feedback/SkeletonIcon/Default",
  components: [SkeletonIcon],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  isAnimated: false,
};
Default.argTypes = {
  size,
  isAnimated,
};

export default story;
