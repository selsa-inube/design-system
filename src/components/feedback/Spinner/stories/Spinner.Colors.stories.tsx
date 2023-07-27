import { ElementType } from "react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";
import { appearances } from "../types/Spinner.Appearance.type";
import { StyledFlex } from "./styles";

import { parameters, size, isTransparent, appearance } from "./props";

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
    size: "medium",
    appearance: "blue",
    isTransparent: false,
  },
  argTypes: {
    size,
    appearance,
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

export default story;
