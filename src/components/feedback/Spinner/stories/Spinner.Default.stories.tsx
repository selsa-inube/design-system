import { ElementType } from "react";
import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";

import { parameters, size, appearance, isTransparent } from "./props";

const story = {
  title: "feedback/Spinner/Default",
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
    isTransparent,
  },
};

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

export default story;
