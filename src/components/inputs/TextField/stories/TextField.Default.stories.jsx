import React from "react";

import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  size,
} from "./props";

const story = {
  title: "inputs/TextField/Default",
  components: [TextField],
  parameters,
};

const Default = (args) => <TextFieldController {...args} />;
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "",
  maxLength: 10,
  minLength: 1,
  min: 0,
  max: 0,
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  size: "wide",
};

Default.argTypes = {
  label,
  name,
  id,
  placeholder,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  size,
};

export default story;

export { Default };
