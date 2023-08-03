import { Stack } from "..";
import { props } from "../props";
import { Squares } from "./Squares";

const story = {
  title: "layout/Stack",
  components: [Stack],
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
  wrap: "wrap",
  direction: "row",
  justifyContent: "unset",
  alignItems: "initial",
  alignContent: "unset",
  height: "100%",
  width: "100%",
  margin: "0px",
  padding: "0px",
};

export default story;
