import { types } from "../types/Tabs.type";

const tabs = {
  control: { type: "func" },
  description:
    "shall be designed to accept an array of objects with a predetermined structure",
  table: {
    defaultValue: { summary: "[{id,label}]" },
  },
};

const selectedTab = {
  control: { type: "func" },
  description:
    "The state of the tabs-component shall be determined using the id-property to identify the selected tab",
  table: {
    defaultValue: { summary: "idOfOneTab" },
  },
};
const handleSelectedTab = {
  options: ["logState"],
  control: { type: "func" },
  description:
    "attribute shall determine the behavior of the click event and should handle the state for the tabs-component",
};

const type = {
  options: types,
  control: { type: "select" },
  description:
    "shall determine the way the tabs will display in order to avoid horizontal scrolling",
  table: {
    defaultValue: { summary: "tab" },
  },
};

export { tabs, selectedTab, handleSelectedTab, type };
