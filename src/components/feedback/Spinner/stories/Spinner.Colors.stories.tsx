import { Spinner, ISpinnerProps } from "..";
import { StyledFlex } from "./styles";

import { appearances, props } from "../props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  argTypes: props,
  args: {
    size: "medium",
    appearance: "blue",
    isTransparent: false,
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
