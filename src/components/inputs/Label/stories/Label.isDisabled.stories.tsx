import { Label, ILabelProps } from "..";
import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const IsDisabled = ({ focused, htmlFor, isInvalid, children }: ILabelProps) => {
  return (
    <Label
      isDisabled={true}
      focused={focused}
      htmlFor={htmlFor}
      isInvalid={isInvalid}
    >
      {children}
    </Label>
  );
};
IsDisabled.args = {
  children: "Label Text",
  isFocused: false,
  htmlFor: "id",
  isInvalid: false,
};

export default story;

export { IsDisabled };
