import { Label, ILabelProps } from "..";
import { props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const IsDisabled = ({
  isFocused,
  htmlFor,
  isInvalid,
  children,
}: ILabelProps) => {
  return (
    <Label
      disabled={true}
      isFocused={isFocused}
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
