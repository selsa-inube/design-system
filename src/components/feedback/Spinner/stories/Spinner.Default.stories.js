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
  },
  appearance: {
    options: tokensSpinner,
    control: { type: "select" },
  },
  isTransparent: {
    options: transparent,
    control: { type: "boolean" },
  },
};

export default story;
