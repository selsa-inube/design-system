import { TextField, ITextFieldProps } from "..";
import { TextFieldController } from "./TextfieldController";
import { sizes } from "../types/TextField.Size.type";
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
  readOnly,
} from "./props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  parameters,
  argTypes: {
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
    readOnly,
  },
};

const TextFieldComponent = (args: ITextFieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <TextFieldController {...args} key={size} size={size} />
      ))}
    </Stack>
  );
};

const Size = {
  args: {
    label: "Username",
    name: "Username",
    id: "Username",
    isDisabled: false,
    placeholder: "Write your full name",
    value: "",
    state: "pending",
    type: "text",
    maxLength: 10,
    minLength: 1,
    errorMessage: "Please enter only letters in this field",
    validMessage: "The field has been successfully validated",
    isFullWidth: false,
    isRequired: false,
    readOnly: false,
  },
  render: (args: ITextFieldProps) => <TextFieldComponent {...args} />,
};

export default story;

export { Size };
