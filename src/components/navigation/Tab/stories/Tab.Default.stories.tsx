import { ElementType } from "react";
import { TabProps } from "../interfaces/interface.Tab";
import { Tab } from "../index";
import { TabController } from "./TabController";

import { id, isDisabled, isSelected, handleClick, label } from "./props";

const story = {
  title: "navigation/Tab/Default",
  components: [Tab],
  decorators: [
    (Story: ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args: TabProps) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  isDisabled: false,
  label: "General Information",
};
Default.argTypes = {
  id,
  isDisabled,
  isSelected,
  handleClick,
  label,
};

export default story;
