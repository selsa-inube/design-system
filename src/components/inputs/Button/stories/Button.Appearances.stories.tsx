import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "../index";
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
  path,
} from "./props";
import { IButtonProps } from "../interfaces/Button.interface";
import { appearances } from "../types/Button.Appearances.type";

const story = {
  title: "inputs/Button/Appearances",
  components: [Button],
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const ButtonComponent = (props: IButtonProps) => {
  return (
    <StyledFlex>
      {appearances.map((appearance) => (
        <div key={appearance}>
          <Button {...props} appearance={appearance} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Appearances = (args: IButtonProps) => (
  <ButtonComponent {...args} />
);
Appearances.args = {
  children: "Button",
  isLoading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
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
  path,
};

export default story;
