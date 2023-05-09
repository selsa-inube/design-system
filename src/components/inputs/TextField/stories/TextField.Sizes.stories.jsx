import React from "react";

import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";
import { sizes } from "..";
import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/TextField/Size",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <TextFieldController {...args} key={size} size={size} />
      ))}
    </Stack>
  );
};

const Size = TextFieldComponent.bind({});
Size.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  isDisabled: false,
  placeholder: "Write your full name",
  value: "",
  state: "pending",
  maxLength: 10,
  minLength: 1,
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  isFullWidth: false,
  isRequired: false,
};

Size.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  isFullWidth,
};

export default story;

export { Size };
