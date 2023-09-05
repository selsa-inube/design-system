import { Select, ISelectProps } from "..";
import { InForm } from "./Select.form.Controller";

import { props } from "../props";

const story = {
  title: "Inputs/Select",
  component: [Select],
  argTypes: props,
};

const SelectInForm = (args: ISelectProps) => <InForm {...args} />;

SelectInForm.args = {
  label: "Select",
  name: "select",
  id: "select",
  placeholder: "Select",
  isRequired: true,
  isDisabled: false,
  options: [
    { id: "1", label: "Item 1", isDisabled: false },
    { id: "2", label: "123", isDisabled: false },
    { id: "3", label: "Item", isDisabled: false },
  ],
  size: "compact",
  errorMessage: "This field can not be blank",
  validMessage: "This field is valid",
  fullwidth: false,
};

export default story;
export { SelectInForm };
