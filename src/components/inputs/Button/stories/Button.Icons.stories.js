import React from "react";
import { Button } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";
import { MdAdd } from "react-icons/md";

import {
  children,
  isLoading,
  appearance,
  isDisabled,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Icons",
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
  isDisabled: false,
  type: "text",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
};
Icons.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
};

export default story;
