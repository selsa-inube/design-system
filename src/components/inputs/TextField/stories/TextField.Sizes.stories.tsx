import { TextField, ITextFieldProps } from "..";
import { TextFieldController } from "./TextfieldController";
import { Stack } from "@layouts/Stack";

import { props, sizes } from "../props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  argTypes: props,
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
    fullwidth: false,
    isRequired: false,
    readOnly: false,
  },
  render: (args: ITextFieldProps) => <TextFieldComponent {...args} />,
};

export default story;

export { Size };
