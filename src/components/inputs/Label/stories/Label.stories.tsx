import { ILabelProps } from "../interfaces/Label.interface";

import { Label } from "..";

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
  isFocused: false,
  isInvalid: false,
};

export default story;

export { Default };
