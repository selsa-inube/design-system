import { TextField, ITextFieldProps } from "..";
import { TextFieldController } from "./TextfieldController";

import { Stack } from "@layouts/Stack";

import { props } from "../props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  argTypes: props,
};

const RequiredComponent = (args: ITextFieldProps) => {
  return (
    <Stack justifyContent="space-evenly">
      <TextFieldController {...args} />
      <TextFieldController {...args} size="compact" state="invalid" />
    </Stack>
  );
};

const Required = (args: ITextFieldProps) => (
  <RequiredComponent {...args} isRequired={true} />
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
