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
      {[0, 1, 2].map((item) => (
        <div key={item}>
          <Button
            {...props}
            iconBefore={item === 0 ? <MdAdd /> : undefined}
            iconAfter={item === 1 ? <MdAdd /> : undefined}
          />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Icons = (args: IButtonProps) => <ButtonComponent {...args} />;
Icons.args = {
  children: "Button",
  appearance: "primary",
  loading: false,
  disabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  fullwidth: false,
  handleClick: () => console.log("clicked"),
};

export default story;
