import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props, parameters } from "../props";

const story = {
  title: "inputs/TextField",
  components: [Textfield],
  parameters,
  argTypes: props,
};

const Number = (args: ITextfieldProps) => <TextfieldController {...args} />;
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

export default story;

export { Number };
