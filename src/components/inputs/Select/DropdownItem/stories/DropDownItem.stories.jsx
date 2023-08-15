import React from "react";

import { DropdownItem } from "../index";

import { props } from "../props";

const story = {
  title: "Inputs/DropdownItem",
  component: [DropdownItem],
  argTypes: props,
};

const Default = (args) => <DropdownItem {...args} />;

Default.args = {
  children: "Item 1",
  isSelected: false,
  isDisabled: false,
};

export default story;

export { Default };
