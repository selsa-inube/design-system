import React from "react";
import { Spinner } from "./../index";

import { StyledFlexBetween } from "./styles";

const story = {
  title: "feedback/Spinner/Sizes",
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

const SizesTemplate = ({ ...args }) => (
  <StyledFlexBetween>
    {sizes.map((size) => (
      <div key={size}>
        <Spinner {...args} size={size} />
      </div>
    ))}
  </StyledFlexBetween>
);
export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  appearance: "blue",
  isTransparent: false,
};
Sizes.argTypes = {
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
