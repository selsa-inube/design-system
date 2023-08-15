import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";
import { Stack } from "@layouts/Stack";
import { props, sizes } from "../props";

const story = {
  title: "inputs/TextField",
  components: [Textfield],
  argTypes: props,
};

const TextFieldComponent = (args: ITextfieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <TextfieldController {...args} key={size} size={size} state="valid" />
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
  render: (args: ITextfieldProps) => <TextFieldComponent {...args} />,
};

export default story;

export { Valid };
