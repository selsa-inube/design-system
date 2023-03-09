import React from "react";
import { Button, variants } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  appearance,
  isDisabled,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Loading",
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
          <ButtonController {...props} variant={variant} isLoading={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Loading = (args) => <ButtonComponent {...args} />;
Loading.args = {
  children: "Button",
  appearance: "primary",
  isDisabled: false,
  type: "text",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
};
Loading.argTypes = {
  appearance,
  isDisabled,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
};

export default story;
