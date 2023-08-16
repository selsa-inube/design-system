import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";
import { Stack } from "@layouts/Stack";

import { props, sizes } from "../props";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  argTypes: props,
};

const TextfieldComponent = (args: ITextfieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <TextfieldController {...args} key={size} size={size} />
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
  render: (args: ITextfieldProps) => <TextfieldComponent {...args} />,
};

export default story;

export { Size };
