import { TextField, ITextFieldProps } from "..";
import { TextFieldController } from "./TextfieldController";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  parameters,
};

const Number = (args: ITextFieldProps) => <TextFieldController {...args} />;
Number.args = {
  label: "Quantity",
  name: "quantity",
  id: "quantity",
  placeholder: "Value",
  type: "number",
  state: "pending",
  isDisabled: false,
  max: 10,
  min: 0,
  isRequired: false,
  size: "wide",
  isFullWidth: false,
};

Number.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  type,
  state,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
};

export default story;

export { Number };
