import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props, parameters } from "../props";

const story = {
  title: "inputs/Textfield",
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
  disabled: false,
  max: 10,
  min: 0,
  required: false,
  size: "wide",
  fullwidth: false,
};

export default story;

export { Number };
