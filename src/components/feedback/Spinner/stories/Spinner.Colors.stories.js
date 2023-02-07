import React from "react";
import { Spinner } from "./../index";

import { StyledFlex } from "./styles";

const story = {
  title: "feedback/Spinner/Colors",
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
const transparent = [false, true];
const tokensSpinner = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
];
const ColorsTemplate = ({ ...args }) => (
  <StyledFlex>
    {tokensSpinner.map((token) => (
      <div key={token}>
        <Spinner {...args} appearance={token} />
      </div>
    ))}
  </StyledFlex>
);
export const Colors = ColorsTemplate.bind({});
Colors.args = {
  size: "medium",
  isTransparent: false,
};
Colors.argTypes = {
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "different sizes that the component can have, according to the need",
    table: {
      defaultValue: { summary: "medium" },
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
