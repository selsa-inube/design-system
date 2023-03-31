import React from "react";
import { Spinner } from "./../index";

import { size, appearance, isTransparent } from "./props";

const story = {
  title: "feedback/Spinner/Default",
  components: [Spinner],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <Spinner {...args} />;

Default.argTypes = {
  size,
  appearance,
  isTransparent,
};

export default story;
