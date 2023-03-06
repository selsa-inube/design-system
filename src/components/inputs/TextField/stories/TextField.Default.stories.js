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
  label: "Username",
  name: "Username",
  id: "Username",
  value: "",
  placeholder: "Write your full name",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  min: 0,
  max: 0,
  errorMessage: "",
  isInvalid: false,
  size: "wide",
  isFullWidth: false,
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
