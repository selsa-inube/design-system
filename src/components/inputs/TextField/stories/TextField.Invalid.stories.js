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
  isInvalid,
  errorMessage,
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/textField/Invalid",
  components: [TextField],
  parameters,
};

const Invalid = (args) => <TextField {...args} isInvalid={true} />;
Invalid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "L-GARZON",
  placeholder: "Username..",
  isDisabled: false,
  isFocused: false,
  type: "text",
  handleChange: () => {},
  maxLength: 20,
  minLength: 1,
  isInvalid: false,
  errorMessage: "This field can only contain letters",
  size: "wide",
};

Invalid.argTypes = {
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
  isInvalid,
  errorMessage,
  size,
  isFullWidth,
};

export default story;

export { Invalid };
