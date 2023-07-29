import { ElementType } from "react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";
import { StyledFlexBetween } from "./styles";

import { props, sizes } from "../props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
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
  argTypes: props,
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
