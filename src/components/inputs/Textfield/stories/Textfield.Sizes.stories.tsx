import { Textfield, ITextfieldProps, IMessage } from "..";
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
      {sizes.map((size, index) => (
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
    maxLength: 10,
    minLength: 1,
    fullwidth: false,
    required: false,
    readOnly: false,
  },
  render: (args: ITextfieldProps) => <TextfieldComponent {...args} />,
};

export default story;

export { Size };
