import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "../index";

import {
  parameters,
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
  title: "inputs/Button",
  components: [Button],
  parameters,
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
  appearance: "primary",
  path: "/privilege",
  iconBefore: <MdAdd />,
  isLoading: false,
  isDisabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked from Default-story"),
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
