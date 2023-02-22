import React from "react";
import { Button, variants } from "../index";
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
  isFullWidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Variants",
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
      {variants.map((variant) => (
        <div key={variant}>
          <ButtonController {...props} variant={variant} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Variants = (args) => <ButtonComponent {...args} />;
Variants.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: "+",
  // iconAfter: "+",
  type: "text",
  spacing: "wide",
  isFullWidth: false,
  handleClick: () => {},
};
Variants.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  isFullWidth,
  handleClick,
};

export default story;
