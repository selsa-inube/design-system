import { OptionList, OptionListProps } from "./index";

import { props, parameters } from "./props";

const story = {
  title: "Inputs/OptionList",
  component: [OptionList],
  parameters,
  argTypes: props,
};

const Default = (args: OptionListProps) => <OptionList {...args} />;
Default.args = {
  options: [
    { id: "1", label: "Item 1", disabled: true, selected: false },
    { id: "2", label: "Item 2", disabled: false, selected: false },
    { id: "3", label: "Item 3", disabled: false, selected: false },
  ],
  isOpenOptions: true,
};

export default story;

export { Default };
