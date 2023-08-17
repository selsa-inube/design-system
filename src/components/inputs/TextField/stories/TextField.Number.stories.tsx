import { TextField, ITextFieldProps } from "..";
import { TextFieldController } from "./TextfieldController";

import { props } from "../props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  argTypes: props,
};

const Number = (args: ITextFieldProps) => <TextFieldController {...args} />;
Number.args = {
  label: "Quantity",
  name: "quantity",
  id: "quantity",
  placeholder: "Value",
  type: "number",
  state: "pending",
  disabled: false,
  max: 10,
  min: 0,
  required: false,
  size: "wide",
  fullwidth: false,
};

export default story;

export { Number };
