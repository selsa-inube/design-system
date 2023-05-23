import React from "react";
import { CountdownBar } from "../index";

import { size, appearance, duration, handleCountdown } from "./props";

const story = {
  title: "feedback/CountdownBar/Default",
  components: [CountdownBar],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <CountdownBar {...args} />;

Default.args = {
  handleCountdown: () => console.log("countdown complete."),
};
Default.argTypes = {
  size,
  appearance,
  duration,
  handleCountdown,
};

export default story;
