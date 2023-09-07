import React from "react";

import { DropdownMenu } from "../index";

import { props, parameters } from "../props";

const story = {
  title: "Inputs/DropdownMenu",
  component: [DropdownMenu],
  parameters,
  argTypes: props,
};

const Default = (args) => <DropdownMenu {...args} />;
Default.args = {
  options: [
    { id: "1", label: "Item 1", disabled: true, isSelected: false },
    { id: "2", label: "Item 2", disabled: false, isSelected: false },
    { id: "3", label: "Item 3", disabled: false, isSelected: false },
  ],
  isOpenOptions: true,
};

export default story;

export { Default };
