import { MdAdb } from "react-icons/md";

import { Icon } from "../index";

import {
  appearance,
  cursorHover,
  parentHover,
  disabled,
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
  cursorHover: false,
  parentHover: false,
  disabled: false,
  spacing: "wide",
  variant: "none",
  shape: "rectangle",
  size: "24px",
  handleClick: () => console.log("clicked from Default Icon-story"),
};

Default.argTypes = {
  appearance,
  cursorHover,
  parentHover,
  children: { control: "object" },
  disabled,
  spacing,
  variant,
  shape,
  handleClick,
  size,
};

export default story;
