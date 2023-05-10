import React from "react";
import { Spinner } from "../index";

import { StyledFlex } from "./styles";

import { size, appearance } from "./props";

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

Transparency.argTypes = {
  size,
  appearance,
};

export default story;
