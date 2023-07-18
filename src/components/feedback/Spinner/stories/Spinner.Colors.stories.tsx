import { ElementType } from "react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";
import { appearances } from "../types/Spinner.Appearance.type";
import { StyledFlex } from "./styles";

import { parameters, size, isTransparent } from "./props";

const story = {
  title: "feedback/Spinner/Colors",
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
