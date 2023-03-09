import { Label } from "../";
import { states } from "../";
import { StyledContentStates } from "./stories.styles";

import { parameters, isDisabled, isFocused, htmlFor, children } from "./props";

const story = {
  title: "inputs/labels/States",
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
  children: "Label Text",
};

States.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  children,
};

export default story;

export { States };
