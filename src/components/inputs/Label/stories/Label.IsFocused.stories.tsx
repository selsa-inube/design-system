import { Label, ILabelProps } from "..";
import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const IsFocused = ({
  children,
  invalid,
  htmlFor,
  typo,
  isDisabled,
}: ILabelProps) => {
  return (
    <Label
      isDisabled={isDisabled}
      isFocused={true}
      invalid={invalid}
      htmlFor={htmlFor}
      typo={typo}
    >
      {children}
    </Label>
  );
};
IsFocused.args = {
  children: "Label Text",
  isDisabled: false,
  htmlFor: "id",
  isInvalid: false,
  typo: "labelLarge",
};

export default story;
export { IsFocused };
