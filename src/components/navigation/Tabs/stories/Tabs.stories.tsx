import { Tabs, ITabsProps } from "..";
import { TabsController } from "./TabsController";
import { ThemeProvider } from "styled-components";
import { props, parameters } from "../props";
import { presente } from "@src/shared/themes/presente";

const story = {
  title: "navigation/Tabs",
  components: [Tabs],
  parameters,
  argTypes: props,
};

const Default = (args: ITabsProps) => <TabsController {...args} />;
Default.args = {
  tabs: [
    {
      id: "generalInformation",
      disabled: false,
      label: "General Information",
    },
    { id: "branches", disabled: false, label: "Branches" },
    { id: "projects", disabled: false, label: "Projects" },
    { id: "events", disabled: true, label: "Events" },
    { id: "aidBudget", disabled: false, label: "Aid budget units" },
    { id: "payroll", disabled: false, label: "Payroll" },
  ],
  selectedTab: "generalInformation",
  type: "tabs",
};

const theme = structuredClone(presente);

const Themed = (args: ITabsProps) => (
  <ThemeProvider theme={theme}>
    <TabsController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};
export default story;
export { Default, Themed };
