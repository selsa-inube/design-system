import { Label } from "../";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  state,
  typo,
  children,
} from "./props";

const story = {
  title: "inputs/Label/Default",
  components: [Label],
  parameters,
};

const Default = ({ isDisabled, isFocused, htmlFor, state, typo, children }) => {
  return (
    <Label
      isDisabled={isDisabled}
      isFocused={isFocused}
      htmlFor={htmlFor}
      state={state}
      typo={typo}
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
  typo,
  children,
};

export default story;

export { Default };
