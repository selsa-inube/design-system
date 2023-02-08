import React from "react";
import { Spinner, sizes, appearances } from "./../index";

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

const TransparencyTemplate = ({ ...args }) => (
  <StyledFlex>
    {[true, false].map((state) => (
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
    description:
      "different sizes that the component can have, according to the need",
    table: {
      defaultValue: { summary: "medium" },
    },
  },
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "blue" },
    },
  },
};

export default story;
