import { Select, ISelectProps } from "..";
import { InForm } from "./Select.form.Controller";

import { props, parameters } from "../props";

const story = {
  title: "Inputs/Select",
  component: [Select],
  parameters,
  argTypes: props,
};

const SelectInForm = (args: ISelectProps) => <InForm {...args} />;

SelectInForm.args = {
  label: "Select",
  name: "select",
  id: "select",
  placeholder: "Select",
  value: "",
  required: true,
  disabled: false,
  options: [
    { id: "1", label: "Item 1", disabled: false },
    { id: "2", label: "123", disabled: false },
    { id: "3", label: "Item", disabled: false },
  ],
  size: "compact",
  fullwidth: false,
};

export default story;
export { SelectInForm };
