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
  typo,
  disabled,
}: ILabelProps) => {
  return (
    <Label
      disabled={disabled}
      focused={true}
      invalid={invalid}
      htmlFor={htmlFor}
      typo={typo}
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
  typo: "labelLarge",
};

export default story;
export { Focused };
