import React from "react";
import { Button, appearances } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  isDisabled,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Appearances",
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
          <ButtonController {...props} appearance={appearance} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Appearances = (args) => <ButtonComponent {...args} />;
Appearances.args = {
  children: "Button",
  isLoading: false,
  isDisabled: false,
  iconBefore: "+",
  // iconAfter: "+",
  type: "text",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
};
Appearances.argTypes = {
  children,
  isLoading,
  isDisabled,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
};

export default story;
