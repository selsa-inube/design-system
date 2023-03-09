import React from "react";
import { Spinner, sizes, appearances } from "./../index";

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

export const All = () => (
  <StyledFlex>
    {appearances.map((token) => (
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
