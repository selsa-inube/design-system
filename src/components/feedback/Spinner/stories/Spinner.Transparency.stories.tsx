import { ElementType } from "react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";

import { StyledFlex } from "./styles";

import { parameters, size, appearance } from "./props";

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
  argTypes: {
    size,
    appearance,
  },
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
