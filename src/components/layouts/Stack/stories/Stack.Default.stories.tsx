import { ElementType } from "react";
import { Stack } from "..";
import { props } from "./props";
import { Squares } from "./Squares";

const story = {
  title: "layout/Stack",
  components: [Stack],
  decorators: [
    (Story: ElementType) => (
      <div style={{ margin: "3em", width: "430px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: props,
};

export const Default = (args: any) => (
  <Stack {...args}>
    {args.children.map((item: any, index: number) => (
      <Squares key={index} item={item} />
    ))}
  </Stack>
);

Default.args = {
  children: [...Array(6 + 1).keys()].slice(1),
  gap: "10px",
  width: "100%",
};

export default story;
