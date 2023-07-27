import { ILabelProps } from "../interfaces/Label.interface";

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
  htmlFor: "LabelText",
  children: "Label Text",
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
