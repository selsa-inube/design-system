import { Label, ILabelProps } from "..";
import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const IsDisabled = ({ isFocused, htmlFor, invalid, children }: ILabelProps) => {
  return (
    <Label
      isDisabled={true}
      isFocused={isFocused}
      htmlFor={htmlFor}
      invalid={invalid}
    >
      {children}
    </Label>
  );
};
IsDisabled.args = {
  children: "Label Text",
  isFocused: false,
  htmlFor: "id",
  invalid: false,
};

export default story;

export { IsDisabled };
