import { ElementType } from "react";
import { Spinner } from "..";
import { appearances, props, sizes } from "../props";

import { StyledFlex, StyledFlexColumn, StyledGrid } from "./styles";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  argTypes: props,
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

export default story;
