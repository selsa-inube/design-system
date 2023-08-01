import { ITextFieldProps } from "../interfaces/TextField.interface";

import { TextField } from "..";
import { TextFieldController } from "./TextfieldController";

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
  size,
  readOnly,
} from "./props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  parameters,
};

const Default = (args: ITextFieldProps) => <TextFieldController {...args} />;
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "",
  maxLength: 10,
  minLength: 1,
  min: 0,
  max: 0,
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  size: "wide",
  readOnly: false,
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
  size,
  readOnly,
};

export default story;

export { Default };
