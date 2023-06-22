import React from "react";

import { DropDownItem } from "../index";

import {
  parameters,
  id,
  isDisabled,
  handleClick,
  isSelected,
  childre,
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
};

Default.argTypes = {
  id,
  isDisabled,
  handleClick,
  isSelected,
  childre,
};
export default story;

export { Default };
