import { ElementType } from "react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";

import { StyledFlex } from "./styles";

import { props } from "../props";

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
