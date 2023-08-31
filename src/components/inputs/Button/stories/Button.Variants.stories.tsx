import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

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
        <Story />
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
  loading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  fullwidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};

export default story;
