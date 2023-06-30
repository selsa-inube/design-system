import type { Meta } from "@storybook/react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";
import { appearances } from "../types/Spinner.type";
import { StyledFlex } from "./styles";

import { size, isTransparent } from "./props";

const meta: Meta<ISpinnerProps> = {
  title: "feedback/Spinner/Colors",
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
    isTransparent,
  },
};

const ColorsTemplate = (args: ISpinnerProps) => (
  <StyledFlex>
    {appearances.map((token) => (
      <div key={token}>
        <Spinner {...args} appearance={token} />
      </div>
    ))}
  </StyledFlex>
);

export const Colors = ColorsTemplate.bind({});

export default meta;
