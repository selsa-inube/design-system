import { Select, ISelectProps } from "..";
import { InForm } from "./Select.form.Controller";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
} from "./props";

const story = {
  title: "Inputs/Select",
  component: [Select],
  parameters,
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
};

SelectInForm.argTypes = {
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
};

export default story;
export { SelectInForm };
