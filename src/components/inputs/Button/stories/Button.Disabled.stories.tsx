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
        <Story />
      </BrowserRouter>
    ),
  ],
};

const ButtonComponent = (props: IButtonProps) => {
  return (
    <StyledFlex>
      {appearances.map((appearance) => (
        <div key={appearance}>
          <Button {...props} disabled={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Disabled = (args: IButtonProps) => <ButtonComponent {...args} />;
Disabled.args = {
  children: "Button",
  appearance: "primary",
  loading: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  fullwidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};

export default story;
