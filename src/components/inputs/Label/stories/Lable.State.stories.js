import Label from "../index";
import { StyledContentStates } from "./stories.styles";

import { parameters, htmlFor, children, state } from "./stories.args";

const story = {
  title: "components/inputs/States",
  components: [Label],
  parameters,
};

const States = ({ children, htmlFor }) => {
  return (
    <StyledContentStates>
      {state.options.map((state, index) => (
        <Label state={state} key={index} htmlFor={htmlFor}>
          {children}
        </Label>
      ))}
    </StyledContentStates>
  );
};

States.args = {
  children: "Label (Help text)",
  htmlFor: "idComponent",
};

States.argTypes = {
  htmlFor,
  children,
};

export default story;

export { States };
