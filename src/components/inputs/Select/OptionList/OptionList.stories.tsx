import { props, parameters } from "./props";
import { OptionList, OptionListProps } from "./index";

const story = {
  title: "Inputs/OptionList",
  component: [OptionList],
  parameters,
  argTypes: props,
};

const Default = (args: OptionListProps) => <OptionList {...args} />;
Default.args = {
  options: [
    { id: "1", label: "Item 1" },
    { id: "2", label: "Item 2" },
    { id: "3", label: "Item 3" },
  ],
  isOpenOptions: true,
};

export default story;

export { Default };
