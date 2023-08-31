import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, IButtonProps } from "..";
import { StyledFlex } from "./stories.styles";

import { props } from "../props";

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
      <Button {...props} isFullWidth={true} />
    </StyledFlex>
  );
};

export const FullWidth = (args: IButtonProps) => <ButtonComponent {...args} />;
FullWidth.args = {
  children: "Button",
  appearance: "primary",
  loading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};

export default story;
