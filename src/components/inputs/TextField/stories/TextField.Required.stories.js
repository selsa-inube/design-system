import { TextField } from "..";
import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  size,
  isFullWidth,
} from "./props";
import { TextFieldController } from "./TexfieldController";

const story = {
  title: "inputs/TextField/Required",
  components: [TextField],
  parameters,
};

const RequiredComponent = (args) => {
  return (
    <Stack justifyContent="space-evenly">
      <TextFieldController {...args} isRequired={true} />
      <TextFieldController
        {...args}
        state="invalid"
        errorMessage="This field can not be blank"
      />
    </Stack>
  );
};

const Required = (args) => <RequiredComponent {...args} isRequired={true} />;
Required.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  isDisabled: false,
  type: "text",
  state: "pending",
  handleChange: () => {},
  maxLength: 20,
  minLength: 1,
  max: 10,
  min: 1,
  size: "wide",
  isFullWidth: false,
};

Required.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  size,
  isFullWidth,
};

export default story;

export { Required };
