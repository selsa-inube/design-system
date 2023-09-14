import { OptionItem, IOptionItemProps } from "./index";

import { props, parameters } from "./props";

const story = {
  title: "Inputs/OptionItem",
  component: [OptionItem],
  parameters,
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
