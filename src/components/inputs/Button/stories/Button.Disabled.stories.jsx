import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, appearances } from "../index";
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
  path,
} from "./props";

const story = {
  title: "inputs/Button/Disabled",
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
          <Button {...props} isDisabled={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Disabled = (args) => <ButtonComponent {...args} />;
Disabled.args = {
  children: "Button",
  isLoading: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
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
  path,
};

export default story;
