import { ITextFieldProps } from "../interfaces/TextField.interface";
import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";
import { Stack } from "../../../layouts/Stack";
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
