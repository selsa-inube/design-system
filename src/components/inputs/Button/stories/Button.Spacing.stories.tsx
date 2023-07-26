import { MdAdd } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";

import { Button } from "../index";
import { StyledFlex } from "./stories.styles";

import {
  parameters,
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
import { IButtonProps } from "../interfaces/Button.interface";
import { spacings } from "../types/Button.Spacings.type";

const story = {
  title: "inputs/Button",
  components: [Button],
  parameters,
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
      {spacings.map((spacing) => (
        <div key={spacing}>
          <Button {...props} spacing={spacing} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Spacing = (args: IButtonProps) => <ButtonComponent {...args} />;
Spacing.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
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
