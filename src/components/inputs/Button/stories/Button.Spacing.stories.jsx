import React from "react";
import { MdAdd } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";

import { Button, spacings } from "../index";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  variant,
  isFullWidth,
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
          <Button {...props} spacing={spacing} />
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
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "text",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};
Spacing.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  variant,
  isFullWidth,
  handleClick,
  path,
};

export default story;
