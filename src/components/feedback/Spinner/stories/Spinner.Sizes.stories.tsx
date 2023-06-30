import { ElementType } from "react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";
import { sizes } from "../types/Spinner.type";
import { StyledFlexBetween } from "./styles";

import { size, appearance, isTransparent } from "./props";

const story = {
  title: "feedback/Spinner/Sizes",
  component: Spinner,
  decorators: [
    (Story: ElementType) => (
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
