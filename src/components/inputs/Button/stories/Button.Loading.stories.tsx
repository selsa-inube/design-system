import { BrowserRouter } from "react-router-dom";

import { Button } from "../index";
import { StyledFlex } from "./stories.styles";

import {
  parameters,
  appearance,
  isDisabled,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
} from "./props";
import { IButtonProps } from "../interfaces/Button.interface";
import { variants } from "../types/Button.Variants.type";

const story = {
  title: "inputs/Button/Loading",
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
          <Button {...props} variant={variant} isLoading={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Loading = (args: IButtonProps) => <ButtonComponent {...args} />;
Loading.args = {
  children: "Button",
  appearance: "primary",
  isDisabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
};
Loading.argTypes = {
  appearance,
  isDisabled,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
};

export default story;
