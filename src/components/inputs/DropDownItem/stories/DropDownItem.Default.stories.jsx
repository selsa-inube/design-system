import React from "react";

import { DropDownItem } from "../index";

const story = {
  title: "Inputs/DropDownItem/Default",
  component: [DropDownItem],
};

const Default = (args) => <DropDownItem {...args} />;

Default.args = {
  children: "Item 1",
  isSelected: false,
};

export default story;

export { Default };
