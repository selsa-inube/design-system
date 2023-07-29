import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "..";
import { StyledFlex } from "./stories.styles";

import { props } from "../props";
import { IButtonProps } from "../interfaces/Button.interface";

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
  isLoading: false,
  isDisabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
};

export default story;
