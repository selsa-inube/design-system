import { BrowserRouter } from "react-router-dom";
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
import { spacings } from "../types/Icon.Spacing.type";

const story = {
  title: "inputs/Icon/Default",
  component: Icon,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Default = (args: IIconProps) => <Icon {...args} />;

Default.args = {
  appearance: "black",
  size: "small",
  children: <MdAdb />,
  handleClick: () => console.log("clicked from Icon-story"),
};

Default.argTypes = {
  appearance,
  cursorHover,
  parentHover,
  children: { control: "object" }, // we use object type for children since they are React elements
  isDisabled,
  spacing,
  variant,
  shape,
  handleClick,
  size,
};

export default story;
