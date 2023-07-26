import { BrowserRouter } from "react-router-dom";
import { Button } from "../index";
import { MdAdd } from "react-icons/md";

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
  variant,
  handleClick,
  path,
} from "./props";
import { IButtonProps } from "../interfaces/Button.interface";

const story = {
  title: "inputs/Button",
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
      <Button {...props} isFullWidth={true} />
    </StyledFlex>
  );
};

export const FullWidth = (args: IButtonProps) => <ButtonComponent {...args} />;
FullWidth.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  isDisabled: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};
FullWidth.argTypes = {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  handleClick,
  path,
};

export default story;
