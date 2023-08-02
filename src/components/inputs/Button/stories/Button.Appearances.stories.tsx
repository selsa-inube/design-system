import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, IButtonProps } from "..";

import { StyledFlex } from "./stories.styles";

import { appearances, props } from "../props";

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
      {appearances.map((appearance) => (
        <div key={appearance}>
          <Button {...props} appearance={appearance} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Appearances = (args: IButtonProps) => (
  <ButtonComponent {...args} />
);
Appearances.args = {
  children: "Button",
  isLoading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};

export default story;
