import { MdAdb } from "react-icons/md";

import { Icon } from "../index";

import { IIconProps } from "../interfaces/Icon.interface";
import { props } from "./props";

const story = {
  title: "data/Icon",
  component: Icon,
  decorators: [(Story: React.ElementType) => <Story />],
  argTypes: {
    props,
  },
};

export const Default = (args: IIconProps) => <Icon {...args} />;

Default.args = {
  appearance: "primary",
  icon: <MdAdb />,
  cursorHover: false,
  parentHover: false,
  disabled: false,
  spacing: "wide",
  variant: "none",
  shape: "rectangle",
  size: "24px",
  handleClick: () => console.log("clicked from Default Icon-story"),
};

export default story;
