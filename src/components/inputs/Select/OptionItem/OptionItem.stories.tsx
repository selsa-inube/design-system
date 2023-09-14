import { OptionItem, IOptionItemProps } from "./index";

import { props } from "./props";

const story = {
  title: "Inputs/OptionItem",
  component: [OptionItem],
  argTypes: props,
};

const Default = (args: IOptionItemProps) => <OptionItem {...args} />;

Default.args = {
  children: "Item 1",
  selected: false,
  disabled: false,
};

export default story;

export { Default };