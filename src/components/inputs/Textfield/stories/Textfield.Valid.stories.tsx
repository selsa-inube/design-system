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
    disabled: false,
    message: {
      content: "Field validation is successful",
      type: "success",
    },
    required: true,
    state: "pending",
    type: "text",
    size: "wide",
  },
  render: (args: ITextfieldProps) => <TextfieldComponent {...args} />,
};

export default story;

export { Valid };
