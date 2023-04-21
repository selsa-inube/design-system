import React from "react";
import { MdAdd } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";

import { Button, spacings } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  appearance,
  isdisabled,
  iconBefore,
  iconAfter,
  type,
  variant,
  isfullwidth,
  handleClick,
  path,
} from "./props";

const story = {
  title: "inputs/Button/Spacing",
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
      {spacings.map((spacing) => (
        <div key={spacing}>
          <ButtonController {...props} spacing={spacing} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Spacing = (args) => <ButtonComponent {...args} />;
Spacing.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isdisabled: false,
  iconBefore: <MdAdd />,
  type: "text",
  variant: "filled",
  isfullwidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};
Spacing.argTypes = {
  children,
  isLoading,
  appearance,
  isdisabled,
  iconBefore,
  iconAfter,
  type,
  variant,
  isfullwidth,
  handleClick,
  path,
};

export default story;
