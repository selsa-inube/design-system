import { ILabelProps } from "../index";

import { Label } from "..";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
  typo,
  children,
} from "./props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
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
Default.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
  typo,
  children,
};

export default story;

export { Default };
