import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props, parameters } from "../props";

const story = {
  title: "inputs/Textfield",
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
  size: "wide",
  readOnly: false,
};

export default story;

export { Default };
