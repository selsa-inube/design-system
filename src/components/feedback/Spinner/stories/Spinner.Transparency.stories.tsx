import { Meta } from "@storybook/react";
import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";

import { StyledFlex } from "./styles";

import { size, appearance } from "./props";

const meta: Meta<ISpinnerProps> = {
  title: "feedback/Spinner/Transparency",
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

export default meta;
