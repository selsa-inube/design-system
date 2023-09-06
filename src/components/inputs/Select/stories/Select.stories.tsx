import { Select, ISelectProps } from "..";
import { SelectController } from "./SelectController";
import { props, parameters } from "../props";

const story = {
  title: "Inputs/Select",
  component: [Select],
  parameters,
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
  required: false,
  size: "wide",
  errorMessage: "This field can not be blank",
  fullwidth: false,
};

export default story;

export { Default };
