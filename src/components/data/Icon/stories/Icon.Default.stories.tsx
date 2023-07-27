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

Default.argTypes = {
  appearance,
  cursorHover,
  parentHover,
  icon: { control: "object" },
  disabled,
  spacing,
  variant,
  shape,
  handleClick,
  size,
};

export default story;
