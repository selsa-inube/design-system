import { TextField } from "..";
import { TextFieldController } from "./TexfieldController";

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
  title: "inputs/TextField/Number",
  components: [TextField],
  parameters,
};

const Number = (args) => <TextFieldController {...args} />;
Number.args = {
  label: "Quantity",
  name: "quantity",
  id: "quantity",
  placeholder: "Value",
  type: "number",
  state: "pending",
  isDisabled: false,
  handleChange: () => {},
  max: 10,
  min: 0,
  isRequired: false,
  errorMessage: "",
  validMessage: "",
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
