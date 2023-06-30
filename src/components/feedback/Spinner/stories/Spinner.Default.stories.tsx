import { Meta } from "@storybook/react";

import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";

import { size, appearance, isTransparent } from "./props";

const meta: Meta<ISpinnerProps> = {
  title: "feedback/Spinner/Default",
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

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

export default meta;
