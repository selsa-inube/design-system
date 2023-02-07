import React from "react";
import { Spinner } from "./../index";

import { StyledFlex, StyledFlexColumn, StyledGrid } from "./styles";

const story = {
  title: "feedback/Spinner/All",
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
const tokensSpinner = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
];

export const All = () => (
  <StyledFlex>
    {tokensSpinner.map((token) => (
      <StyledGrid key={token}>
        <StyledFlexColumn>
          {sizes.map((size) => (
            <Spinner
              key={token + size}
              appearance={token}
              size={size}
              isTransparent={false}
            />
          ))}
        </StyledFlexColumn>
        <StyledFlexColumn>
          {sizes.map((size) => (
            <Spinner
              key={size + token}
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
