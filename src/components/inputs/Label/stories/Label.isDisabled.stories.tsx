import { Label, ILabelProps } from "..";
import { props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const disabled = ({ focused, htmlFor, invalid, children }: ILabelProps) => {
  return (
    <Label
      disabled={true}
      focused={focused}
      htmlFor={htmlFor}
      invalid={invalid}
    >
      {children}
    </Label>
  );
};
disabled.args = {
  children: "Label Text",
  focused: false,
  htmlFor: "id",
  invalid: false,
};

export default story;

export { disabled };
