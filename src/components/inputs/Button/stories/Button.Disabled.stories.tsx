import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, IButtonProps } from "..";
import { StyledFlex } from "./stories.styles";

import {
  parameters,
  children,
  isLoading,
  appearance,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
  path,
} from "./props";
import { appearances } from "../types/Button.Appearances.type";

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
      {appearances.map((appearance) => (
        <div key={appearance}>
          <Button {...props} isDisabled={true} />
        </div>
      ))}
    </StyledFlex>
  );
};

export const Disabled = (args: IButtonProps) => <ButtonComponent {...args} />;
Disabled.args = {
  children: "Button",
  appearance: "primary",
  isLoading: false,
  iconBefore: <MdAdd />,
  type: "button",
  spacing: "wide",
  variant: "filled",
  isFullWidth: false,
  handleClick: () => console.log("clicked"),
  path: "/privileges",
};
Disabled.argTypes = {
  children,
  isLoading,
  appearance,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
  path,
};

export default story;
