import { ElementType } from "react";
import { ITabProps } from "..";
import { Tab } from "../index";
import { TabController } from "./TabController";

import { id, isDisabled, isSelected, handleClick, label } from "./props";

const story = {
  title: "navigation/Tab",
  components: [Tab],
  decorators: [
    (Story: ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args: ITabProps) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  isDisabled: false,
  label: "General Information",
  isSelected: { control: null },
};
Default.argTypes = {
  id,
  isDisabled,
  isSelected,
  handleClick,
  label,
};

export default story;
