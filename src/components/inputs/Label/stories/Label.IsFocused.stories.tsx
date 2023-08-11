import { Label, ILabelProps } from "..";
import { props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const IsFocused = ({
  children,
  isInvalid,
  htmlFor,
  typo,
  disabled,
}: ILabelProps) => {
  return (
    <Label
      disabled={disabled}
      isFocused={true}
      isInvalid={isInvalid}
      htmlFor={htmlFor}
      typo={typo}
    >
      {children}
    </Label>
  );
};
IsFocused.args = {
  children: "Label Text",
  disabled: false,
  htmlFor: "id",
  isInvalid: false,
  typo: "labelLarge",
};

export default story;
export { IsFocused };
