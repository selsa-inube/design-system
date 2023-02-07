import React from "react";
import { Spinner } from "./../index";

import { StyledFlex } from "./styles";

const story = {
  title: "feedback/Spinner/Transparency",
  components: [Spinner],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

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
const sizes = ["large", "medium", "small"];

const TransparencyTemplate = ({ ...args }) => (
  <StyledFlex>
    {transparent.map((state) => (
      <div key={state}>
        <Spinner {...args} isTransparent={state} />
      </div>
    ))}
  </StyledFlex>
);
export const Transparency = TransparencyTemplate.bind({});
Transparency.args = {
  size: "medium",
  appearance: "blue",
};
Transparency.argTypes = {
  size: {
    options: sizes,
    control: { type: "select" },
  },
  appearance: {
    options: tokensSpinner,
    control: { type: "select" },
  },
};

export default story;
