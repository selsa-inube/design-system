import React from "react";
import { Stack } from "../index";
import { StyledDiv } from "./stories.styles";

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

const StackTemplate = ({ ...args }) => (
  <Stack {...args}>
    {args.children.map((item) => (
      <StyledDiv key={item} />
    ))}
  </Stack>
);
export const Default = StackTemplate.bind({});

Default.args = {
  children: [...Array(6 + 1).keys()].slice(1),
  wrap: false,
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
};
Default.argTypes = {
  children,
  wrap,
  direction,
  justifyContent,
  alignItems,
  gap,
};

export default story;
