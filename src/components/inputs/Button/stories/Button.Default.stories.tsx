import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "../index";

import {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
  path,
} from "./props";
import { IButtonProps } from "../interfaces/Button.interface";

const story = {
  title: "inputs/Button/Default",
  components: [Button],
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

export const Default = (args: IButtonProps) => <Button {...args} />;

Default.args = {
  children: "Button",
  path: "/privilege",
  iconBefore: <MdAdd />,
  handleClick: () => console.log("clicked from Default-story"),
  appearance: "remove",
};
Default.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
  path,
};

export default story;
