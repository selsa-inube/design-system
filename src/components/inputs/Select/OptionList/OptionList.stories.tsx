import { props, parameters } from "./props";
import { OptionList, OptionListProps } from "./index";
import { OptionItem } from "../OptionItem";
import { action } from "@storybook/addon-actions";

const story = {
  title: "Inputs/Select/OptionList",
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
  <OptionList onClick={action("onClick")}>
    {options.map((optionItem) => (
      <OptionItem
        key={optionItem.id}
        id={optionItem.id}
        label={optionItem.label}
      />
    ))}
  </OptionList>
);

export default story;

export { Default };
