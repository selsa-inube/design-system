import { inube } from "@shared/tokens";

export const types = ["select", "tabs"] as const;
export type Types = typeof types[number];
export type Themed = { theme?: typeof inube };

const parameters = {
  docs: {
    description: {
      component: "Use to alternate among related views within the same context",
    },
  },
};

const props = {
  tabs: {
    control: { type: "func" },
    description:
      "shall be designed to accept an array of objects with a predetermined structure",
    table: {
      defaultValue: { summary: "[{id,label}]" },
    },
  },
  selectedTab: {
    control: { type: "func" },
    description:
      "The state of the tabs-component shall be determined using the id-property to identify the selected tab",
    table: {
      defaultValue: { summary: "idOfOneTab" },
    },
  },
  onSelectTab: {
    options: ["logState"],
    control: { type: "func" },
    description:
      "attribute shall determine the behavior of the click event and should handle the state for the tabs-component",
  },
  type: {
    options: types,
    control: { type: "select" },
    description:
      "shall determine the way the tabs will display in order to avoid horizontal scrolling",
    table: {
      defaultValue: { summary: "tab" },
    },
  },
};

export { props, parameters };
