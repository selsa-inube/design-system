import React from "react";
import { ProgressBar } from "../index";

import { size, appearance, duration, handleCountdownEnd } from "./props";

const story = {
  title: "feedback/ProgressBar/Default",
  components: [ProgressBar],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <ProgressBar {...args} />;

Default.args = {
  handleCountdownEnd: () => console.log("Hey, I've reached 100%."),
};
Default.argTypes = {
  size,
  appearance,
  duration,
  handleCountdownEnd,
};

export default story;
