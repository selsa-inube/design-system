import React from "react";
import { Button, appearances } from "../index";
import { ButtonController } from "./ButtonController";
import { StyledFlex } from "./stories.styles";
import { MdAdd } from "react-icons/md";

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
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const ButtonComponent = (props) => {
  return (
    <StyledFlex>
      {appearances.map((appearance) => (
        <div key={appearance}>
          <ButtonController {...props} isDisabled={true} />
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
  type: "text",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => {},
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
