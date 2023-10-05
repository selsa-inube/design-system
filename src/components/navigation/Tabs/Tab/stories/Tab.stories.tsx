import { ThemeProvider } from "styled-components";
import { Tab, ITabProps } from "../index";

import { props } from "../props";

import { presente } from "@shared/themes/presente";
import { TabController } from "./TabController";

const story = {
  title: "navigation/Tab",
  components: [Tab],
  argTypes: props,
};

const Default = (args: ITabProps) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  disabled: false,
  label: "General Information",
};

const theme = structuredClone(presente);

const Themed = (args: ITabProps) => (
  <ThemeProvider theme={theme}>
    <TabController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
