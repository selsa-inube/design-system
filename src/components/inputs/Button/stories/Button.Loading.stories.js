import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Button, variants } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  appearance,
  isdisabled,
  type,
  spacing,
  variant,
  isfullwidth,
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
  isdisabled: false,
  type: "text",
  spacing: "wide",
  variant: "filled",
  isfullwidth: false,
  handleClick: () => console.log("clicked"),
};
Loading.argTypes = {
  appearance,
  isdisabled,
  type,
  spacing,
  variant,
  isfullwidth,
  handleClick,
};

export default story;
