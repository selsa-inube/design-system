import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "../index";
import { MdAdd } from "react-icons/md";

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
  spacing,
  variant,
  handleClick,
  path,
} from "./props";

const story = {
  title: "inputs/Button/FullWidth",
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
      <ButtonController {...props} isfullwidth={true} />
    </StyledFlex>
  );
};

export const FullWidth = (args) => <ButtonComponent {...args} />;
FullWidth.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isdisabled: false,
  iconBefore: <MdAdd />,
  type: "text",
  spacing: "wide",
  variant: "filled",
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};
FullWidth.argTypes = {
  children,
  isLoading,
  appearance,
  isdisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  handleClick,
  path,
};

export default story;
