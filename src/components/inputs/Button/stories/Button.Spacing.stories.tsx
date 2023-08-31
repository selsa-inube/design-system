import { MdAdd } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";

import { Button, IButtonProps } from "..";
import { StyledFlex } from "./stories.styles";

import { props, spacings } from "../props";

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
  loading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  variant: "filled",
  fullwidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};

export default story;
