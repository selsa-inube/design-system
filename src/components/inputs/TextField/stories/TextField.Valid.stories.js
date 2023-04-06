import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";
import { sizes } from "..";
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
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  isRequired,
} from "./props";

const story = {
  title: "inputs/TextField/Valid",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <Stack justifyContent="space-evenly">
      {sizes.map((size) => (
        <div key={size}>
          <TextFieldController {...args} size={size} state="valid" />
        </div>
      ))}
    </Stack>
  );
};

const Valid = TextFieldComponent.bind({});
Valid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "LGARZON",
  isDisabled: false,
  errorMessage: "Please enter only letters in this field",
  validMessage: "Field validation is successful",
  isReuqed: true,
};

Valid.argTypes = {
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
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  isRequired,
};

export default story;

export { Valid };
