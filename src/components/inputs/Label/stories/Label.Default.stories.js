import { Label } from "../";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  state,
  children,
} from "./props";

const story = {
  title: "inputs/labels/Default",
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
  children: "Label Text",
  htmlFor: "LabelText",
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
