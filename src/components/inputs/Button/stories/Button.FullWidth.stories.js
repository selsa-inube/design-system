import React from "react";
import { Button } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/FullWidth",
  components: [Button],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const ButtonComponent = (props) => {
  return (
    <StyledFlex>
      <ButtonController {...props} isFullWidth={true} />
    </StyledFlex>
  );
};

export const FullWidth = (args) => <ButtonComponent {...args} />;
FullWidth.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: "+",
  type: "text",
  spacing: "wide",
  variant: "filled",
  handleClick: () => {},
};
FullWidth.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  handleClick,
};

export default story;
