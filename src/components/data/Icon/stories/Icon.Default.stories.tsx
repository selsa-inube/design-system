import { MdAdb } from "react-icons/md";

import { Icon } from "../index";

import {
  appearance,
  cursorHover,
  parentHover,
  isDisabled,
  spacing,
  variant,
  shape,
  handleClick,
  size,
} from "./props";
import { IIconProps } from "../interfaces/Icon.interface";

const story = {
  title: "data/Icon",
  component: Icon,
  decorators: [(Story: React.ElementType) => <Story />],
};

export const Default = (args: IIconProps) => <Icon {...args} />;

Default.args = {
  appearance: "primary",
  children: <MdAdb />,
  handleClick: () => console.log("clicked from Default Icon-story"),
};

Default.argTypes = {
  appearance,
  cursorHover,
  parentHover,
  children: { control: "object" },
  isDisabled,
  spacing,
  variant,
  shape,
  handleClick,
  size,
};

export default story;
