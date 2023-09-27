import { props, parameters } from "./props";
import { OptionList, OptionListProps } from "./index";
import { OptionItem } from "../OptionItem";

const story = {
  title: "Inputs/OptionList",
  component: [OptionList],
  parameters,
  argTypes: props,
};

const options = [
  { id: "1", label: "Item 1" },
  { id: "2", label: "Item 2" },
  { id: "3", label: "Item 3" },
];

const Default = (args: OptionListProps) => (
  <OptionList>
    {options.map((optionItem) => (
      <OptionItem key={optionItem.id} id={optionItem.id}>
        {optionItem.label}
      </OptionItem>
    ))}
  </OptionList>
);
Default.args = {};

export default story;

export { Default };
