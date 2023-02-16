import React from "react";
import { Button } from "../index";

import { size, appearance, isTransparent } from "./props";

const story = {
  title: "inputs/Button/Default",
  components: [Button],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  // children,
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: "",
  iconAfter: "",
  type: "text",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
};
Default.argTypes = {
  size,
  appearance,
  isTransparent,
};

export default story;
