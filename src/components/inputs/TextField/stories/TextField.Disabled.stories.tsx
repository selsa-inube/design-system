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
        <div key={size}>
          <TextFieldController {...args} size={size} isDisabled={true} />
        </div>
      ))}
    </Stack>
  );
};

const Disabled = {
  args: {
    label: "Username",
    name: "Username",
    id: "Username",
    value: "",
    type: "text",
    placeholder: "Write your full name",
    maxLength: 10,
    minLength: 1,
  },
  render: (args: ITextFieldProps) => <TextFieldComponent {...args} />,
};

export default story;

export { Disabled };
