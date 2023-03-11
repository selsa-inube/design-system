import { TextField } from "..";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
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
} from "./props";
import { TextFieldController } from "./TexfieldController";

const story = {
  title: "inputs/textField/Default",
  components: [TextField],
  parameters,
};

const Default = (args) => <TextFieldController {...args} />;
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  min: 0,
  max: 0,
  errorMessage: "",
  isInvalid: false,
  size: "wide",
};

Default.argTypes = {
  label,
  name,
  id,
  placeholder,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isInvalid,
  isRequired,
  errorMessage,
  size,
};

export default story;

export { Default };
