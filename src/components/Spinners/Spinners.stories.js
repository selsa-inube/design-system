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
  title: "Spinners",
  components: [Spinner],
};

export const Default = (args) => <Spinner {...args} />;
Default.args = {
  size: "medium",
  colorToken: "primary",
  // thickness: "3",
  // classes: {
  //   animation: "rotate 1.4s linear infinite",
  // },
};

export const Sizes = () => (
  <StyledFlexSizesAsRow>
    {sizes.map((size) => (
      <div key={size}>
        <Spinner colorToken="primary" size={size} />
      </div>
    ))}
  </StyledFlexSizesAsRow>
);

export const Colors = () => (
  <StyledFlexDirection>
    {tokensSpinner.map((token) => (
      <div key={token}>
        <Spinner colorToken={token} size="medium" />
      </div>
    ))}
  </StyledFlexDirection>
);

export const All = () => (
  <StyledFlexDirection>
    {tokensSpinner.map((token) => (
      <div key={token}>
        {sizes.map((size) => (
          <StyledFlexSizes key={size}>
            <Spinner colorToken={token} size={size} />
          </StyledFlexSizes>
        ))}
      </div>
    ))}
  </StyledFlexDirection>
);

export default story;
