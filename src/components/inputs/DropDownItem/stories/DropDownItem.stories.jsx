import React from "react";

import { DropDownItem } from "../index";

import { props } from "../props";

const story = {
  title: "Inputs/DropDownItem",
  component: [DropDownItem],
  argTypes: props,
};

const Default = (args) => <DropDownItem {...args} />;

Default.args = {
  children: "Item 1",
  isSelected: false,
  isDisabled: false,
};

export default story;

export { Default };
