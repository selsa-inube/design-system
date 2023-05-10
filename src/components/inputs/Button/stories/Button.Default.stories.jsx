import React from "react";
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

const story = {
  title: "inputs/Button/Default",
  components: [Button],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Default = (args) => <Button {...args} />;

Default.args = {
  children: "Button",
  path: "/privilege",
  iconBefore: <MdAdd />,
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
