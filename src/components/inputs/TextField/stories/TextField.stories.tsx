import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props, parameters } from "../props";

const story = {
  title: "inputs/TextField",
  components: [Textfield],
  parameters,
  argTypes: props,
};

const Default = (args: ITextfieldProps) => <TextfieldController {...args} />;
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

export default story;

export { Default };
