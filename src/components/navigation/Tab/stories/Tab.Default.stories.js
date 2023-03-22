import React from "react";
import { Tab } from "../index";
import { TabController } from "./TabController";

import { id, isDisabled, isSelected, handleClick, children } from "./props";

const story = {
  title: "navigation/Tab/Default",
  components: [Tab],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  isDisabled: false,
  isSelected: false,
  children: "General Information",
  handleClick: () => {},
};
Default.argTypes = {
  id,
  isDisabled,
  isSelected,
  handleClick,
  children,
};

export default story;
