import React from "react";
import { Spinner } from "./../index";

const story = {
  title: "feedback/Spinner/Default",
  components: [Spinner],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const sizes = ["large", "medium", "small"];
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

export const Default = (args) => <Spinner {...args} />;
Default.args = {
  size: "medium",
  appearance: "blue",
  isTransparent: false,
};
Default.argTypes = {
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "different sizes that the component can have, according to the need",
    table: {
      defaultValue: { summary: "medium" },
    },
  },
  appearance: {
    options: tokensSpinner,
    control: { type: "select" },
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "blue" },
    },
  },
  isTransparent: {
    options: transparent,
    control: { type: "boolean" },
    description:
      "indicates when the background of the spinner should have color",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export default story;
