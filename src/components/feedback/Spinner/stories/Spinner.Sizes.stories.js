import React from "react";
import { Spinner, sizes, appearances } from "./../index";

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
    options: appearances,
    control: { type: "select" },
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "blue" },
    },
  },
  isTransparent: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "indicates when the background of the spinner should have color",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export default story;
