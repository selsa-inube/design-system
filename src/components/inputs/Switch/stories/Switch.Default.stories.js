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
const tokensSpinner = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
];
const transparent = [false, true];
const logState = (state) => {
  console.log("Toggled:", state);
};
export const Default = (args) => <Switch {...args} />;
Default.args = {
  value: true,
  size: "small",
  handleChange: logState,
};
// Default.argTypes = {
//   size: {
//     options: sizes,
//     control: { type: "select" },
//     description:
//       "different sizes that the component can have, according to the need",
//     table: {
//       defaultValue: { summary: "medium" },
//     },
//   },
//   appearance: {
//     options: tokensSpinner,
//     control: { type: "select" },
//     description: "colors used to identify the state of the component",
//     table: {
//       defaultValue: { summary: "blue" },
//     },
//   },
//   isTransparent: {
//     options: transparent,
//     control: { type: "boolean" },
//     description:
//       "indicates when the background of the spinner should have color",
//     table: {
//       defaultValue: { summary: false },
//     },
//   },
// };

export default story;
