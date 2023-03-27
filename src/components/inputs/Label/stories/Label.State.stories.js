import { Label } from "../";
import { states } from "../";
import { StyledContentStates } from "./stories.styles";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  children,
  typo,
} from "./props";

const story = {
  title: "inputs/Label/States",
  components: [Label],
  parameters,
};

const States = ({ isDisabled, isFocused, children, typo, htmlFor }) => {
  return (
    <StyledContentStates>
      {states.map((state) => (
        <Label
          isDisabled={isDisabled}
          isFocused={isFocused}
          state={state}
          htmlFor={htmlFor}
          typo={typo}
          key={state}
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
  typo: "labelLarge",
  children: "Label Text",
};

States.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  typo,
  children,
};

export default story;

export { States };
