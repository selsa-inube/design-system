import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Button, variants } from "../index";
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
      <BrowserRouter>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const ButtonComponent = (props) => {
  return (
    <StyledFlex>
      {variants.map((variant) => (
        <div key={variant}>
          <Button {...props} variant={variant} isLoading={true} />
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
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
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
