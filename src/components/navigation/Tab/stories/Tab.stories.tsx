import { Tab, ITabProps } from "../index";
import { TabController } from "./TabController";

import { props } from "../props";

const story = {
  title: "navigation/Tab",
  components: [Tab],
  argTypes: props,
};

export const Default = (args: ITabProps) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  disabled: false,
  label: "General Information",
  selected: { control: null },
};

export default story;
