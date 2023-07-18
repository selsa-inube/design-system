import React from "react";

import { DropDownItem } from "../index";

import {
  parameters,
  id,
  isDisabled,
  handleClick,
  isSelected,
  children,
} from "./props";

const story = {
  title: "Inputs/DropDownItem/Default",
  component: [DropDownItem],
  parameters,
};

const Default = (args) => <DropDownItem {...args} />;

Default.args = {
  children: "Item 1",
  isSelected: false,
  isDisabled: false,
};

Default.argTypes = {
  id,
  isDisabled,
  handleClick,
  isSelected,
  children,
};
export default story;

export { Default };
