import React from "react";

import { TextField, sizes } from "..";
import { TextFieldController } from "./TextfieldController";
import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
} from "./props";

const story = {
  title: "inputs/TextField/Disabled",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <div key={size}>
          <TextFieldController {...args} size={size} isDisabled={true} />
        </div>
      ))}
    </Stack>
  );
};

const Disabled = TextFieldComponent.bind({});
Disabled.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "",
  placeholder: "Write your full name",
  maxLength: 10,
  minLength: 1,
};

Disabled.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
};

export default story;

export { Disabled };
