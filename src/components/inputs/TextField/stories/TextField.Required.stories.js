import { TextField } from "..";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
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
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/textField/Required",
  components: [TextField],
  parameters,
};

const Required = (args) => <TextField {...args} isRequired={true} />;
Required.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  isDisabled: false,
  type: "text",
  handleChange: () => {},
  maxLength: 20,
  minLength: 1,
  max: 10,
  min: 1,
  isInvalid: false,
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
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isInvalid,
  size,
  isFullWidth,
};

export default story;

export { Required };
