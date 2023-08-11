import { Label, ILabelProps } from "..";

import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const Default = (args: ILabelProps) => {
  return <Label {...args}>{args.children}</Label>;
};
Default.args = {
  htmlFor: "id",
  children: "Label Text",
  typo: "labelLarge",
  isDisabled: false,
  focused: false,
  isInvalid: false,
};

export default story;

export { Default };
