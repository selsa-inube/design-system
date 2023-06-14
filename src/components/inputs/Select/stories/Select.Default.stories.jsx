import React from "react";
import { Select } from "../index";

const story = {
  title: "Inputs/Select/Default",
  component: [Select],
};

const Default = (args) => <Select {...args} />;

Default.args = {
  label: "Label",
  name: "name",
  id: "id",
  placeholder: "Placeholder",
  isDisabled: false,
  options: [
    { id: 1, label: "Item 1", isDisabled: true },
    { id: 2, label: "Item 2", isDisabled: false },
    { id: 3, label: "Item 3", isDisabled: false },
  ],
  list: "list",
};

export default story;

export { Default };
