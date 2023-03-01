import { TextField } from "..";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  isFocused,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  isInvalid,
  errorMessage,
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/textField/Default",
  components: [TextField],
  parameters,
};

const Default = (args) => <TextField {...args} />;
Default.args = {
  label: "username",
  id: "username",
  isDisabled: false,
  isFocused: false,
  placeholder: "nombre",
  isRequired: false,
  errorMessage: "",
  isInvalid: false,
  maxLength: 3,
};

Default.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  isFocused,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  isInvalid,
  errorMessage,
  size,
  isFullWidth,
};

export default story;

export { Default };
