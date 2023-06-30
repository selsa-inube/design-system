import { Meta } from "@storybook/react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/interface.Spinner";
import { sizes } from "../types/type.Spinner";
import { StyledFlexBetween } from "./styles";

import { size, appearance, isTransparent } from "./props";

const meta: Meta<ISpinnerProps> = {
  title: "feedback/Spinner/Sizes",
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

export default meta;
