import { BrowserRouter } from "react-router-dom";

import { Button, IButtonProps } from "..";
import { StyledFlex } from "./stories.styles";

import { props, variants } from "../props";

const story = {
  title: "inputs/Button",
  components: [Button],
  argTypes: props,
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

export default story;
