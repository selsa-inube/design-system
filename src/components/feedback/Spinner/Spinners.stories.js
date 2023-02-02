import React, { useState } from "react";
import { Spinner } from ".";

import styled from "styled-components";

const sizes = ["large", "medium", "small"];
const tokensSpinner = [
  "primary",
  "secondary",
  "confirm",
  "warning",
  "remove",
  "help",
];
const transparent = [true, false];

const StyledFlexDirection = styled.div`
  display: flex;
  justify-content: space-evenly;
  // border: 1px dotted;
`;

const StyledFlexSizes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 57px;
`;

const StyledFlexSizesAsRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 148px;
`;

const story = {
  title: "feedback/Spinner",
  components: [Spinner],
};

export const Default = (args) => <Spinner {...args} />;
Default.args = {
  size: "medium",
  appearance: "primary",
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

const SizesTemplate = ({ ...args }) => (
  <StyledFlexSizesAsRow>
    {sizes.map((size) => (
      <div key={size}>
        <Spinner {...args} size={size} />
      </div>
    ))}
  </StyledFlexSizesAsRow>
);
export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  appearance: "primary",
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

const ColorsTemplate = ({ ...args }) => (
  <StyledFlexDirection>
    {tokensSpinner.map((token) => (
      <div key={token}>
        <Spinner {...args} appearance={token} />
      </div>
    ))}
  </StyledFlexDirection>
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
  },
  isTransparent: {
    options: transparent,
    control: { type: "boolean" },
  },
};

const TransparencyTemplate = ({ ...args }) => (
  <StyledFlexDirection>
    {tokensSpinner.map((token) => (
      <div key={token}>
        <Spinner {...args} />
      </div>
    ))}
  </StyledFlexDirection>
);
export const Transparency = TransparencyTemplate.bind({});
Transparency.args = {
  size: "medium",
  appearance: "primary",
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

export const All = () => (
  <StyledFlexDirection>
    {tokensSpinner.map((token) => (
      <div key={token}>
        {sizes.map((size) => (
          <StyledFlexSizes key={size}>
            <Spinner appearance={token} size={size} />
          </StyledFlexSizes>
        ))}
      </div>
    ))}
  </StyledFlexDirection>
);

export default story;
