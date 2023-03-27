import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";

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
  errorMessage,
  validMessage,
  size,
} from "./props";

const story = {
  title: "inputs/TextField/Default",
  components: [TextField],
  parameters,
};

const Default = (args) => <TextFieldController {...args} />;
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  min: 0,
  max: 0,
  errorMessage: "Please enter only letters in this field",
  validMessage: "El campo ha sido validado correctamente.",
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
  isRequired,
  errorMessage,
  validMessage,
  size,
};

export default story;

export { Default };
