import { ElementType } from "react";
import { Tab, ITabProps } from "../index";
import { TabController } from "./TabController";

import { props } from "../props";

const story = {
  title: "navigation/Tab",
  components: [Tab],
  argTypes: props,
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

export default story;
