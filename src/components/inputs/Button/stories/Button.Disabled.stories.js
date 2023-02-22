import React from "react";
import { Button, appearances } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  appearance,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Disabled",
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
      {appearances.map((appearance) => (
        <div key={appearance}>
          <ButtonController {...props} isDisabled={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Disabled = (args) => <ButtonComponent {...args} />;
Disabled.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  iconBefore: "+",
  // iconAfter: "+",
  type: "text",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
};
Disabled.argTypes = {
  children,
  isLoading,
  appearance,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
};

export default story;
