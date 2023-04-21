import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "../index";
import { ButtonController } from "./ButtonController";

import {
  children,
  isLoading,
  appearance,
  isdisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isfullwidth,
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

export const Default = (args) => <ButtonController {...args} />;

Default.args = {
  children: "Button",
  iconBefore: <MdAdd />,
};
Default.argTypes = {
  children,
  isLoading,
  appearance,
  isdisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isfullwidth,
  handleClick,
  path,
};

export default story;
