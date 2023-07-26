import { ITextFieldProps } from "../interfaces/TextField.interface";

import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";

import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  parameters,
};

const RequiredComponent = (args: ITextFieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      <TextFieldController {...args} />
      <TextFieldController {...args} size="compact" state="invalid" />
    </Stack>
  );
};

const Required = (args: ITextFieldProps) => (
  <RequiredComponent {...args} isRequired={true} />
);
Required.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  isDisabled: false,
  type: "text",
  state: "pending",
  maxLength: 20,
  minLength: 1,
  max: 10,
  min: 1,
  isFullWidth: false,
  errorMessage: "This field can not be blank",
  validMessage: "Field validation is successful",
};

Required.argTypes = {
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
  size,
  isFullWidth,
};

export default story;

export { Required };
