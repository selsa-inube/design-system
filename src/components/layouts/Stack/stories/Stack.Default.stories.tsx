import { ElementType } from "react";
import { Stack } from "..";
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
import { IStackProps } from "../interfaces/Stack.interface";

const story = {
  title: "layout/Stack/Default",
  components: [Stack],
  decorators: [
    (Story: ElementType) => (
      <div style={{ margin: "3em", width: "430px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children,
    wrap,
    direction,
    justifyContent,
    alignItems,
    gap,
    margin,
    padding,
  },
};

const StackTemplate = (args: IStackProps) => (
  <Stack {...args}>
    {[args.children].map((item) => (
      <StyledDiv key={item} />
    ))}
  </Stack>
);

export const Default = {
  args: {
    children: [...Array(6 + 1).keys()].slice(1),
    gap: "10px",
    margin: "0px",
    padding: "0px",
  },
  render: (args: IStackProps) => <StackTemplate {...args} />,
};

export default story;
