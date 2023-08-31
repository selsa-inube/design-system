import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, IButtonProps } from "..";

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

export const Default = (args: IButtonProps) => <Button {...args} />;

Default.args = {
  children: "Button",
  appearance: "primary",
  path: "/privilege",
  iconBefore: <MdAdd />,
  loading: false,
  isDisabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  fullwidth: false,
  handleClick: () => console.log("clicked from Default-story"),
};

export default story;
