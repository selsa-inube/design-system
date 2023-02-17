import Label from "..";
import { parameters, isDisabled, htmlFor, state, children } from "./props";

const story = {
  title: "inputs/labels/IsFocused",
  components: [Label],
  parameters,
};

const IsFocused = ({ children, state, htmlFor, isDisabled }) => {
  return (
    <Label
      isDisabled={isDisabled}
      isFocused={true}
      state={state}
      htmlFor={htmlFor}
    >
      {children}
    </Label>
  );
};
IsFocused.args = {
  children: "Label (Help text andres)",
  isDisabled: false,
  htmlFor: "id",
  state: "default",
};

IsFocused.argTypes = {
  isDisabled,
  children,
  htmlFor,
  state,
};

export default story;
export { IsFocused };
