import React from "react";
import { Select } from "../index";
import { SelectController } from "./SelectController";
import {
  parameters,
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
} from "./props";

const story = {
  title: "Inputs/Select/Default",
  component: [Select],
  parameters,
};

const Default = (args) => <SelectController {...args} />;

Default.args = {
  label: "Label",
  name: "name",
  id: "id",
  placeholder: "Placeholder",
  isDisabled: false,
  options: [
    { id: "1", label: "Item 1", isDisabled: false },
    { id: "2", label: "123", isDisabled: false },
    { id: "3", label: "Item", isDisabled: false },
  ],
  isRequired: false,
  errorMessage: "This field can not be blank",
};

Default.argTypes = {
  parameters,
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
};

export default story;

export { Default };
