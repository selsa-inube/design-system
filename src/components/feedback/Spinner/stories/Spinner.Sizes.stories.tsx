import { Spinner, ISpinnerProps } from "..";
import { StyledFlexBetween } from "./styles";

import { props, sizes, parameters } from "../props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
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
