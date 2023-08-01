import { ElementType } from "react";

import { Spinner, ISpinnerProps } from "..";
import { sizes } from "../types/Spinner.Size.type";
import { StyledFlexBetween } from "./styles";

import { parameters, appearance, isTransparent } from "./props";

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
  args: {
    appearance: "blue",
    isTransparent: false,
  },
  argTypes: {
    appearance,
    isTransparent,
  },
};

const SizesTemplate = (args: ISpinnerProps) => (
  <StyledFlexBetween>
    {sizes.map((size) => (
      <div key={size}>
        <Spinner {...args} size={size} />
      </div>
    ))}
  </StyledFlexBetween>
);
export const Sizes = SizesTemplate.bind({});

export default story;
