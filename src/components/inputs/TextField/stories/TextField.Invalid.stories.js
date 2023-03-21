import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";

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

const Invalid = (args) => <TextFieldController {...args} isInvalid={true} />;
Invalid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "L-GARZON",
  placeholder: "Username..",
  isDisabled: false,
  type: "text",
  handleChange: () => {},
  maxLength: 20,
  minLength: 1,
  isRequired: false,
  state: "invalid",
  errorMessage: "This field can only contain letters",
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
