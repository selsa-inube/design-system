import React from "react";
import { Switch } from "../index";

const story = {
  title: "inputs/Switch/Default",
  components: [Switch],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const sizes = ["large", "small"];
const logState = (state) => {
  console.log("Toggled:", state);
};
const DefaultTemplate = ({ ...args }) => <Switch {...args} />;
export const Default = DefaultTemplate.bind({});
//export const Default = (args) => <Switch {...args} />;
Default.args = {
  id: "thisIsAnId",
  value: false,
  size: "small",
  handleChange: logState,
  isDisabled: false,
};
Default.argTypes = {
  id: {
    options: "",
    control: { type: "select" },
    description:
      "this element can have a label on it, so this id allows us to connect the label with the switch",
  },
  isDisabled: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "if the switch is disabled or not. This prevents any interaction.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  name: {
    options: "",
    control: { type: "select" },
    description:
      "descriptive name for value property to be submitted in a form",
  },
  value: {
    options: [true, false],
    control: { type: "boolean" },
    description: "value to be submitted in a form.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  handleChange: {
    options: "",
    control: { type: "func" },
    description:
      "is a function that the component receives and that can be executed every time the switch state is modified",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "toggle size",
    table: {
      defaultValue: { summary: "small" },
    },
  },
};

export default story;
