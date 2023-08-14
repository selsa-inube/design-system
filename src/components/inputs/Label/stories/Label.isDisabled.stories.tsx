import { Label, ILabelProps } from "..";
import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const IsDisabled = ({ focused, htmlFor, invalid, children }: ILabelProps) => {
  return (
    <Label
      isDisabled={true}
      focused={focused}
      htmlFor={htmlFor}
      invalid={invalid}
    >
      {children}
    </Label>
  );
};
IsDisabled.args = {
  children: "Label Text",
  focused: false,
  htmlFor: "id",
  invalid: false,
};

export default story;

export { IsDisabled };
