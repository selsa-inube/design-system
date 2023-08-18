import { Textfield, ITextfieldProps, IMessage } from "..";
import { TextfieldController } from "./TextfieldController";

import { Stack } from "@layouts/Stack";

import { props } from "../props";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  argTypes: props,
};

const RequiredComponent = (args: ITextfieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      <TextfieldController {...args} state="valid" />
      <TextfieldController {...args} size="compact" state="invalid" />
    </Stack>
  );
};

const Required = (args: ITextfieldProps) => (
  <RequiredComponent {...args} required={true} />
);
Required.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  disabled: false,
  type: "text",
  state: "pending",
  size: "wide",
  maxLength: 20,
  minLength: 1,
  max: 10,
  min: 1,
  fullwidth: false,
};

export default story;

export { Required };
