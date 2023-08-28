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
        <TextfieldController {...args} key={size} size={size} status="valid" />
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
    errorMessage: "Please enter only letters in this field",
    validMessage: "Field validation is successful",
    required: true,
    status: "pending",
    type: "text",
    size: "wide",
  },
  render: (args: ITextfieldProps) => <TextfieldComponent {...args} />,
};

export default story;

export { Valid };
