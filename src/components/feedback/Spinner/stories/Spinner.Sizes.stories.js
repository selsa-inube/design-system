import React from "react";
import { Spinner, sizes } from "./../index";

import { StyledFlexBetween } from "./styles";

import { appearance, isTransparent } from "./props";

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
  appearance,
  isTransparent,
};

export default story;
