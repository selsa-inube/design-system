import Label from "../index";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  state,
  children,
} from "./props";

const story = {
  title: "inputs/Default",
  components: [Label],
  parameters,
};

const Default = ({ isDisabled, isFocused, htmlFor, state, children }) => {
  return (
    <Label
      isDisabled={isDisabled}
      isFocused={isFocused}
      htmlFor={htmlFor}
      state={state}
    >
      {children}
    </Label>
  );
};
Default.args = {
  isDisabled: false,
  isFocused: false,
  children: "Label (Help text)",
  htmlFor: "id",
  state: "default",
};
Default.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  state,
  children,
};

export default story;

export { Default };
