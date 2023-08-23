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
    disabled: false,
    placeholder: "Write your full name",
    value: "",
    state: "pending",
    type: "text",
    errorMessage: "Please enter only letters in this field",
    validMessage: "The field has been successfully validated",
    fullwidth: false,
    required: false,
    readOnly: false,
  },
  render: (args: ITextfieldProps) => <TextfieldComponent {...args} />,
};

export default story;

export { Size };
