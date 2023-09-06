import { Select, ISelectProps } from "..";
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
  disabled: false,
  options: [
    { id: "1", label: "Item 1", disabled: false },
    { id: "2", label: "123", disabled: false },
    { id: "3", label: "Item", disabled: false },
  ],
  required: false,
  size: "wide",
  errorMessage: "This field can not be blank",
  fullwidth: false,
};

export default story;

export { Default };
