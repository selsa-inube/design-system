import { Label, ILabelProps } from "..";

import { props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const Default = (args: ILabelProps) => {
  return <Label {...args}>{args.children}</Label>;
};
Default.args = {
  htmlFor: "id",
  children: "Label Text",
  typo: "labelLarge",
  disabled: false,
  focused: false,
  invalid: false,
};

export default story;

export { Default };
