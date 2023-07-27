import { ElementType } from "react";
import { Spinner } from "..";
import { sizes } from "../types/Spinner.Size.type";
import { appearances } from "../types/Spinner.Appearance.type";
import { parameters, size, appearance, isTransparent } from "./props";

import { StyledFlex, StyledFlexColumn, StyledGrid } from "./styles";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
  decorators: [
    (Story: ElementType) => (
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

All.args = {
  size: "large",
  appearance: "blue",
  isTransparent: false,
};

All.argTypes = {
  size,
  appearance,
  isTransparent,
};

export default story;
