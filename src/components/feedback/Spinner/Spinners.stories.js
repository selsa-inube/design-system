import React from "react";
import { Spinner } from ".";

import styled from "styled-components";

const sizes = ["large", "medium", "small"];
const tokensSpinner = [
  "primary",
  "confirm",
  "warning",
  "remove",
  "help",
  "secondary",
];
const transparent = [false, true];

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  // border: 1px dotted;
`;

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-left: 3rem;
`;

const StyledFlexSizes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 57px;
`;

const StyledFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 148px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  box-sizing: border-box;
  &:last-child {
    background-color: #505f79;
  }
`;

const story = {
  title: "feedback/Spinner",
  components: [Spinner],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
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
  },
  isTransparent: {
    options: transparent,
    control: { type: "boolean" },
  },
};

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
  <StyledFlex>
    {tokensSpinner.map((token) => (
      <StyledGrid>
        <StyledFlexColumn>
          {sizes.map((size) => (
            <Spinner key={size} appearance={token} size={size} />
          ))}
        </StyledFlexColumn>
        <StyledFlexColumn>
          {sizes.map((size) => (
            <Spinner
              key={size}
              appearance={token}
              size={size}
              isTransparent={true}
            />
          ))}
        </StyledFlexColumn>
      </StyledGrid>
    ))}
  </StyledFlex>
);

export default story;
