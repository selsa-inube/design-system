import React from "react";

import { DropDownMenu } from "../index";

import { props } from "../props";

const story = {
  title: "Inputs/DropDownMenu",
  component: [DropDownMenu],
  argTypes: props,
};

const Default = (args) => <DropDownMenu {...args} />;
Default.args = {
  options: [
    { id: "1", label: "Item 1", isDisabled: true, isSelected: false },
    { id: "2", label: "Item 2", isDisabled: false, isSelected: false },
    { id: "3", label: "Item 3", isDisabled: false, isSelected: false },
  ],
  isOpenOptions: true,
};

export default story;

export { Default };