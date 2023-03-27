import { Label } from "../";
import {
  parameters,
  isDisabled,
  htmlFor,
  state,
  typo,
  children,
} from "./props";

const story = {
  title: "inputs/Label/IsFocused",
  components: [Label],
  parameters,
};

const IsFocused = ({ children, state, htmlFor, typo, isDisabled }) => {
  return (
    <Label
      isDisabled={isDisabled}
      isFocused={true}
      state={state}
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
  state: "default",
  typo: "labelLarge",
};

IsFocused.argTypes = {
  isDisabled,
  children,
  htmlFor,
  state,
  typo,
};

export default story;
export { IsFocused };
