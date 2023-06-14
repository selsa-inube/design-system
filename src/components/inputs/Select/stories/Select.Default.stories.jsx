import React from "react";
import { Select } from "../index";
import { SelectController } from "./SelectController";

const story = {
  title: "Inputs/Select/Default",
  component: [Select],
};

const Default = (args) => <SelectController {...args} />;

Default.args = {
  label: "Label",
  name: "name",
  id: "id",
  placeholder: "Placeholder",
  isDisabled: false,
  options: [
    { id: 1, label: "Item", isDisabled: true },
    { id: 2, label: "Item 2", isDisabled: false },
    { id: 3, label: "Item 3", isDisabled: false },
  ],
  value: "andres",
};

export default story;

export { Default };
