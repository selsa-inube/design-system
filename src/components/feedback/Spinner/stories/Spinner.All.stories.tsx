import { Meta } from "@storybook/react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";
import { sizes, appearances } from "../types/Spinner.type";
import { size, appearance, isTransparent } from "./props";

import { StyledFlex, StyledFlexColumn, StyledGrid } from "./styles";

const meta: Meta<ISpinnerProps> = {
  title: "feedback/Spinner/All",
  component: Spinner,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size,
    appearance,
    isTransparent,
  },
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

export default meta;
