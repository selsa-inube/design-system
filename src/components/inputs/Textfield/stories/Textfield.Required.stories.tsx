import { Textfield, ITextfieldProps } from "..";
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
      <TextfieldController {...args} />
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
  errorMessage: "This field can not be blank",
  validMessage: "Field validation is successful",
};

export default story;

export { Required };
