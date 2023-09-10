import { DropdownItem, IDropdownItemProps } from "./index";

import { props } from "./props";

const story = {
  title: "Inputs/DropdownItem",
  component: [DropdownItem],
  argTypes: props,
};

const Default = (args: IDropdownItemProps) => <DropdownItem {...args} />;

Default.args = {
  children: "Item 1",
  selected: false,
  disabled: false,
};

export default story;

export { Default };
