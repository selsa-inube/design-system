import Label, { states } from "../index";
import { StyledContentStates } from "./stories.styles";

import { parameters, isDisabled, isFocused, htmlFor, children } from "./props";

const story = {
  title: "inputs/States",
  components: [Label],
  parameters,
};

const States = ({ isDisabled, isFocused, children, htmlFor }) => {
  return (
    <StyledContentStates>
      {states.map((state, index) => (
        <Label
          isDisabled={isDisabled}
          isFocused={isFocused}
          state={state}
          htmlFor={htmlFor}
          key={index}
        >
          {children}
        </Label>
      ))}
    </StyledContentStates>
  );
};

States.args = {
  isDisabled: false,
  isFocused: false,
  htmlFor: "id",
  children: "Label (Help text)",
};

States.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  children,
};

export default story;

export { States };
