import { OptionItem, IOptionItemProps } from "./index";

import { props } from "./props";

const story = {
  title: "Inputs/Select/OptionItem",
  component: [OptionItem],
  argTypes: props,
};

const Default = (args: IOptionItemProps) => <OptionItem {...args} />;

Default.args = {
  children: "Item 1",
  selectedId: undefined,
  disabled: false,
};

export default story;

export { Default };
