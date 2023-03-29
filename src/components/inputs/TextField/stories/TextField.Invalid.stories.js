import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";

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
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/TextField/Invalid",
  components: [TextField],
  parameters,
};

const Invalid = (args) => <TextFieldController {...args} state="invalid" />;
Invalid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "L-GARZON",
  placeholder: "Username..",
  isDisabled: false,
  type: "text",
  maxLength: 20,
  minLength: 1,
  isRequired: false,
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  size: "wide",
  isFullWidth: false,
};

Invalid.argTypes = {
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
  size,
  isFullWidth,
};

export default story;

export { Invalid };
