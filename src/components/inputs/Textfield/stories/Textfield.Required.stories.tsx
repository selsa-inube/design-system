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
  <RequiredComponent {...args} requerido={true} />
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
  fullwidth: false,
  errorMessage: "This field can not be blank",
  validMessage: "Field validation is successful",
};

export default story;

export { Required };
