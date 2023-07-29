import { Select } from "../index";

import { ISelectProps } from "../interfaces/Select.interface";
import { SelectController } from "./SelectController";
import { props } from "../props";

const story = {
  title: "Inputs/Select",
  component: [Select],
  argTypes: props,
};

const Default = (args: ISelectProps) => <SelectController {...args} />;

Default.args = {
  label: "Label",
  name: "name",
  id: "id",
  placeholder: "Placeholder",
  value: "Item 2",
  isDisabled: false,
  options: [
    { id: "1", label: "Item 1", isDisabled: false },
    { id: "2", label: "123", isDisabled: false },
    { id: "3", label: "Item", isDisabled: false },
  ],
  isRequired: false,
  size: "wide",
  errorMessage: "This field can not be blank",
  isFullWidth: false,
};

export default story;

export { Default };
