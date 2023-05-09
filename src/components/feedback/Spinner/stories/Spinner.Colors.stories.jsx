import React from "react";
import { Spinner, appearances } from "../index";

import { StyledFlex } from "./styles";

import { size, isTransparent } from "./props";

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

const ColorsTemplate = ({ ...args }) => (
  <StyledFlex>
    {appearances.map((token) => (
      <div key={token}>
        <Spinner {...args} appearance={token} />
      </div>
    ))}
  </StyledFlex>
);
export const Colors = ColorsTemplate.bind({});

Colors.argTypes = {
  size,
  isTransparent,
};

export default story;
