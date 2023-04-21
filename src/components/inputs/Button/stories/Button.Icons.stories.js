import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";

import {
  children,
  isLoading,
  appearance,
  isdisabled,
  type,
  spacing,
  variant,
  isfullwidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Icons",
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
      {[0, 1, 2].map((item) => (
        <div key={item}>
          <ButtonController
            {...props}
            iconBefore={item === 0 ? <MdAdd /> : null}
            iconAfter={item === 1 ? <MdAdd /> : null}
          />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Icons = (args) => <ButtonComponent {...args} />;
Icons.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isdisabled: false,
  type: "text",
  spacing: "wide",
  variant: "filled",
  isfullwidth: false,
  handleClick: () => console.log("clicked"),
};
Icons.argTypes = {
  children,
  isLoading,
  appearance,
  isdisabled,
  type,
  spacing,
  variant,
  isfullwidth,
  handleClick,
};

export default story;
