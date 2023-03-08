import React from "react";
import { Button, spacings } from "../index";
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
  variant,
  isFullWidth,
  handleClick,
} from "./props";

const story = {
  title: "inputs/Button/Spacing",
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
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "text",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
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
};

export default story;
