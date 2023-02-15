/* import Label, { states } from "../index";
import { StyledContentStates } from "./stories.styles";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  children,
  state,
} from "./props";

const story = {
  title: "components/inputs/States",
  components: [Label],
  parameters,
};

const States = ({ isDisabled, isFocused, children, htmlFor, state }) => {
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
  htmlFor: "idComponent",
  children: "Label (Help text)",
};

States.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  children,
  state,
};

export default story;

export { States };
 */
