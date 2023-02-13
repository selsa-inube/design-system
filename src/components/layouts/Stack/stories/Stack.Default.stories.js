import React from "react";
import { Stack } from "../index";

import {
  children,
  wrap,
  direction,
  justifyContent,
  alignItems,
  gap,
} from "./props";

const story = {
  title: "layout/Stack/Default",
  components: [Stack],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <Stack {...args} />;
// Default.args = {
//   size: "medium",
//   appearance: "blue",
//   isTransparent: false,
// };
Default.argTypes = {
  children,
  wrap,
  direction,
  justifyContent,
  alignItems,
  gap,
};

export default story;
