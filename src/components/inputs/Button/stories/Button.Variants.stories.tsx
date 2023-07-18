import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

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
  spacing,
  isFullWidth,
  handleClick,
  path,
} from "./props";
import { IButtonProps } from "../interfaces/Button.interface";
import { variants } from "../types/Button.Variants.type";

const story = {
  title: "inputs/Button/Variants",
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
      {variants.map((variant) => (
        <div key={variant}>
          <Button {...props} variant={variant} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Variants = (args: IButtonProps) => <ButtonComponent {...args} />;
Variants.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
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
