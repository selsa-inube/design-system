import React from "react";
import { SkeletonIcon } from "./../index";

import { width, height, isAnimated } from "./props";

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
  width: "24px",
  height: "24px",
  isAnimated: false,
};
Default.argTypes = {
  width,
  height,
  isAnimated,
};

export default story;
