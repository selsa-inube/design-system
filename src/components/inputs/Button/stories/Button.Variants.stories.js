import React from "react";
import { Button, variants } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";
import { MdAdd } from "react-icons/md";

import {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  isFullWidth,
  handleClick,
  path,
} from "./props";

const story = {
  title: "inputs/Button/Variants",
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
      {variants.map((variant) => (
        <div key={variant}>
          <ButtonController {...props} variant={variant} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Variants = (args) => <ButtonComponent {...args} />;
Variants.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "text",
  spacing: "wide",
  isFullWidth: false,
  handleClick: () => {},
  path: "/privileges",
};
Variants.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  isFullWidth,
  handleClick,
  path,
};

export default story;
