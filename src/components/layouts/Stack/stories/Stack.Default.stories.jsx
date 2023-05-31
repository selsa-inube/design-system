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
  margin,
  padding,
} from "./props";

const story = {
  title: "layout/Stack/Default",
  components: [Stack],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", width: "430px" }}>
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
  gap: "10px",
  margin: "0px",
  padding: "0px",
};
Default.argTypes = {
  children,
  wrap,
  direction,
  justifyContent,
  alignItems,
  gap,
  margin,
  padding,
};

export default story;
