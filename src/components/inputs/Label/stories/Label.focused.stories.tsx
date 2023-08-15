import { Label, ILabelProps } from "..";
import { props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const Focused = ({
  children,
  invalid,
  htmlFor,
  size,
  disabled,
}: ILabelProps) => {
  return (
    <Label
      disabled={disabled}
      focused={true}
      invalid={invalid}
      htmlFor={htmlFor}
      size={size}
    >
      {children}
    </Label>
  );
};
Focused.args = {
  children: "Label Text",
  disabled: false,
  htmlFor: "id",
  invalid: false,
  size: "large",
};

export default story;
export { Focused };
