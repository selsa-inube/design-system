import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { Stack } from "@layouts/Stack";

import { props, sizes, parameters } from "../props";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  parameters,
  argTypes: props,
};

const TextfieldComponent = (args: ITextfieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <div key={size}>
          <TextfieldController {...args} size={size} disabled={true} />
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
  render: (args: ITextfieldProps) => <TextfieldComponent {...args} />,
};

export default story;

export { Disabled };
