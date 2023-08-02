import { Spinner, ISpinnerProps } from "..";

import { StyledFlex } from "./styles";

import { props } from "../props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  args: {
    size: "medium",
    appearance: "blue",
    isTransparent: false,
  },
  argTypes: props,
};

const TransparencyTemplate = (args: ISpinnerProps) => (
  <StyledFlex>
    {[true, false].map((state) => (
      <div key={state.toString()}>
        <Spinner {...args} isTransparent={state} />
      </div>
    ))}
  </StyledFlex>
);
export const Transparency = TransparencyTemplate.bind({});

export default story;
