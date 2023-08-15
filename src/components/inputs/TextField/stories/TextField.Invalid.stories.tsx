import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props, parameters } from "../props";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  parameters,
  argTypes: props,
};

const Invalid = (args: ITextfieldProps) => (
  <TextfieldController {...args} state="invalid" />
);
Invalid.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  value: "L-GARZON",
  placeholder: "Username..",
  isDisabled: false,
  type: "text",
  maxLength: 20,
  minLength: 1,
  isRequired: true,
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  size: "wide",
  isFullWidth: false,
};

export default story;

export { Invalid };
