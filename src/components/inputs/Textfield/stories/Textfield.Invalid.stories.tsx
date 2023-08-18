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
  disabled: false,
  type: "text",
  maxLength: 20,
  minLength: 1,
  required: true,
  message: {
    content: "Please enter only letters in this field",
    type: "invalid",
  },
  size: "wide",
  fullwidth: false,
};

export default story;

export { Invalid };
