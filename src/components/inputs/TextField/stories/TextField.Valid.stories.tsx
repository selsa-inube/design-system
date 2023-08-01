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
  state,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  isRequired,
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
    state,
    type,
    value,
    handleChange,
    iconBefore,
    iconAfter,
    maxLength,
    minLength,
    errorMessage,
    validMessage,
    size,
    isFullWidth,
    isRequired,
  },
};

const TextFieldComponent = (args: ITextFieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <TextFieldController {...args} key={size} size={size} state="valid" />
      ))}
    </Stack>
  );
};

const Valid = {
  args: {
    label: "Username",
    name: "Username",
    id: "Username",
    placeholder: "Write your full name",
    value: "LGARZON",
    isDisabled: false,
    errorMessage: "Please enter only letters in this field",
    validMessage: "Field validation is successful",
    isRequired: true,
    state: "pending",
    type: "text",
    size: "wide",
  },
  render: (args: ITextFieldProps) => <TextFieldComponent {...args} />,
};

export default story;

export { Valid };
