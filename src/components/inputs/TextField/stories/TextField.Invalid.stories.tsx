import { TextField, ITextFieldProps } from "..";
import { TextFieldController } from "./TextfieldController";

import { props } from "../props";

const story = {
  title: "inputs/TextField",
  components: [TextField],
  argTypes: props,
};

const Invalid = (args: ITextFieldProps) => (
  <TextFieldController {...args} state="invalid" />
);
Invalid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "L-GARZON",
  placeholder: "Username..",
  disabled: false,
  type: "text",
  maxLength: 20,
  minLength: 1,
  required: true,
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  size: "wide",
  fullwidth: false,
};

export default story;

export { Invalid };
