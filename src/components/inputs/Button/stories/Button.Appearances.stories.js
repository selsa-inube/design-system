import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, appearances } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  isdisabled,
  iconAfter,
  type,
  spacing,
  variant,
  isfullwidth,
  handleClick,
  path,
} from "./props";

const story = {
  title: "inputs/Button/Appearances",
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
  isdisabled: false,
  iconBefore: <MdAdd />,
  type: "text",
  spacing: "wide",
  variant: "filled",
  isfullwidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};
Appearances.argTypes = {
  children,
  isLoading,
  isdisabled,
  iconAfter,
  type,
  spacing,
  variant,
  isfullwidth,
  handleClick,
  path,
};

export default story;
